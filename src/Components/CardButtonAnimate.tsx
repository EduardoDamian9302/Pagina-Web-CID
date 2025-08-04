import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import CardButton from "./CardButton";
import BodyContent, { type ContentSection } from "./BodyContent";
import { faUser, faFile, faChartPie } from "@fortawesome/free-solid-svg-icons";
import UsersComponent from "./UsersComponent";
import SalesChart from "./Grafica";

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
        component: <div>Aqui va un elemento</div>,
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
        component: <div>Aqui esta otro elemento</div>,
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
        component: <div>Tercer elemento</div>,
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
    <Container className="py-3">
      <h1 className="text-center mb-4">Panel principal</h1>
      <div style={{ position: "relative", minHeight: "600px" }}>
        <motion.div
          animate={{ opacity: selectedCardId ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          style={{
            pointerEvents: selectedCardId ? "none" : "auto",
            position: selectedCardId ? "absolute" : "relative",
            width: "100%",
          }}
        >
          <Row className="g-4">
            {CardDetails.map((card) => (
              <Col key={card.id} md={6} lg={4}>
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
                zIndex: 40,
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
                  background: "#f8f9fa",
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <BodyContent content={selectedCardData.content} />
              </motion.div>
              <motion.div
                layoutId={selectedCardData.id}
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  width: "250px",
                  zIndex: 50,
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
