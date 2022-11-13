import React, { FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IClientForm } from "../../interfaces";
import SelectInput from "../simple/select-input/select-input";
import TextInput from "../simple/text-input/text-input";
import { Box } from "@mui/material";
interface IClientFormDialog {
  isOpen: boolean;
  action: "Create" | "Update";
  client?: IClientForm;
  onSubmitForm: (clientForm: IClientForm) => void;
  onClose: () => void;
}

export default function ClientFormDialog({
  isOpen,
  action,
  client,
  onClose,
  onSubmitForm,
}: IClientFormDialog) {
  const [clientForm, setClientForm] = useState<IClientForm>({
    name: "",
    primaryContact: "",
    accountManager: "",
  });

  const onSubmitclientForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitForm(clientForm);
    onClose();
  };

  const onChangeClientForm = (name: string, value: string) => {
    setClientForm({ ...clientForm, [name]: value });
  };
  return (
    <div>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Create Client Name 1</DialogTitle>
        <DialogContent>
          <form onSubmit={onSubmitclientForm}>
            <TextInput
              dataTestId={`test-client-name`}
              label="Client Name"
              value={client?.name}
              onChange={(e) => onChangeClientForm("name", e.target.value)}
              sx={{ marginTop: 0, width: 250 }}
              colorLabel="black"
              color="black"
              required={true}
            />
            <SelectInput
              sx={{ width: 250 }}
              label="Primary Contact"
              options={["Contact1", "Contact 2"]}
              dataTestId=""
              color="black"
              value={client?.primaryContact}
              onChange={(e, value) =>
                onChangeClientForm("primaryContact", String(value))
              }
              required={true}
            />
            <SelectInput
              sx={{ width: 250 }}
              label="Account Manager"
              options={["Account Manager1", "Account Manager 2"]}
              dataTestId=""
              color="black"
              value={client?.accountManager}
              onChange={(e, value) =>
                onChangeClientForm("accountManager", String(value))
              }
              required={true}
            />
            <Box textAlign="right">
              <Button
                style={{
                  background: "#ec650a",
                  color: "black",
                  fontWeight: 600,
                  marginRight: 10,
                }}
                type="submit"
              >
                Save
              </Button>
              <Button
                style={{
                  background: "#302828",
                  color: "white",
                  fontWeight: 600,
                }}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
