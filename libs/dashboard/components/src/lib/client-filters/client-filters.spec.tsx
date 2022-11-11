import { render } from "@testing-library/react";

import ClientTable from "./client-table";

describe("Client Table", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ClientTable
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
