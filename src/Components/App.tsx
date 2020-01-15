import React from "react";
import logo from "./logo.svg";
import "./app.scss";
import "../Styles/reset.scss";
import CardSelect from "./CardSelect";
import ButtonContainer from "./ButtonContainer";

const App = () => {
  return (
    <div className="App">
      <h1>SomeThingToIt</h1>
      <CardSelect />
      <ButtonContainer />
    </div>
  );
};

export default App;
