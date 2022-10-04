import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ListNovel } from "../../models/listNovel";
import styleLineClamp from "../../utils/styleClamp";
import FlexBox from "../FlexBox";
import PersonIcon from "@mui/icons-material/Person";

const ListCard: FC<ListNovel> = ({
  author,
  currentChapter,
  image,
  name,
  slug,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        ".lazy-load-image-background": {
          width: "100%",
        },
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        py: 1,
      }}
    >
      <Link href={slug} prefetch={false}>
        <LazyLoadImage
          src={image}
          style={{
            aspectRatio: 9 / 4,
            width: "100%",
            display: "block",
          }}
          effect='blur'
        />
      </Link>
      <Link href={slug}>
        <Typography
          sx={{
            ...styleLineClamp(1),
            ":hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
            px: 1,
          }}
          color='text.primary'
          fontWeight={500}
          fontSize={{ md: 16, xs: 15 }}
        >
          {name}
        </Typography>
      </Link>
      <FlexBox alignItems={"center"} justifyContent='space-between' px={1}>
        <Link href={`${currentChapter.slug}`} style={{ flex: 1 }}>
          <Typography
            sx={{
              ...styleLineClamp(1),
              ":hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
              flex: 1,
            }}
            color='primary'
          >
            {currentChapter.name}
          </Typography>
        </Link>
        <Typography
          sx={{ ...styleLineClamp(1), flex: 1 }}
          color='text.primary'
          fontSize={13}
          align='right'
        >
          {author}
        </Typography>
      </FlexBox>
    </Box>
  );
};

export default ListCard;
