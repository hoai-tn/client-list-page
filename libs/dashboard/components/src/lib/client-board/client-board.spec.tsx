import { render } from "@testing-library/react";
import { Client } from "../../interfaces";

import ClientBoard from "./client-board";

describe("Client Table", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ClientBoard clientsList={clientsList} />);
    expect(baseElement).toBeTruthy();
  });
});

const clientsList: Client[] = [
  {
    id: "1",
    name: "Client Name 1",
    primaryContact: "Contact 1",
    mostRecentProject: "Project 1",
    projectStatus: "Project Status 1",
    accountManager: "Account Manager 1",
    numberOfProjects: 2,
    allTimeBilled: 123.45,
  },
  {
    id: "2",
    name: "Client Name 2",
    primaryContact: "Contact 2",
    mostRecentProject: "Project 2",
    projectStatus: "Project Status 2",
    accountManager: "Account Manager 2",
    numberOfProjects: 31,
    allTimeBilled: 13.55,
  },
  {
    id: "3",
    name: "Client Name 3",
    primaryContact: "Contact 3",
    mostRecentProject: "Project 3",
    projectStatus: "Project Status 3",
    accountManager: "Account Manager 3",
    numberOfProjects: 11,
    allTimeBilled: 20.55,
  },
];
