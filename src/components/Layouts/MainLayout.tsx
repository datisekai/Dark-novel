import { Box, useTheme } from "@mui/material";
import React, { FC } from "react";
import { ChildrenProps } from "../../models";
import Footer from "../Footer";
import Header from "../Headers/Header";

const MainLayout: FC<ChildrenProps> = ({ children }) => {
  const {
    palette: { grey },
  } = useTheme();
  return (
    <Box>
      <Header />
      <Box sx={{ minHeight: "100vh", pb: 5, bgcolor: grey[900], mt: "60px" }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
