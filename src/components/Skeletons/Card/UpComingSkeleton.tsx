import { Box, Card, CardContent, Skeleton } from "@mui/material";
import React from "react";

const UpComingSkeleton = () => {
  return (
    <Box>
      <Card
        variant='outlined'
        sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
      >
        <React.Fragment>
          <CardContent sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}>
            <Skeleton width='30%' height={15} animation='wave' />
            <Skeleton width='80%' sx={{ mt: 1 }} height={20} animation='wave' />
            <Skeleton width='50%' sx={{ mt: 1 }} height={15} animation='wave' />
            <Skeleton width='40%' sx={{ mt: 1 }} height={15} animation='wave' />
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default UpComingSkeleton;
