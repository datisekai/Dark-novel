import { Grid } from "@mui/material";
import React from "react";
import newArray from "../../utils/newArray";
import DoneSkeleton from "./Card/DoneSkeleton";

const SkeletonSection3 = () => {
  return (
    <Grid container spacing={2} mt={0}>
      {newArray(12).map((item: number) => (
        <Grid item xs={6} key={item} md={3} lg={2}>
          <DoneSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonSection3;
