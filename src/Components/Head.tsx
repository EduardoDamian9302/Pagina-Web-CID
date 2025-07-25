import React from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { useState } from "react";
const Head: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="head-container">
      <header className="head-header">
        <h1>Welcome to the Head Component</h1>
        <Button variant="primary" onClick={handleShow}>
          Open Menu
        </Button>
      </header>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Add your menu items here */}
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default Head;
