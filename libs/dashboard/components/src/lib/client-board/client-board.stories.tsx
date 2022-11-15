import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import ClientBoard from "./client-board";

export default {
  component: ClientBoard,
} as ComponentMeta<typeof ClientBoard>;

const Template: ComponentStory<typeof ClientBoard> = (args) => {
  const [clientList, setClientList] = useState<string>(
    JSON.stringify(args.clientsList)
  );
  return (
    <>
      <ClientBoard
        getClients={(clients) => setClientList(JSON.stringify(clients))}
        {...args}
      />
      <pre>
        <textarea
          id="click-btn-test-data"
          style={{ width: 1591, height: 148, marginTop: 10 }}
          value={clientList}
          onChange={(e) => console.log("e")}
        ></textarea>
      </pre>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  clientsList: [
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
      accountManager: "Account Manager 1",
      numberOfProjects: 11,
      allTimeBilled: 20.55,
    },
    {
      id: "4",
      name: "Client Name 1",
      primaryContact: "Contact 3",
      mostRecentProject: "Project 3",
      projectStatus: "Project Status 3",
      accountManager: "Account Manager 2",
      numberOfProjects: 11,
      allTimeBilled: 20.55,
    },
    {
      id: "5",
      name: "Client Name 3",
      primaryContact: "Contact 3",
      mostRecentProject: "Project 3",
      projectStatus: "Project Status 3",
      accountManager: "Account Manager 2",
      numberOfProjects: 11,
      allTimeBilled: 20.55,
    },
    {
      id: "6",
      name: "Client Name 1",
      primaryContact: "Contact 3",
      mostRecentProject: "Project 3",
      projectStatus: "Project Status 3",
      accountManager: "Account Manager 3",
      numberOfProjects: 11,
      allTimeBilled: 20.55,
    },
    {
      id: "7",
      name: "Client Name 3",
      primaryContact: "Contact 3",
      mostRecentProject: "Project 3",
      projectStatus: "Project Status 3",
      accountManager: "Account Manager 3",
      numberOfProjects: 11,
      allTimeBilled: 20.55,
    },
  ],
};
