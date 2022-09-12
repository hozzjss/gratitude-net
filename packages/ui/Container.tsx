import { Container } from "@mui/system";
import React from "react";
import ResponsiveAppBar from "./NavBar";

export const AppContainer: React.FC = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <ResponsiveAppBar />
      {children}
    </Container>
  );
};
