import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const ReadChapSkeleton = () => {
  return (
    <Stack spacing={1} mt={2}>
      <Skeleton width={"80%"} height={25} animation='wave' />
      <Skeleton width={"50%"} height={20} animation='wave' />
      <Skeleton width={"100%"} height={25} animation='wave' />
      <Skeleton width={"20%"} height={20} animation='wave' />
      <Skeleton width={"30%"} height={20} animation='wave' />
      <Skeleton width={"40%"} height={20} animation='wave' />
      <Skeleton width={"80%"} height={20} animation='wave' />
      <Skeleton width={"40%"} height={20} animation='wave' />
      <Skeleton width={"40%"} height={20} animation='wave' />
      <Skeleton width={"70%"} height={20} animation='wave' />
      <Skeleton width={"50%"} height={20} animation='wave' />
      <Skeleton width={"100%"} height={20} animation='wave' />
      <Skeleton width={"100%"} height={20} animation='wave' />
      <Skeleton width={"90%"} height={20} animation='wave' />
      <Skeleton width={"10%"} height={20} animation='wave' />
      <Skeleton width={"40%"} height={20} animation='wave' />
      <Skeleton width={"60%"} height={20} animation='wave' />
      <Skeleton width={"70%"} height={20} animation='wave' />
      <Skeleton width={"30%"} height={20} animation='wave' />
    </Stack>
  );
};

export default ReadChapSkeleton;
