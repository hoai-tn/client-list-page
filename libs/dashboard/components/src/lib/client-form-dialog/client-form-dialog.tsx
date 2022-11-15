import React, { FormEvent, useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Client, IClientFormDialog } from "../../interfaces";
import SelectInput from "../simple/select-input/select-input";
import TextInput from "../simple/text-input/text-input";
import { Box } from "@mui/material";
import { uuid } from "uuidv4";
import AcceptButton from "../simple/accept-button/accept-button";

const sx = {
  "& .MuiDialog-container": {
    alignItems: "flex-start",
  },
};
export default function ClientFormDialog({
  isOpen,
  client,
  onClose,
  onSubmitForm,
}: IClientFormDialog) {
  const [clientForm, setClientForm] = useState<Client>({
    id: "",
    name: "",
    primaryContact: "",
    accountManager: "",
    mostRecentProject: "",
    projectStatus: "",
    numberOfProjects: 0,
    allTimeBilled: 0,
  });

  useEffect(() => {
    client && setClientForm(client);
  }, [client]);

  const onSubmitClientForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (client && client.id)
      onSubmitForm({ ...client, ...clientForm }, "Update");
    else onSubmitForm({ ...clientForm, id: uuid() }, "Create");
    onClose();
  };

  const onChangeClientForm = (name: string, value: string) => {
    setClientForm({ ...clientForm, [name]: value });
  };
  return (
    <div>
      <Dialog open={isOpen} onClose={onClose} sx={sx}>
        <DialogTitle>
          {client && client.id ? `Update ${client.name}` : "Create Client"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={onSubmitClientForm}>
            <TextInput
              dataTestId={`test-client-name`}
              label="Client Name"
              value={clientForm?.name}
              onChange={(e) => onChangeClientForm("name", e.target.value)}
              sx={{ marginTop: 0, width: 250 }}
              colorLabel="black"
              color="black"
              required={true}
            />
            <SelectInput
              sx={{ width: 250 }}
              label="Primary Contact"
              options={["Contact 1", "Contact 2"]}
              dataTestId=""
              color="black"
              value={clientForm?.primaryContact}
              onChange={(e, value) =>
                onChangeClientForm("primaryContact", String(value))
              }
              required={true}
            />
            <SelectInput
              sx={{ width: 250 }}
              label="Account Manager"
              options={["Account Manager 1", "Account Manager 2"]}
              dataTestId=""
              color="black"
              value={clientForm?.accountManager}
              onChange={(e, value) =>
                onChangeClientForm("accountManager", String(value))
              }
              required={true}
            />
            <Box textAlign="right">
              <AcceptButton
                type="submit"
                text="Submit"
                isFullWidth={false}
                sx={{
                  background: "#ec650a",
                  color: "black",
                  fontWeight: 600,
                  marginRight: 10,
                }}
              />
              <AcceptButton
                onClick={onClose}
                text="Cancel"
                isFullWidth={false}
                sx={{
                  background: "#302828",
                  color: "white",
                  fontWeight: 600,
                }}
              />
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
