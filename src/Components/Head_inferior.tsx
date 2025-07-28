import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import styles from "./Css/Head.module.css";
import OffCanvas from "./OffCanvas.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const HeadInferior: React.FC = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleOpen = () => setShowOffCanvas(true);
  const handleClose = () => setShowOffCanvas(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 30) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Navbar
      expand="lg"
      className={styles.navbar}
      style={{ top: visible ? "0" : "-80px" }}
    >
      <Container
        fluid
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Navbar.Brand
            href="#home"
            style={{
              marginLeft: 0,
              paddingLeft: 16,
              color: "#fff",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            React-CID
          </Navbar.Brand>
          <div style={{ position: "absolute", right: 16 }}>
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
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
        </div>
        <OffCanvas show={showOffCanvas} handleClose={handleClose} />
      </Container>
    </Navbar>
  );
};
export default HeadInferior;
