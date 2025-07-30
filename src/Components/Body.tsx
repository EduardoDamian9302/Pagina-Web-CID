import CardButton from "./CardButton.tsx";
import { faUser, faCab, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Body() {
  return (
    <Container className="py-5" style={{ marginTop: "80px" }}>
      <h1 className="text-center mb-4">Prueba card-buttons</h1>
      <Row className="g-5">
        <Col md={6} lg={4}>
          <CardButton
            title="Boton 1"
            icon={faUser}
            onClick={() => alert("Boton 1 clickeado")}
          />
        </Col>
        <Col md={6} lg={4}>
          <CardButton
            title="Boton 2"
            icon={faCab}
            onClick={() => alert("Boton 2 clickeado")}
          />
        </Col>
        <Col md={6} lg={4}>
          <CardButton
            title="Boton 3"
            icon={faChartBar}
            onClick={() => alert("Boton 3 clickeado")}
          />
        </Col>
        <Col md={6} lg={4}>
          <CardButton
            title="Boton 4"
            icon={faUser}
            onClick={() => alert("Boton 4 clickeado")}
            colors={{
              bodyBg: "#ddc9a3",
              headerText: "#000000ff",
              headerBg: "#ddc9a3",
            }}
          />
        </Col>
        <Col md={6} lg={4}>
          <CardButton
            title="Boton 5"
            icon={faUser}
            onClick={() => alert("Boton 5 clickeado")}
            colors={{ bodyBg: "#bc955c", headerText: "#ffffff" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
