import React from "react";
import renderer from "react-test-renderer";

import Catalogue from "./Catalogue";

describe("Catalogue", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Catalogue />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
