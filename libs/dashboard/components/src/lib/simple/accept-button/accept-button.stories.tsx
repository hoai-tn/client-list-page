import { ComponentStory, ComponentMeta } from "@storybook/react";
import AcceptButton from "./accept-button";
import React, { useState } from "react";

export default {
  component: AcceptButton,
} as ComponentMeta<typeof AcceptButton>;

const Template: ComponentStory<typeof AcceptButton> = (args) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  return (
    <div>
      <AcceptButton onClick={() => setIsClick(true)} {...args} />
      <pre>
        <textarea
          id="click-btn-test-data"
          style={{ width: 213, height: 37, marginTop: 10 }}
          value={`clickState: ${isClick}`}
          onChange={() => console.log("on change")}
        ></textarea>
      </pre>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};

export const Basic = () => {
  return (
    <div>
      <div id={"button-clicked-div"} style={{ display: "none" }}>
        Button Clicked
      </div>
      <AcceptButton
        onClick={() => {
          const elementById = document.getElementById("button-clicked-div");
          if (elementById) {
            elementById.style.display = "inline";
          }
        }}
        text={"something else"}
        type={"button"}
      />
    </div>
  );
};
export const Second = () => <AcceptButton text="Accept" color_={"secondary"} />;
