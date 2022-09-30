import { Box, Skeleton } from "@mui/material";
import React from "react";

const DoneSkeleton = () => {
  return (
    <Box>
      <Skeleton
        style={{ aspectRatio: 164 / 245, width: "100%" }}
        animation='wave'
      />
      <Skeleton width='80%' sx={{ mt: 1 }} height={20} animation='wave' />
      <Skeleton width='100%' sx={{ mt: 1 }} height={20} animation='wave' />
    </Box>
  );
};

export default DoneSkeleton;
