import { render } from "@testing-library/react";

import { Option } from "./Option";

describe("Snapshot test", () => {
  it("Should represent the Option", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const option = render(
      <Option
        order="a"
        option="answer"
        identifier="C0_0"
        status="default"
        responseIdentifier="RESPONSE0"
        disabled={false}
      />
    );

    expect(option).toMatchSnapshot();
  });
});
