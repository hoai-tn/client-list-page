import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClientModal from "./client-modal";

export default {
  component: ClientModal,
} as ComponentMeta<typeof ClientModal>;

const Template: ComponentStory<typeof ClientModal> = (args) => (
  <ClientModal  />
);

export const Primary = Template.bind({});
Primary.args = {
};
