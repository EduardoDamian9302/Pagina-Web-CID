import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import styles from "./Css/Head.module.css";

const HeadSuperior: React.FC = () => {
  const [showTramites, setShowTramites] = useState(false);
  const [showInformacion, setShowInformacion] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        background: "#0c231e",
        minHeight: 40,
      }}
    >
      <img
        src="public/assets/logo-imss-blanco.png"
        width="70"
        height="30"
        className={styles.logo}
        alt="React logo"
        style={{ marginLeft: 0 }}
      />
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: "16px",
          alignItems: "center",
          paddingRight: 20,
        }}
      >
        <div
          onMouseEnter={() => setShowTramites(true)}
          onMouseLeave={() => setShowTramites(false)}
        >
          <NavDropdown
            title="Tramites"
            id="tramites-dropdown"
            className={styles.text_dropdown}
            show={showTramites}
          >
            <NavDropdown.Item href="#action/3.1">Tramite 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Tramite 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tramite 3</NavDropdown.Item>
          </NavDropdown>
        </div>
        <div
          onMouseEnter={() => setShowInformacion(true)}
          onMouseLeave={() => setShowInformacion(false)}
        >
          <NavDropdown
            title="Informacion"
            id="informacion-dropdown"
            className={styles.text_dropdown}
            show={showInformacion}
          >
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
    </div>
  );
};

export default HeadSuperior;
