import { fireEvent, render, screen } from "@testing-library/react";

import ClientTable from "./client-table";
import clientsList from "../../../.storybook/storybook_public/config/clientsList.json";

describe("Client Table", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ClientTable
        clients={clientsList}
        onUpdate={(client) => console.log(client)}
      />
    );
    expect(baseElement).toBeTruthy();
  });
  it("Check onclick update client", () => {
    render(
      <ClientTable
        clients={clientsList}
        onUpdate={(client) => console.log(client)}
      />
    );
    const threeDot = screen.getAllByTestId("MoreVertIcon")[0];
    fireEvent.click(threeDot);
    const updateData = screen.getAllByTestId("EditIcon");
    expect(updateData).toBeTruthy();
  });
});
