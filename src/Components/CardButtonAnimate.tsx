import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import CardButton from "./CardButton";
import BodyContent, { type ContentSection } from "./BodyContent";
import { faUser, faFile, faChartPie } from "@fortawesome/free-solid-svg-icons";
import UsersComponent from "./UsersComponent";
import SalesChart from "./Grafica";
import EchartComponent from "./EchartComponent";
import FileViewer from "./FileViewer";

interface CardData {
  id: string;
  title: string;
  icon: any;
  colors?: {
    headerBg: string;
    headerText: string;
    bodyBg?: string;
    icon?: string;
  };
  content: ContentSection[];
}

const option: echarts.EChartsOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Grafica de ejemplo",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};
const pdfUrl =
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
const pptxUrl =
  "https://file-examples.com/storage/fe1134defc6538ed39b8efa/2017/02/file_example_PPTX_250kB.pptx";
const docxUrl =
  "https://file-examples.com/storage/fe1134defc6538ed39b8efa/2017/02/file-example_DOCX_100kB.docx";

const CardDetails: CardData[] = [
  {
    id: "users",
    title: "Usuarios",
    icon: faUser,
    colors: { headerBg: "#007bff", headerText: "#ffffff", icon: "#007bff" },
    content: [
      {
        sectionId: "user-list",
        title: "Lista Usuarios",
        component: <UsersComponent /> /* Agregar componente */,
      },
      {
        sectionId: "user-checks",
        title: "Permisos Usuarios",
        component: (
          <div>
            {" "}
            <FileViewer fileUrl={pdfUrl} />
          </div>
        ),
      },
    ],
  },
  {
    id: "tableros",
    title: "Tableros",
    icon: faChartPie,
    colors: { bodyBg: "#ddc9a3", headerBg: "#ddc9a3", headerText: "#000000" },
    content: [
      {
        sectionId: "first-graph",
        title: "Grafica Uno",
        component: <SalesChart />,
      },
      {
        sectionId: "second-graph",
        title: "Segunda grafica",
        component: <EchartComponent option={option} />,
      },
    ],
  },
  {
    id: "reports",
    title: "Reportes",
    icon: faFile,
    content: [
      {
        sectionId: "reports-list",
        title: "Reportes Generales",
        component: <SalesChart />,
      },
      {
        sectionId: "reports-graph",
        title: "Grafica",
        description: "Grafica de ejemplo",
        component: (
          <EchartComponent option={option} style={{ height: "400px" }} />
        ),
      },
      {
        sectionId: "reports-graph2",
        title: "Grafica2",
        description: "lorem ipsum dolor sit amet",
        component: (
          <EchartComponent option={option} style={{ height: "400px" }} />
        ),
      },
      {
        sectionId: "reports-graph3",
        title: "Grafica3",
        component: (
          <EchartComponent option={option} style={{ height: "400px" }} />
        ),
      },
      {
        sectionId: "reports-graph4",
        title: "Grafica4",
        component: (
          <EchartComponent option={option} style={{ height: "400px" }} />
        ),
      },
    ],
  },
];

const portalVariants = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

const CardButtonAnimate: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const selectedCardData = CardDetails.find(
    (card) => card.id === selectedCardId
  );

  return (
    <Container
      fluid
      className="pt-3 justify-content-center"
      style={{
        minHeight: "100vh",
        height: "100vh",
        flexDirection: "column",
        paddingTop: "10px",
        paddingBottom: "0px",
      }}
    >
      <div style={{ position: "relative", minHeight: "600px" }}>
        <h1 className="text-center mb-4">Panel principal</h1>
        <motion.div
          animate={{ opacity: selectedCardId ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          style={{
            pointerEvents: selectedCardId ? "none" : "auto",
            position: selectedCardId ? "absolute" : "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Row
            className="g-4 justify-content-center"
            style={{ height: "100%" }}
          >
            {CardDetails.map((card) => (
              <Col
                key={card.id}
                md={6}
                lg={4}
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "200px" }}
              >
                <motion.div layoutId={card.id}>
                  <CardButton
                    {...card}
                    icon={card.icon}
                    onClick={() => setSelectedCardId(card.id)}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
        <AnimatePresence>
          {selectedCardData && (
            <div
              style={{
                top: 0,
                left: 0,
                bottom: 0,
                zIndex: 9,
                height: "100%",
              }}
            >
              <motion.div
                key="portal-bg"
                variants={portalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  //background: "#f8f9fa",
                  borderRadius: "0.5rem",
                  //boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <BodyContent content={selectedCardData.content} />
              </motion.div>
              <motion.div
                layoutId={selectedCardData.id}
                style={{
                  position: "absolute",
                  //top: "10px",
                  left: "20px",
                  width: "250px",
                  zIndex: 9,
                }}
              >
                <CardButton
                  {...selectedCardData}
                  icon={selectedCardData.icon}
                  onClick={() => setSelectedCardId(null)}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default CardButtonAnimate;
