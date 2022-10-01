import { Box, Divider, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { DoneNovel } from "../../models/doneNovel";
import { ListNovel } from "../../models/listNovel";
import ListCard from "../Cards/ListCard";
import WidthLayout from "../Layouts/WidthLayout";
import SkeletonSection3 from "../Skeletons/SkeletonSection3";
interface ISection4 {
  title: string;
  data: ListNovel[];
  isLoading: boolean;
}

const Section4: FC<ISection4> = ({ title, data, isLoading }) => {
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
                {data?.map((item: ListNovel) => (
                  <Grid item xs={12} key={item.slug} md={6} lg={4}>
                    <ListCard {...item} />
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

export default Section4;
