import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { DoneNovel } from "../../models/doneNovel";
import newArray from "../../utils/newArray";
import DoneCard from "../Cards/DoneCard";
import WidthLayout from "../Layouts/WidthLayout";
import SkeletonSection3 from "../Skeletons/SkeletonSection3";
interface ISection3 {
  title: string;
  data: DoneNovel[];
  isLoading: boolean;
}

const Section3: FC<ISection3> = ({ title, data, isLoading }) => {
  return (
    <LazyLoadComponent>
      <WidthLayout>
        <Box mt={4}>
          {title && (
            <>
              <Typography
                sx={{ borderBottom: "1px solid #ccc" }}
                fontWeight={500}
                fontSize={{ md: 18, xs: 16 }}
                textTransform='uppercase'
                mr={0.5}
                color='text.primary'
              >
                {title}
              </Typography>
              <Divider />
            </>
          )}
          <Box>
            {isLoading ? (
              <SkeletonSection3 />
            ) : (
              <Grid container spacing={2} mt={0}>
                {data?.map((item: DoneNovel) => (
                  <Grid item xs={6} key={item.slug} md={3} lg={2}>
                    <DoneCard {...item} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </WidthLayout>
    </LazyLoadComponent>
  );
};

export default Section3;
