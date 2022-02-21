import "jest-styled-components";
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import coverImg from "../../assets/globe.png";
import { Header } from "./Header";

describe("Snapshot test", () => {
  it("Should represent de Header", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const header = render(
      <Header
        title="Geography Test"
        subtitle="Answer the questions in order"
        cover={coverImg}
      />
    );

    expect(header).toMatchSnapshot();
  });
});
