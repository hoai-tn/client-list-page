/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import SelectInput from "../simple/select-input/select-input";
import clientOption from "../../../.storybook/storybook_public/config/clientOption.json";
import accountManagerOption from "../../../.storybook/storybook_public/config/accountManagerOption.json";
import { IClientFilters } from "../../interfaces";

const ClientFilters = ({
  onFilters,
}: {
  onFilters: (filters: IClientFilters) => void;
}) => {
  const [filters, setFilters] = useState<IClientFilters>({
    clientName: "All clients",
    accountManager: "All Account Managers",
  });

  useEffect(() => {
    onFilters(filters);
  }, [filters]);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <SelectInput
        sx={{ width: 250, color: "black" }}
        label="Clients"
        options={clientOption}
        dataTestId=""
        color="#8b7a6b"
        isShowIcon={true}
        value={filters.clientName}
        onChange={(e, value) =>
          setFilters({
            ...filters,
            clientName: String(value === null ? "" : value),
          })
        }
      />
      <SelectInput
        sx={{ width: 250 }}
        label="Account Manager"
        isShowIcon={true}
        options={accountManagerOption}
        dataTestId=""
        color="#8b7a6b"
        value={filters.accountManager}
        onChange={(e, value) =>
          setFilters({
            ...filters,
            accountManager: String(value === null ? "" : value),
          })
        }
      />
    </Box>
  );
};
//
export default ClientFilters;
