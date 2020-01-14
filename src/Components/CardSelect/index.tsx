import React from "react";
import { Image } from "react-bootstrap";
import "./cardSelect.scss";

const CardSelect: React.FC = () => {
  return (
    <div className="wrapper">
      <Image
        className="img-card"
        src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        rounded
        fluid
      />
    </div>
  );
};

export default CardSelect;
