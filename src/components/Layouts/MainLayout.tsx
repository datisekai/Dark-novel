import { Box, useTheme } from "@mui/material";
import React, { FC, useState } from "react";
import { ChildrenProps } from "../../models";
import Footer from "../Footer";
import Header from "../Headers/Header";
import Search from "../Search";

const MainLayout: FC<ChildrenProps> = ({ children }) => {
  const {
    palette: { grey },
  } = useTheme();

  const [isSearch, setIsSearch] = useState(false);
  return (
    <Box>
      <Header handleIconSearch={() => setIsSearch(!isSearch)} />
      <Search isSearch={isSearch} handleClose={() => setIsSearch(false)} />
      <Box sx={{ minHeight: "100vh", pb: 5, bgcolor: grey[900], mt: "60px" }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
