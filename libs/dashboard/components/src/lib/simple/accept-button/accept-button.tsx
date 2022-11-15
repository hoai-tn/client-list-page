import * as React from "react";
import Button from "@mui/material/Button";
import { OverridableStringUnion } from "@mui/types";

interface ButtonProps {
  text?: string;
  type?: "submit" | "reset" | "button";
  color_?: OverridableStringUnion<
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
  >;
  isFullWidth?: boolean;
  onClick?: () => void;
  sx?: object;
}

function AcceptButton({
  type = "submit",
  text = "Default",
  color_ = "primary",
  isFullWidth,
  onClick,
  sx,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      data-testid="accept-btn"
      fullWidth={isFullWidth}
      color={color_}
      variant={"contained"}
      style={sx}
    >
      {text}
    </Button>
  );
}

export default AcceptButton;
