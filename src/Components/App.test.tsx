import React from "react";
// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("creates CardSelect component", () => {
    expect(app.find("CardSelect").exists()).toBe(true);
  });
});
