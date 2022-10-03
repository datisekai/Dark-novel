import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, IconButton } from "@mui/material";
import useScrollY from "../hooks/useScrollY";

const OnTop = () => {
  const scrollY = useScrollY();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 40,
        right: 40,
        display: scrollY > 500 ? "block" : "none",
      }}
    >
      <IconButton
        onClick={() => window?.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpwardIcon color='primary' />
      </IconButton>
    </Box>
  );
};

export default OnTop;
