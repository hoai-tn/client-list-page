import { render } from "@testing-library/react";

import ClientFilters from "./client-filters";

describe("Client Filters", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ClientFilters onFilters={(filters) => console.log(filters)}/>);
    expect(baseElement).toBeTruthy();
  });
});
