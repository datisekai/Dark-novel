import { Box, Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import WidthLayout from "../Layouts/WidthLayout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FlexBox from "../FlexBox";
import HotCard from "../Cards/HotCard";
import newArray from "../../utils/newArray";
import HotNovel from "../../models/hotNovel";
import useWidth from "../../hooks/useWidth";
import SkeletonSection1 from "../Skeletons/SkeletonSection1";

interface ISection1 {
  title: string;
  data: HotNovel[];
  isLoading: boolean;
}

const Section1: FC<ISection1> = ({ title, data, isLoading }) => {
  const width = useWidth();

  let slide = 5;

  if (width > 1024) {
    slide = 5;
  } else if (width > 768) {
    slide = 4.3;
  } else if (width > 600) {
    slide = 3.3;
  } else if (width > 400) {
    slide = 2.3;
  } else {
    slide = 2;
  }
  return (
    <WidthLayout>
      <Box sx={{ mt: 4 }}>
        {title && (
          <>
            <FlexBox
              alignItems={"center"}
              sx={{ borderBottom: "1px solid #ccc" }}
            >
              <Typography
                fontWeight={500}
                fontSize={{ md: 18, xs: 16 }}
                textTransform='uppercase'
                color='text.primary'
                mr={0.5}
              >
                {title}
              </Typography>
              <LocalFireDepartmentIcon color='primary' />
            </FlexBox>
          </>
        )}
      </Box>
      <Box mt={2}>
        {isLoading ? (
          <SkeletonSection1 />
        ) : (
          <Swiper
            spaceBetween={15}
            slidesPerView={slide}
            navigation
            autoplay
            modules={[Navigation, Autoplay]}
          >
            {data?.map((item: HotNovel) => (
              <SwiperSlide key={item.slug}>
                <HotCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>
    </WidthLayout>
  );
};

export default Section1;
