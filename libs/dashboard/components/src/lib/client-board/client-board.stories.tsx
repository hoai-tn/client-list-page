import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import ClientBoard from "./client-board";
import clientsList from "../../../.storybook/storybook_public/config/clientsList.json";
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
          id="text-area-test-data"
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
  clientsList: clientsList,
};
