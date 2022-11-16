import { render } from "@testing-library/react";

import ClientFilters from "./client-filters";

describe("Client Filters", () => {
  let filtersList = {};
  it("should render successfully", () => {
    const { baseElement } = render(
      <ClientFilters onFilters={(filters) => (filtersList = filters)} />
    );
    expect(baseElement).toBeTruthy();
    expect(filtersList).toEqual({
      clientName: "All clients",
      accountManager: "All Account Managers",
    });
  });
});
