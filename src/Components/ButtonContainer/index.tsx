import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./buttonContainer.scss";

const ButtonContainer: React.FC = () => {
  return (
    <div className="wrapper">
      <ButtonGroup aria-label="Basic example">
        <Button variant="danger">DISLIKE</Button>
        <Button variant="primary">LIKE</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonContainer;
