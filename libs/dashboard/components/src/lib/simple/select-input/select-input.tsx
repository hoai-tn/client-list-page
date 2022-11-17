import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";
import { AutocompleteChangeDetails, Box, InputAdornment } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
/* eslint-disable-next-line */
export interface StandardAutocompleteProps {
  label: string;
  options: ({ label: string } | string)[];
  required?: boolean;
  sx?: object;
  dataTestId: string;
  error?: boolean;
  value?: string | "";
  name?: string;
  helperText?: string;
  loading?: boolean;
  color?: string;
  isShowIcon?: boolean;
  onChange?: <T>(
    event: React.SyntheticEvent,
    value: T | Array<T>,
    reason: string,
    details?: AutocompleteChangeDetails<{ label: string } | string>
  ) => void;
}

export function SelectInput(props: StandardAutocompleteProps) {
  // Splitting props into ones for Autocomplete and TextField.
  const {
    error,
    dataTestId,
    helperText,
    loading,
    color,
    isShowIcon,
    ...outer
  } = props;
  // Splitting TextField props into sx, with defaults, and all others.
  let { sx: textFieldSx } = outer;
  const { ...inner } = outer;
  textFieldSx = { ...{ width: "100%", height: "54px" }, ...textFieldSx };

  return (
    <Autocomplete
      {...outer}
      loading={loading ? loading : undefined}
      noOptionsText={
        <Typography
          sx={(theme) => ({
            color: theme.palette.text.primary,
          })}
        >
          No Options
        </Typography>
      }
      renderInput={(params) => (
        <TextField
          {...params}
          {...inner}
          error={error}
          helperText={helperText}
          variant="standard"
          onChange={undefined}
          InputProps={{
            ...params.InputProps,
            startAdornment: isShowIcon && (
              <InputAdornment position="start">
                <AccountTreeOutlinedIcon sx={{ color: "#6e6767" }} />
              </InputAdornment>
            ),
          }}
          sx={(theme) => ({
            label: {
              color: theme.palette.text.primary,
            },
            ...textFieldSx,
            "& label.Mui-focused": {
              color,
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: color,
              },
            },
            "& .MuiInput-underline:after": {
              borderColor: color,
            },
          })}
          data-testid={`${dataTestId}-inner-text-field`}
          margin="normal"
        />
      )}
      renderOption={(props, option: string | { label: string; }) => (
        <Box
          component="li"
          sx={{ "& > svg": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0 10px" }}>
            {isShowIcon && <AccountTreeIcon sx={{ color: "#6e6767" }} />}
            <span>{String(option)}</span>
          </Box>
        </Box>
      )}
      data-testid={dataTestId}
      isOptionEqualToValue={(option, value) =>
        value === undefined ||
        value === "" ||
        option === value ||
        value === "null"
      }
    />
  );
}

export default SelectInput;
