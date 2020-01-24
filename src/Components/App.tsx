import React from "react";
import logo from "./logo.svg";
import "./app.scss";
import "../Styles/reset.scss";
import CardSelect from "./CardSelect";
import ButtonContainer from "./ButtonContainer";
import useDish from "../Hooks/useDish";
import { Button } from "react-bootstrap";

const App = () => {
  const { dish, onLikeDish, onDislikeDish, onGetAllDishes } = useDish();

  console.log(dish);
  return (
    <div className="App">
      <h1>SomeThingToIt</h1>
      <Button onClick={() => onGetAllDishes([])}>GraphQL Query</Button>
      <CardSelect />
      <ButtonContainer />
    </div>
  );
};

export default App;
