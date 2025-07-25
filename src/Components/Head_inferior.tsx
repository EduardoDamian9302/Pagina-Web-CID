import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import styles from "./Head.module.css";
import OffCanvas from "./OffCanvas.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const HeadInferior: React.FC = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const handleOpen = () => setShowOffCanvas(true);
  const handleClose = () => setShowOffCanvas(false);

  return (
    <div>
      <Navbar expand="lg" className={styles.navbar}>
        <Container className={styles.navbarContainer}>
          <Navbar.Brand href="#home" className={styles.navbarBrand}>
            React-CID
          </Navbar.Brand>
          <Button
            variant="outline-light"
            onClick={handleOpen}
            style={{
              border: "none",
              background: "transparent",
              boxShadow: "none",
              padding: "6px 10px",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <OffCanvas show={showOffCanvas} handleClose={handleClose} />
        </Container>
      </Navbar>
    </div>
  );
};
export default HeadInferior;
