import { MouseEvent, useState } from "react";

import { Box, Link, Table, TableBody, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ClientTableHead, { StyledTableCell } from "./client-table-head";
import { getComparator, stableSort } from "../../services/client-table";

import { Client, Order } from "../../interfaces";

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
  const [showUpdateIcon, setShowUpdateIcon] = useState<{
    [index: string]: boolean;
  }>({});

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Client
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Table aria-label="simple table" data-testid="client-table">
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
                <Link
                  href={`/client/${client.name}`}
                  sx={{
                    color: "black",
                    border: 0,
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {client.name}
                </Link>
              </StyledTableCell>
              <StyledTableCell>{client.primaryContact}</StyledTableCell>
              <StyledTableCell>{client.mostRecentProject}</StyledTableCell>
              <StyledTableCell>{client.projectStatus}</StyledTableCell>
              <StyledTableCell>{client.accountManager}</StyledTableCell>
              <StyledTableCell>{client.numberOfProjects}</StyledTableCell>
              <StyledTableCell>{client.allTimeBilled}</StyledTableCell>
              <StyledTableCell>
                <Box display="flex" position="relative">
                  <MoreVertIcon
                    onClick={() =>
                      setShowUpdateIcon({
                        [client.id]: !showUpdateIcon[client.id],
                      })
                    }
                    sx={{ cursor: "pointer", color: "#6e6767" }}
                  />
                  {showUpdateIcon[client.id] && (
                    <Box
                      onClick={() => {
                        setShowUpdateIcon({ [client.id]: false });
                        onUpdate(client);
                      }}
                      borderRadius="2px"
                      padding="3px"
                      alignItems="center"
                      display="flex"
                      position="absolute"
                      boxShadow={1}
                      left="22px"
                      bottom="0"
                      zIndex={10}
                      sx={{
                        backgroundColor: "#f3f2f4",
                        cursor: "pointer",
                      }}
                    >
                      <EditIcon sx={{ color: "#6e6767" }} />
                      Update
                    </Box>
                  )}
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default ClientTable;
