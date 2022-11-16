import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import ClientFilters from "./client-filters";

export default {
  component: ClientFilters,
} as ComponentMeta<typeof ClientFilters>;

const Template: ComponentStory<typeof ClientFilters> = (args) => {
  const [clientFiltersList, setClientFiltersList] = useState("");
  return (
    <>
      <ClientFilters
        onFilters={(filters) => setClientFiltersList(JSON.stringify(filters))}
      />
      <pre>
        <textarea
          id="text-area-test-data"
          style={{ width: 413, height: 47, marginTop: 10 }}
          value={clientFiltersList}
        ></textarea>
      </pre>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
