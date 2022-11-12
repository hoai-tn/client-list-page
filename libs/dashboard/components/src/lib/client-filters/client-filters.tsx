import { Box } from "@mui/material";
import { useState } from "react";
import SelectInput from "../simple/select-input/select-input";
import clientOption from "../../../.storybook/storybook_public/config/clientOption.json";
import accountManagerOption from "../../../.storybook/storybook_public/config/accountManagerOption.json";
const ClientFilters = () => {
  const [client, setClient] = useState("");
  console.log(client);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <SelectInput
        sx={{ width: 250, color: "black" }}
        label="Clients"
        options={clientOption}
        dataTestId=""
        color="#8b7a6b"
        value={client}
        onChange={(e, value) => setClient(String(value))}
      />
      <SelectInput
        sx={{ width: 250 }}
        label="Account Manager"
        options={accountManagerOption}
        dataTestId=""
        color="#8b7a6b"
      />
    </Box>
  );
};
//
export default ClientFilters;
