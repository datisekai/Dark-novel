import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { UpComingNovel } from "../../models/upComingNovel";
import newArray from "../../utils/newArray";
import UpComingCard from "../Cards/UpComingCard";
import FlexBox from "../FlexBox";
import WidthLayout from "../Layouts/WidthLayout";
import SkeletonSection2 from "../Skeletons/SkeletonSection2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

interface ISection2 {
  title: string;
  data: UpComingNovel[];
  isLoading: boolean;
  url: string;
}

const Section2: FC<ISection2> = ({ title, data, isLoading, url }) => {
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
              <SkeletonSection2 />
            ) : (
              <Grid container spacing={2} mt={0}>
                {data?.map((item: UpComingNovel) => (
                  <Grid item xs={12} md={4} key={item.slug} lg={3}>
                    <UpComingCard {...item} />
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

export default Section2;
