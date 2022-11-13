import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClientFormDialog from "./client-form-dialog";
import Button from "@mui/material/Button";
import { useState } from "react";
import { IClientForm } from "../../interfaces";

export default {
  component: ClientFormDialog,
} as ComponentMeta<typeof ClientFormDialog>;

const Template: ComponentStory<typeof ClientFormDialog> = (args) => {
  const [open, setOpen] = useState(true);
  const [clientForm, setClientForm] = useState<IClientForm>();
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Client form dialog
      </Button>
      <ClientFormDialog
        isOpen={open}
        action="Create"
        onSubmitForm={(clientForm) => setClientForm(clientForm)}
        onClose={() => setOpen(false)}
      />
      <span>{JSON.stringify(clientForm)}</span>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
