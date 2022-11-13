import { render } from "@testing-library/react";

import ClientFormDialog from "./client-form-dialog";

describe("Client Modal", () => {
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
});
