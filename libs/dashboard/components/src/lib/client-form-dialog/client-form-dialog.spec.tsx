import { render, screen } from "@testing-library/react";

import ClientFormDialog from "./client-form-dialog";

describe("Client Form Dialog", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ClientFormDialog
        isOpen={true}
        action="Create"
        onSubmitForm={(clientForm) => console.log(clientForm)}
        onClose={() => console.log("on close")}
      />
    );
    expect(baseElement).toBeTruthy();
  });
  it("Should open client dialog", () => {
    render(
      <ClientFormDialog
        isOpen={false}
        action="Create"
        onSubmitForm={(clientForm) => console.log(clientForm)}
        onClose={() => console.log("on close")}
      />
    );
    screen.queryByTestId("open-form")?.click();
    expect(screen.queryByTestId("client-dialog")).toBeTruthy();
  });
});
