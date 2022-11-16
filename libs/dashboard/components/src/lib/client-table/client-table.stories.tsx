import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClientTable from "./client-table";
import clientsList from "../../../.storybook/storybook_public/config/clientsList.json";

export default {
  component: ClientTable,
} as ComponentMeta<typeof ClientTable>;

const Template: ComponentStory<typeof ClientTable> = (args) => {
  const clientsList = JSON.stringify(args.clients);
  return (
    <div style={{maxWidth: 1160}}>
      <ClientTable {...args} />
      <pre>
        <textarea
          id="text-area-test-data"
          style={{ width: "100%", height: 100, marginTop: 10 }}
          value={clientsList}
        ></textarea>
      </pre>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  clients: clientsList,
};
