import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClientFilters from "./client-filters";

export default {
  component: ClientFilters,
} as ComponentMeta<typeof ClientFilters>;

const Template: ComponentStory<typeof ClientFilters> = (args) => (
  <ClientFilters  />
);

export const Primary = Template.bind({});
Primary.args = {};
