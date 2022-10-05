import { Box, Grid, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { ListNovel } from "../../models/listNovel";
import ListCard from "../Cards/ListCard";
import SkeletonSection5 from "../Skeletons/SkeletonSection5";

interface ISection6 {
  data: ListNovel[] | [];
  isLoading: boolean;
}

const Section6: FC<ISection6> = ({ data, isLoading }) => {
  const {
    palette: { primary },
  } = useTheme();
  return (
    <LazyLoadComponent>
      <Box mt={4}>
        <Box>
          {isLoading ? (
            <SkeletonSection5 />
          ) : (
            <Grid container spacing={2} mt={0}>
              {data?.map((item: ListNovel) => (
                <Grid item xs={12} key={item.slug} md={4} lg={3}>
                  <ListCard {...item} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </LazyLoadComponent>
  );
};

export default Section6;
