import React from "react";
import { Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardButtonProps {
  show?: boolean;
  image?: string;
  title: string;
  borderColour?: string;
  backgroundColour?: string;
  position?: string;
  handleClick: () => void;
}

const CardButton: React.FC<CardButtonProps> = ({
  show,
  image,
  title,
  borderColour,
  backgroundColour,
  position,
  handleClick,
}) => {
  return (
    <Card className="bg-dark text-white">
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <FontAwesomeIcon icon="fa-solid fa-user" /> Click Me
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CardButton;
