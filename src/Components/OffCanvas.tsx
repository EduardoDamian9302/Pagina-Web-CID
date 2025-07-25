import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Css/OffCanvas.module.css";

interface OffCanvasProps {
  show: boolean;
  handleClose: () => void;
}

const OffCanvas: React.FC<OffCanvasProps> = ({ show, handleClose }) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      className={styles.offcanvas}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>Contenido del menú desplegable</p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvas;
