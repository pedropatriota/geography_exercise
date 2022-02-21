import { render } from "@testing-library/react";

import { Question } from "./Question";

describe("Snapshot test", () => {
  it("Should represent the Question", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const question = render(
      <Question
        order={1}
        text="Where did the Velvet Revolution take place?"
        responseIdentifier="RESPONSE0"
      />
    );

    expect(question).toMatchSnapshot();
  });
});
