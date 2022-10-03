import { Box, Grid, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { ListNovel } from "../../models/listNovel";
import ListCard from "../Cards/ListCard";
import SkeletonSection5 from "../Skeletons/SkeletonSection5";
import { FadingBalls } from "react-cssfx-loading";
import FlexBox from "../FlexBox";

interface ISection5 {
  title: string;
  data: ListNovel[] | [];
  isLoading: boolean;
  fetchNextPage: any;
}

const Section5: FC<ISection5> = ({ title, data, isLoading, fetchNextPage }) => {
  const {
    palette: { primary },
  } = useTheme();
  return (
    <LazyLoadComponent>
      <Box mt={4}>
        {title && (
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
        )}
        <Box>
          {isLoading ? (
            <SkeletonSection5 />
          ) : (
            <InfiniteScroll
              dataLength={data.length}
              next={() => fetchNextPage()}
              hasMore={true}
              loader={
                <FlexBox justifyContent={"center"} mt={2}>
                  <FadingBalls color={primary.main} />
                </FlexBox>
              }
              endMessage={
                <Typography color='primary' align='center'>
                  End Chap
                </Typography>
              }
            >
              <Grid container spacing={2} mt={0}>
                {data?.map((item: ListNovel) => (
                  <Grid item xs={12} key={item.slug} md={4} lg={3}>
                    <ListCard {...item} />
                  </Grid>
                ))}
              </Grid>
            </InfiniteScroll>
          )}
        </Box>
      </Box>
    </LazyLoadComponent>
  );
};

export default Section5;
