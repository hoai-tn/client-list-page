import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { inputLabelClasses } from "@mui/material";

/* eslint-disable-next-line */
export interface StandardTextInputProps {
  label: string;
  required?: boolean;
  sx?: object;
  dataTestId: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  color?: string;
  colorLabel?: string;
  variant?: string;
  size?: "medium" | "small" | undefined;
  startAdornment?: React.ReactNode;
}

export const TextInput: React.FC<StandardTextInputProps> = (props) => {
  // Separating props for a mix of usages, with defaults for sx.
  const {
    startAdornment,
    helperText,
    dataTestId,
    sx,
    color,
    colorLabel,
    ...rest
  } = props;
  const localSx = { ...{ width: "100%", height: "54px" }, ...sx };

  return (
    <TextField
      helperText={helperText}
      InputProps={{
        startAdornment,
      }}
      data-testid={dataTestId}
      {...rest}
      variant="standard"
      sx={(theme) => ({
        label: {
          color: theme.palette.text.primary,
        },
        input: {
          color,
        },
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
        ...localSx,
      })}
      InputLabelProps={{
        sx: {
          [`&.${inputLabelClasses.shrink}`]: {
            color: colorLabel,
          },
        },
      }}
      margin="normal"
    />
  );
};

export default TextInput;
