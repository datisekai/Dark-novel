import { Box, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { DoneNovel } from "../../models/doneNovel";
import newArray from "../../utils/newArray";
import DoneCard from "../Cards/DoneCard";
import FlexBox from "../FlexBox";
import WidthLayout from "../Layouts/WidthLayout";
import SkeletonSection3 from "../Skeletons/SkeletonSection3";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
interface ISection3 {
  title: string;
  data: DoneNovel[];
  isLoading: boolean;
  url: string;
}

const Section3: FC<ISection3> = ({ title, data, isLoading, url }) => {
  return (
    <LazyLoadComponent>
      <WidthLayout>
        <Box mt={4}>
          {title && (
            <>
              <Link href={`/danh-sach/${url}`}>
                <FlexBox
                  alignItems={"center"}
                  sx={{
                    borderBottom: "1px solid #ccc",
                    ":hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Typography
                    fontWeight={500}
                    fontSize={{ md: 18, xs: 16 }}
                    textTransform='uppercase'
                    mr={0.5}
                    color='text.primary'
                    sx={{
                      ":hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {title}
                  </Typography>
                  <ArrowForwardIosIcon color='info' fontSize='small' />
                </FlexBox>
              </Link>
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
