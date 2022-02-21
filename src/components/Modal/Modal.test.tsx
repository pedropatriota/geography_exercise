import { render } from "@testing-library/react";

import { Modal } from "./Modal";

describe("Snapshot test", () => {
  it("Should represent de Modal", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const modal = render(
      <Modal
        open={true}
        close={() => console.log("close")}
        labelButton="close"
        info="2 of 3"
      />
    );

    expect(modal).toMatchSnapshot();
  });
});
