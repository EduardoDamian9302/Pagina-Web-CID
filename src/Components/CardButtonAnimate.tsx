import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import CardButton from "./CardButton";
import { faUser, faFile, faChartPie } from "@fortawesome/free-solid-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CardData {
  id: string;
  title: string;
  icon: IconProp;
  colors?: {
    headerBg: string;
    headerText: string;
    bodyBg?: string;
    icon?: string;
  };
}

const CardDetails: CardData[] = [
  {
    id: "users",
    title: "Usuarios",
    icon: faUser,
    colors: { headerBg: "#007bff", headerText: "#ffffff", icon: "#007bff" },
  },
  {
    id: "billing",
    title: "Reportes",
    icon: faFile,
    colors: {
      headerBg: "#212529",
      headerText: "#ffffff",
      bodyBg: "#f8f9fa",
      icon: "#212529",
    },
  },
  {
    id: "tableros",
    title: "Tableros",
    icon: faChartPie,
    colors: { headerBg: "#198754", headerText: "#ffffff" },
  },
];

const CardButtonAnimate: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleCardSelect = (id: string) => {
    setSelectedCardId(id);
  };
  const handleCardDeselect = (id: string) => {
    if (selectedCardId === id) {
      setSelectedCardId(null);
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Panel animado test</h1>
      <Row className="g-4">
        <AnimatePresence>
          {CardDetails.map((card) => (
            <Col
              key={card.id}
              md={6}
              lg={4}
              style={{
                display:
                  selectedCardId && selectedCardId != card.id
                    ? "none"
                    : "block",
              }}
            >
              <motion.div layout>
                <CardButton
                  {...card}
                  isSelected={selectedCardId === card.id}
                  onSelect={handleCardSelect}
                  onDeselect={handleCardDeselect}
                />
              </motion.div>
            </Col>
          ))}
        </AnimatePresence>
      </Row>
    </Container>
  );
};

export default CardButtonAnimate;
