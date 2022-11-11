import { render } from "@testing-library/react";

import ClientModal from "./client-modal";

describe("Client Modal", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ClientModal />);
    expect(baseElement).toBeTruthy();
  });
});
