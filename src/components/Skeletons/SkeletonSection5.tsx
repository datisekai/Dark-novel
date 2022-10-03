import { Grid } from "@mui/material";
import React from "react";
import newArray from "../../utils/newArray";
import DoneSkeleton from "./Card/DoneSkeleton";
import ListSkeleton from "./Card/ListSkeleton";

const SkeletonSection5 = () => {
  return (
    <Grid container spacing={2} mt={0}>
      {newArray(12).map((item: number) => (
        <Grid item xs={12} key={item} md={4} lg={3}>
          <ListSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonSection5;
