import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ClientTable = ({ clientsData }: any) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client Name</TableCell>
            <TableCell>Client Primary Contact</TableCell>
            <TableCell>Most Recent Project</TableCell>
            <TableCell>Project Status</TableCell>
            <TableCell>Account Manager</TableCell>
            <TableCell>Number of projects</TableCell>
            <TableCell>All-time Billed($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientsData.map((client) => (
            <TableRow
              key={client.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {client.name}
              </TableCell>
              <TableCell>{client.primaryContact}</TableCell>
              <TableCell>{client.mostRecentProject}</TableCell>
              <TableCell>{client.projectStatus}</TableCell>
              <TableCell>{client.accountManager}</TableCell>
              <TableCell>{client.numberOfProjects}</TableCell>
              <TableCell>{client.allTimeBilled}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientTable;
