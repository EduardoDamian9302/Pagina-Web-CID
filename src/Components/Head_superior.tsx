import React from "react";
import { NavDropdown } from "react-bootstrap";
import styles from "./Head.module.css";

const HeadSuperior: React.FC = () => {
  return (
    <div className={styles.navDropdown}>
      <NavDropdown title="Tramites" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Tramite 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Tramite 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Tramite 3</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Informacion" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Informacion 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Informacion 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Informacion 3</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default HeadSuperior;
