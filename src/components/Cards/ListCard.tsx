import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ListNovel } from "../../models/listNovel";
import styleLineClamp from "../../utils/styleClamp";
import FlexBox from "../FlexBox";

const ListCard: FC<ListNovel> = ({
  author,
  currentChapter,
  image,
  name,
  slug,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <LazyLoadImage
          src={image}
          style={{ aspectRatio: 164 / 245, width: "100%" }}
          effect='blur'
        />
        <Typography
          sx={{
            ...styleLineClamp(1),
            ":hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}
          color='text.primary'
          fontWeight={500}
          fontSize={{ md: 16, xs: 15 }}
        >
          {name}
        </Typography>
        {/* <Typography
          color='secondary'
          variant='subtitle2'
          textAlign={"center"}
          
          mt={0.5}
          fontSize={{ md: 14, xs: 12 }}
        >
          {chapter}
        </Typography> */}
      </Box>
    </Box>
  );
};

export default ListCard;
