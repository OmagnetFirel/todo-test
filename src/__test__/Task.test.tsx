import React from "react";
import renderer from "react-test-renderer";
import Task from "../components/Task";

describe("Task", () => {
  it("should render correctly", () => {
    const component = renderer.create(<Task taskName="teste" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});