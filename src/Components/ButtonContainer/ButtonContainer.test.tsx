import React from "react";
import { shallow } from "enzyme";
import ButtonContainer from "./index";

describe("ButtonContainer", () => {
  const buttonContainer = shallow(<ButtonContainer />);
  it("renders correctly", () => {
    expect(buttonContainer).toMatchSnapshot();
  });

  it("has `wrapper` class", () => {
    expect(buttonContainer.find(".wrapper").exists()).toBe(true);
  });

  // Button Group
  describe("ButtonGroup", () => {
    let buttonGroup = buttonContainer.find("ButtonGroup");

    it("renders correctly", () => {
      expect(buttonGroup.exists()).toBe(true);
    });

    it("has two children", () => {
      expect(buttonGroup.children("Button").length).toEqual(2);
    });
  });

  it("has ButtonGroup", () => {});

  it("has two buttons", () => {
    expect(buttonContainer.find("Button").length).toEqual(2);
  });
});
