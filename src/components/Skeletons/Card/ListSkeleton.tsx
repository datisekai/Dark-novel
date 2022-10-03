import { Box, Skeleton } from "@mui/material";
import React from "react";

const ListSkeleton = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Skeleton
        sx={{
          aspectRatio: 9 / 4,
          width: "100%",
          height: "180px",
          transform: "scale(1,1)",
        }}
        animation='wave'
      />
      <Skeleton animation='wave' width={"70%"} height={15} sx={{ mt: 1 }} />
      <Skeleton animation='wave' width={"100%"} sx={{ mt: 1 }} height={15} />
    </Box>
  );
};

export default ListSkeleton;
