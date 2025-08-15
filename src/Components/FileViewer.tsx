import React, { useState, useEffect, useRef } from "react";
import mammoth from "mammoth";
import pptx2html from "pptx2html";
import * as XLSX from "xlsx";
import { Document, Page, pdfjs } from "react-pdf";
import { Button, ButtonGroup } from "react-bootstrap";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./Css/FileViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  `pdfjs-dist/build/pdf.worker.min.mjs`,
  import.meta.url
).toString();

interface FileViewerProps {
  file?: File;
  fileUrl?: string;
}

const FileViewer: React.FC<FileViewerProps> = ({ file, fileUrl }) => {
  const [fileType, setFileType] = useState<string | null>(null);
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [sheets, setSheets] = useState<any[]>([]);
  const [activeSheetIndex, setActiveSheetIndex] = useState(0);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resetState = () => {
      setFileType(null);
      setHtmlContent("");
      setSheets([]);
      setNumPages(null);
      setPageNumber(1);
      setError(null);
      if (fileInputRef.current) fileInputRef.current.innerHTML = "";
    };
    // Procesar el archivo dependiendo de su tipo
    const processArrayBuffer = async (
      buffer: ArrayBuffer,
      extension: string
    ) => {
      resetState();
      setFileType(extension);

      try {
        switch (extension) {
          case "docx":
            const docxResult = await mammoth.convertToHtml({
              arrayBuffer: buffer,
            });
            setHtmlContent(docxResult.value);
            break;
          case "xlsx":
            const workbook = XLSX.read(buffer, { type: "array" });
            const sheetNames = workbook.SheetNames;
            const allSheets = sheetNames.map((name) => ({
              name,
              html: XLSX.utils.sheet_to_html(workbook.Sheets[name]),
            }));
            setSheets(allSheets);
            setHtmlContent(allSheets[0]?.html || "");
            setActiveSheetIndex(0);
            break;
          case "pptx":
            if (fileInputRef.current) {
              pptx2html(buffer, fileInputRef.current, {
                slideMode: true,
                responsive: true,
              });
            }
            break;
        }
      } catch (e: any) {
        console.error("Error processing file:", e);
        setError(`Error processing file: ${extension}.`);
      }
    };

    resetState();

    // Cargar archivo desde File o URL
    if (file) {
      const extension = file.name.split(".").pop()?.toLowerCase() || "";
      if (extension === "pdf") {
        setFileType("pdf");
      } else {
        const reader = new FileReader();
        reader.onload = (e) =>
          processArrayBuffer(e.target?.result as ArrayBuffer, extension);
        reader.onerror = () => setError("No se puede leer el archivo.");
        reader.readAsArrayBuffer(file);
      }
    } else if (fileUrl) {
      const extension =
        new URL(fileUrl).pathname.split(".").pop()?.toLowerCase() || "";
      if (extension === "pdf") {
        setFileType("pdf");
      } else {
        const fetchAndProcessUrl = async () => {
          try {
            const response = await fetch(fileUrl);
            if (!response.ok) {
              throw new Error(`Error de red: ${response.statusText}`);
            }
            const buffer = await response.arrayBuffer();
            await processArrayBuffer(buffer, extension);
          } catch (e: any) {
            console.error("No se pudo cargar el archivo desde la URL:", e);
            setError(
              "No se pudo cargar el archivo desde la URL. Verifica la URL y la configuracion CORS del servidor."
            );
          }
        };
        fetchAndProcessUrl();
      }
    }
  }, [file, fileUrl]);

  // Funciones de navegación de PDF
  const handleZoomIn = () => setScale((prevScale) => prevScale + 0.1);
  const handleZoomOut = () =>
    setScale((prevScale) => Math.max(0.1, prevScale - 0.1));
  const toogleFullScreen = () => {
    if (fileInputRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        fileInputRef.current.requestFullscreen();
      }
    }
  };
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) =>
    setNumPages(numPages);
  const goToPreviousPage = () => setPageNumber((P) => Math.max(1, P - 1));
  const goToNextPage = () => setPageNumber((P) => Math.min(numPages!, P + 1));

  // Renderizado del contenido
  const sourceName =
    file?.name || fileUrl?.substring(fileUrl.lastIndexOf("/") + 1);

  if (error) {
    return (
      <div style={{ padding: "20px", color: "red" }}>
        <p>Error:</p>
        {error}
      </div>
    );
  }

  if (!fileType) {
    return <div style={{ padding: "20px" }}></div>;
  }

  return (
    <div>
      <div style={controlBarStyle}>
        <span>
          <b>Archivo:</b> {sourceName}
        </span>
        <ButtonGroup>
          <Button onClick={handleZoomOut} variant="secondary" size="sm">
            -
          </Button>
          <Button onClick={handleZoomIn} variant="secondary" size="sm">
            +
          </Button>
          <Button onClick={toogleFullScreen} variant="secondary" size="sm">
            Pantalla Completa
          </Button>
        </ButtonGroup>
      </div>

      <div
        ref={fileInputRef}
        style={{ ...fileViewerStyle, transform: `scale(${scale})` }}
      >
        {fileType === "pdf" && (
          <div>
            <div style={controlBarStyle}>
              <span>
                <b>Páginas:</b> {numPages}
              </span>
              <ButtonGroup>
                <Button
                  onClick={goToPreviousPage}
                  variant="secondary"
                  size="sm"
                  disabled={pageNumber <= 1}
                >
                  Anterior
                </Button>
                <Button
                  onClick={goToNextPage}
                  variant="secondary"
                  size="sm"
                  disabled={pageNumber >= numPages!}
                >
                  Siguiente
                </Button>
              </ButtonGroup>
            </div>
            <Document
              file={file || fileUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div>Cargando PDF...</div>}
              onLoadError={(e) =>
                setError(`Error al cargar el PDF: ${e.message}`)
              }
            >
              <Page pageNumber={pageNumber} scale={1} />
            </Document>
          </div>
        )}
        {(fileType === "docx" || fileType === "xlsx") && (
          <div>
            {fileType === "xlsx" && sheets.length > 1 && (
              <div style={sheetTabsStyle}>
                {sheets.map((sheet, index) => (
                  <Button
                    key={sheet.name}
                    onClick={() => {
                      setActiveSheetIndex(index);
                      setHtmlContent(sheet.html);
                    }}
                    style={index === activeSheetIndex ? activeTabStyle : {}}
                  >
                    {sheet.name}
                  </Button>
                ))}
              </div>
            )}
            <div
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className="office-content"
            />
          </div>
        )}
        {fileType === "pptx" && <div className="pptx-container"></div>}

        {!(fileType && ["pdf", "docx", "xlsx", "pptx"].includes(fileType)) && (
          <p>Este formato de archivo no es soportado.</p>
        )}
      </div>
    </div>
  );
};

// Estilos para el visor de archivos

const controlBarStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  backgroundColor: "#f8f9fa",
  marginBottom: "10px",
  borderRadius: "5px",
};
const fileViewerStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "10px",
  overflow: "auto",
  backgroundColor: "white",
  height: "70vh",
  transformOrigin: "top center",
};
const sheetTabsStyle: React.CSSProperties = {
  marginBottom: "10px",
  borderBottom: "1px solid #ccc",
  paddingBottom: "5px",
};
const activeTabStyle: React.CSSProperties = {
  backgroundColor: "#007bff",
  color: "white",
  border: "1px solid #007bff",
};

export default FileViewer;
