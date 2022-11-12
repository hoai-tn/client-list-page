import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClientFormDialog from "./client-form-dialog";

export default {
  component: ClientFormDialog,
} as ComponentMeta<typeof ClientFormDialog>;

const Template: ComponentStory<typeof ClientFormDialog> = (args) => (
  <ClientFormDialog />
);

export const Primary = Template.bind({});
Primary.args = {};
