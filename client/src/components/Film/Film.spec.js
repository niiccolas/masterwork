import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Film from "./Film";

const props = {
  _id: "00",
  title: "Lorem",
  img: "/assets/images/potemkine.jpg",
  description: "Ipsum",
  release: "1912-12-12",
};

const corruptProps = {
  _id: "00",
  title: "Lorem",
};

describe("Film", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Film {...props} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should not render without title or image or description", () => {
    const wrapper = shallow(<Film {...corruptProps} />);
    expect(wrapper.exists(".Film")).toBeFalsy();
  });
});
