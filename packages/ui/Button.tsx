import * as React from "react";
import InternalButton, { ButtonProps } from "@mui/material/Button";
export const Button: React.FC<ButtonProps> = (props) => {
  return <InternalButton {...props} />;
};
