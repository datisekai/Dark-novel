import { Box, Grid } from "@mui/material";
import React from "react";
import newArray from "../../utils/newArray";
import UpComingSkeleton from "./Card/UpComingSkeleton";

const SkeletonSection2 = () => {
  return (
    <Grid container spacing={2} mt={0}>
      {newArray(12).map((item: number) => (
        <Grid item xs={12} md={4} key={item} lg={3}>
          <UpComingSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonSection2;
