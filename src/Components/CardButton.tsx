import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion, AnimatePresence, scale } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import "./Css/CardButton.module.css";

interface CardButtonProps {
  id: string;
  title: string;
  icon: IconProp;
  iconSize?: SizeProp;
  colors?: {
    headerBg?: string;
    headerText?: string;

    bodyBg?: string;
    icon?: string;
  };
  onSelect: (id: string) => void;
  onDeselect: (id: string) => void;
  isSelected: boolean;
}

const variantesCard = {
  initial: {
    x: 0,
    y: 0,
    scale: 1,
    zIndex: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
  selected: (topRightPosition: { x: number; y: number }) => ({
    x: topRightPosition.x,
    y: topRightPosition.y,
    scale: 1.2,
    zIndex: 10,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  }),
};

const CardButton: React.FC<CardButtonProps> = ({
  id,
  title,
  icon,
  iconSize = "5x",
  colors = {
    headerBg: undefined,
    headerText: undefined,
    bodyBg: "#fff",
    icon: undefined,
  },
  onSelect,
  onDeselect,
  isSelected,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const cardStyles: React.CSSProperties = {
    cursor: "pointer",
    userSelect: "none",
    aspectRatio: "4 / 5",
    border: "1px solid #dee2e6",
    zIndex: "1",
    borderRadius: "50px",
    backgroundColor: colors.bodyBg || "#ffffff",
  };
  const headerStyles: React.CSSProperties = {
    backgroundColor: colors.headerBg || colors.bodyBg,
    color: colors.headerText || "#212529",
    borderBottom: "1px solid #10312B",
  };
  const bodyStyles: React.CSSProperties = {
    backgroundColor: colors.bodyBg || "#ffffff",
  };
  const iconColorStyle: React.CSSProperties = {
    color: colors.icon || "#333333",
  };
  const topRightPosition = { x: window.innerWidth / 1.5, y: -50 };

  const handleCardClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      onSelect(id);
    }
  };
  const handleReturnClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      onDeselect(id);
    }
  };
  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };
  return (
    <motion.div
      className="h-100"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{ width: "18rem", position: "relative" }}
      variants={variantesCard}
      animate={isSelected ? "selected" : "initial"}
      custom={topRightPosition}
      onClick={handleCardClick}
      onAnimationComplete={handleAnimationComplete}
      tabIndex={0}
      role="button"
    >
      <Card style={cardStyles}>
        <Card.Header style={headerStyles} className="text-center fw-bold">
          {title}
        </Card.Header>
        <Card.Body
          style={bodyStyles}
          className="d-flex justify-content-center align-items-center"
        >
          <FontAwesomeIcon icon={icon} style={iconColorStyle} size={iconSize} />
        </Card.Body>
      </Card>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              zIndex: "12",
            }}
          >
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={handleReturnClick}
            >
              Regresar
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CardButton;
