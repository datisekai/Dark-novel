import { Box } from "@mui/material";
import React from "react";
import useScrollProgress from "../../hooks/useScrollProgress";

const LineProgress = () => {
  const scrollProgress = useScrollProgress();
  return (
    <Box sx={{ width: "100%", height: "2px", marginTop: "-2px" }}>
      <Box
        style={{
          width: `${scrollProgress}%`,
          height: "2px",
          backgroundImage: "linear-gradient(to right, #0099f7, #f11712)",
        }}
      ></Box>
    </Box>
  );
};

export default LineProgress;
