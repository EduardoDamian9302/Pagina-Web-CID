import React from "react";
import { Card } from "react-bootstrap";
import * as motion from "motion/react-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import "./Css/CardButton.module.css";

interface CardButtonProps {
  title: string;
  icon: IconProp;
  onClick: () => void;
  iconSize?: SizeProp;
  colors?: {
    headerBg?: string;
    headerText?: string;

    bodyBg: string;
    icon?: string;
  };
}

const CardButton: React.FC<CardButtonProps> = ({
  title,
  icon,
  onClick,
  iconSize = "5x",
  colors = {
    headerBg: undefined,
    headerText: undefined,
    bodyBg: "#fff",
    icon: undefined,
  },
}) => {
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
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{ width: "18rem" }}
    >
      <Card
        style={cardStyles}
        onClick={onClick}
        role="button"
        tabIndex={0}
        className="shadow-sm h-100"
        id="Card"
      >
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
    </motion.div>
  );
};

export default CardButton;
