import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HotNovel from "../../models/hotNovel";

const HotCard: FC<HotNovel> = ({ image, name, slug }) => {
  const {
    palette: { secondary },
  } = useTheme();
  return (
    <Link href={`/${slug}`}>
      <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}>
        <LazyLoadImage
          effect='blur'
          src={image}
          style={{
            aspectRatio: "150/225",
            width: "100%",
            display: "block",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            bottom: 4,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.616)",
            px: 1,
            py: 1,
            ":hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}
          color='info.200'
          fontWeight={500}
          fontSize={{ md: 16, xs: 14 }}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
};
export default HotCard;
