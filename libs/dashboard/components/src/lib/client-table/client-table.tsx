import { MouseEvent, useState } from "react";

import {
  Table,
  TableBody,
  TableContainer,
  TableCell,
  Box,
  Grid,
  Typography,
  Paper,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import EditIcon from "@mui/icons-material/Edit";

import ClientFilters from "../client-filters/client-filters";
import { Client, Order } from "../../interfaces";
import ClientTableHead from "./client-table-head";
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
const ClientTable = ({ clientsData }: any) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Client>("name");
  const [isShowFilters, setIsShowFilters] = useState(false);
  // const [isShowUpdateBtn, setIsShowUpdateBtn] = useState(false);

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Client
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <TableContainer component={Paper}>
      <Paper
        sx={{
          padding: 1,
          paddingRight: 4,
          borderRadius: "8px 8px 0 0",
          background: "#eecdb1e8",
        }}
      >
        <Grid container>
          <Grid item xs={8}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0 40px" }}>
              <AccountTreeIcon sx={{ color: "#6e6767" }} />
              <Typography variant="subtitle1">Clients </Typography>
            </Box>
          </Grid>
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
              <ClientFilters />
            </Grid>
          )}
        </Grid>
      </Paper>
      <Table aria-label="simple table">
        <ClientTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {stableSort(clientsData, getComparator(order, orderBy)).map(
            (client) => (
              <StyledTableRow
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
                <TableCell>
                  <EditIcon sx={{ cursor: "pointer", color: "#6e6767" }} />
                </TableCell>
              </StyledTableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientTable;
