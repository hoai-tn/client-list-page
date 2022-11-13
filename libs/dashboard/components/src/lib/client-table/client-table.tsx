import { MouseEvent, useState } from "react";

import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

import EditIcon from "@mui/icons-material/Edit";

import { Client, Order } from "../../interfaces";
import ClientTableHead, { StyledTableCell } from "./client-table-head";
import { getComparator, stableSort } from "../../services/client-table";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const ClientTable = ({
  clients,
  onUpdate,
}: {
  clients: Client[];
  onUpdate: (client: Client) => void;
}) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Client>("name");

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Client
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Table aria-label="simple table">
      <ClientTableHead
        order={order}
        orderBy={orderBy}
        onRequestSort={handleRequestSort}
      />
      <TableBody>
        {stableSort(clients, getComparator(order, orderBy))?.map(
          (client: Client) => (
            <StyledTableRow
              key={client.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {client.name}
              </StyledTableCell>
              <StyledTableCell>{client.primaryContact}</StyledTableCell>
              <StyledTableCell>{client.mostRecentProject}</StyledTableCell>
              <StyledTableCell>{client.projectStatus}</StyledTableCell>
              <StyledTableCell>{client.accountManager}</StyledTableCell>
              <StyledTableCell>{client.numberOfProjects}</StyledTableCell>
              <StyledTableCell>{client.allTimeBilled}</StyledTableCell>
              <StyledTableCell>
                <EditIcon
                  onClick={() => onUpdate(client)}
                  sx={{ cursor: "pointer", color: "#6e6767" }}
                />
              </StyledTableCell>
            </StyledTableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default ClientTable;
