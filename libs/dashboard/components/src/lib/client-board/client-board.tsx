import { useState } from "react";

import {
  TableContainer,
  Box,
  Grid,
  Typography,
  Paper,
  Button,
} from "@mui/material";

import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import ClientFilters from "../client-filters/client-filters";
import ClientTable from "../client-table/client-table";
import { Action, Client, ClientBoardProps } from "../../interfaces";
import AddIcon from "@mui/icons-material/Add";
import ClientFormDialog from "../client-form-dialog/client-form-dialog";

const ClientBoard = ({ clientsList }: ClientBoardProps) => {
  const [isShowFilters, setIsShowFilters] = useState(false);
  const [clients, setClients] = useState<Client[]>(clientsList);
  const [isOpenClientDialog, setIsOpenClientDialog] = useState(false);
  const [clientUpdate, setClientUpdate] = useState<Client>();

  const handleSubmitClientForm = (clientForm: Client, action: Action) => {
    if (action === "Create") {
      setClients([...clients, clientForm]);
    } else {
      setClients([
        ...clients.map((client) =>
          client.id === clientForm.id ? clientForm : client
        ),
      ]);
    }
  };
  const clearClientForm = () => {
    setClientUpdate({
      id: "",
      name: "",
      primaryContact: "",
      accountManager: "",
      mostRecentProject: "",
      projectStatus: "",
      numberOfProjects: 0,
      allTimeBilled: 0,
    });
  };

  const onFilterClient = ({ clientName, accountManager }: IClientFilters) => {
    if (
      // get all client
      clientName === "All clients" &&
      accountManager === "All Account Managers"
    )
      setClients([...clientsList]);
    else
      setClients([
        ...clientsList.filter((client) => {
          //Case 1: Get clients by clientName
          if (
            clientName &&
            (accountManager === "" || accountManager === "All Account Managers")
          ) {
            return client.name === clientName;
            //Case 2: Get clients by accountManager
          } else if (
            accountManager &&
            (clientName === "" || clientName === "All clients")
          ) {
            return client.accountManager === accountManager;
          }
          //Case 2: Get clients by clients, accountManager
          return (
            client.name === clientName &&
            client.accountManager === accountManager
          );
        }),
      ]);
  };
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: 1156, margin: "0 auto", overflow: "visible" }}
    >
      <Paper
        sx={{
          padding: 1,
          paddingRight: "10px",
          borderRadius: "8px 8px 0 0",
          background: "#eecdb1e8",
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0 40px" }}>
              <AccountTreeIcon sx={{ color: "#6e6767" }} />
              <Typography variant="subtitle1" style={{ fontWeight: 500 }}>
                Clients
              </Typography>
            </Box>
          </Grid>
          {/* Client filters */}
          <Grid item xs={4} display="flex" justifyContent="end">
            {isShowFilters ? (
              <ExpandLessIcon
                onClick={() => setIsShowFilters(false)}
                sx={{ cursor: "pointer", color: "#6e6767" }}
              />
            ) : (
              <ExpandMoreIcon
                onClick={() => setIsShowFilters(true)}
                sx={{ cursor: "pointer", color: "#6e6767" }}
              />
            )}
          </Grid>
          {isShowFilters && (
            <Grid item xs={4}>
              <ClientFilters onFilters={(filters) => onFilterClient(filters)} />
            </Grid>
          )}
        </Grid>
      </Paper>
      {/* Client Table */}
      <ClientTable
        clients={clients}
        onUpdate={(client) => {
          if (client) setClientUpdate(client);
          setIsOpenClientDialog(true);
        }}
      />
      <Box padding="10px 0" textAlign="center">
        <Button
          onClick={() => setIsOpenClientDialog(true)}
          variant="contained"
          color="warning"
          style={{ borderRadius: "50%", minWidth: 50, height: 50 }}
        >
          <AddIcon sx={{ fontSize: 20, color: "black" }} />
        </Button>
      </Box>
      {/* Client Form Dialog */}
      <ClientFormDialog
        isOpen={isOpenClientDialog}
        action="Create"
        client={clientUpdate}
        onSubmitForm={(clientForm, action) =>
          handleSubmitClientForm(clientForm, action)
        }
        onClose={() => {
          clearClientForm();
          setIsOpenClientDialog(false);
        }}
      />
    </TableContainer>
  );
};

export default ClientBoard;
