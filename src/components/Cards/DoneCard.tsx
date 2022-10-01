import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { toNamespacedPath } from "path/posix";
import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DoneNovel } from "../../models/doneNovel";
import styleLineClamp from "../../utils/styleClamp";

const DoneCard: FC<DoneNovel> = ({ chapter, image, name, slug }) => {
  const {
    palette: { primary },
  } = useTheme();

  const randomColor = () => {
    const randomNumber = () => Math.floor(Math.random() * 255);

    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    //  Math.floor(Math.random() * 16777215).toString(16);
  };
  return (
    <Link href={`/${slug}`}>
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
        <Typography
          color='secondary'
          variant='subtitle2'
          textAlign={"center"}
          sx={{
            backgroundImage: `linear-gradient(to right, ${randomColor()} , ${randomColor()});`,
          }}
          mt={0.5}
          fontSize={{ md: 14, xs: 12 }}
        >
          {chapter}
        </Typography>
      </Box>
    </Link>
  );
};

export default DoneCard;
