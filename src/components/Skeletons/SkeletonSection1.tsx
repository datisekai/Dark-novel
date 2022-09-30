import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonSection1 = () => {
  return (
    <Skeleton
      sx={{ transform: "scale(1,1)" }}
      width='100%'
      height={250}
      animation='wave'
    />
  );
};

export default SkeletonSection1;
