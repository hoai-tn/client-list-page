import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClientTable from "./client-table";

export default {
  component: ClientTable,
} as ComponentMeta<typeof ClientTable>;

const Template: ComponentStory<typeof ClientTable> = (args) => (
  <ClientTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  clientsData: [
    {
      id: 1,
      name: "Client Name 1",
      primaryContact: "Contact 1",
      mostRecentProject: "Project 1",
      projectStatus: "Project Status 1",
      accountManager: "Account Manager 1",
      numberOfProjects: "2",
      allTimeBilled: "123.45",
    },
    {
      id: 2,
      name: "Client Name 2",
      primaryContact: "Contact 2",
      mostRecentProject: "Project 2",
      projectStatus: "Project Status 2",
      accountManager: "Account Manager 2",
      numberOfProjects: "31",
      allTimeBilled: "13.55",
    },
  ],
};
