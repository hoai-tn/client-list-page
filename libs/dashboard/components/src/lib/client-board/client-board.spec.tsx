import { render } from "@testing-library/react";
import clientsList from "../../../.storybook/storybook_public/config/clientsList.json";

import ClientBoard from "./client-board";

describe("Client Table", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ClientBoard clientsList={clientsList} />);
    expect(baseElement).toBeTruthy();
  });
});

