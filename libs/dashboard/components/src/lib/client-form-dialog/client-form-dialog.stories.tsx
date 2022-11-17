import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClientFormDialog from "./client-form-dialog";
import Button from "@mui/material/Button";
import { useState } from "react";
import { IClientForm } from "../../interfaces";

export default {
  component: ClientFormDialog,
} as ComponentMeta<typeof ClientFormDialog>;

const Template: ComponentStory<typeof ClientFormDialog> = (args) => {
  const [open, setOpen] = useState(false);
  const [clientForm, setClientForm] = useState<IClientForm>();
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        data-testid="open-form"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Open Client form dialog
      </Button>
      <ClientFormDialog
        isOpen={open}
        action="Create"
        onSubmitForm={(clientForm) => {
          setClientForm(clientForm);
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
      />
      <pre>
        <textarea
          id="text-area-test-data"
          style={{ width: "500", height: 100, marginTop: 10 }}
          value={JSON.stringify(clientForm)}
        ></textarea>
      </pre>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
