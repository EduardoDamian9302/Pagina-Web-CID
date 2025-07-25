import { Button, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./Head.module.css";
import React, { useState } from "react";
import OffCanvas from "./OffCanvas.tsx";

const Head: React.FC = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleOpen = () => setShowOffCanvas(true);
  const handleClose = () => setShowOffCanvas(false);

  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          background: "#0c231e",
          color: "#ffffff",
          textAlign: "center",
          fontWeight: "bold",
          padding: "4px 0",
          letterSpacing: "1px",
          fontSize: "1.1rem",
        }}
      >
        <img
          src="/logo192.png"
          width="32"
          height="32"
          className={styles.logo}
          alt="React logo"
        />
        <div className={styles.navDropdown}>
          <NavDropdown title="Tramites" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Tramite 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Tramite 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tramite 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Informacion" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Informacion 1
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Informacion 2
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Informacion 3
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
      <Navbar expand="lg" className={styles.navbar}>
        <Container className={styles.navbarContainer}>
          <Navbar.Brand href="#home" className={styles.navbarBrand}>
            React-CID
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Button variant="outline-light" onClick={handleOpen}>
              Abrir dropdown
            </Button>
            <OffCanvas show={showOffCanvas} handleClose={handleClose} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Head;
