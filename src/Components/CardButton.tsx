import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import "./Css/CardButton.module.css";

interface CardButtonProps {
  title: string;
  icon: IconProp;
  iconSize?: SizeProp;
  colors?: {
    headerBg?: string;
    headerText?: string;

    bodyBg?: string;
    icon?: string;
  };
  onClick: () => void;
}

const CardButton: React.FC<CardButtonProps> = ({
  title,
  icon,
  iconSize = "5x",
  colors = {
    headerBg: undefined,
    headerText: undefined,
    bodyBg: "#fff",
    icon: undefined,
  },
  onClick,
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
    <Card style={cardStyles} onClick={onClick}>
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
  );
};

export default CardButton;
