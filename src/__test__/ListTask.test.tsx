import React from "react";
import renderer from "react-test-renderer";
import TaskList from "../components/TaskList";

describe("TaskList", () => {
  it("should render correctly", () => {
    const component = renderer.create(<TaskList />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
