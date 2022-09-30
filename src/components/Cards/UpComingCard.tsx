import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { UpComingNovel } from "../../models/upComingNovel";
import styleLineClamp from "../../utils/styleClamp";
import FlexBox from "../FlexBox";
import { Category } from "../../models/upComingNovel";
import { Stack } from "@mui/material";
import Link from "next/link";

const UpComingCard: React.FC<UpComingNovel> = ({
  category,
  currentChapter,
  name,
  slug,
  time,
}) => {
  return (
    <Box>
      <Card
        variant='outlined'
        sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
      >
        <React.Fragment>
          <CardContent sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}>
            <Typography sx={{ fontSize: 14 }} color='info.100' gutterBottom>
              {time}
            </Typography>
            <Link href={`/${slug}`}>
              <Typography
                variant='h5'
                color='text.primary'
                sx={{
                  ...styleLineClamp(1),
                  ":hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
                component='div'
                fontSize={{ md: 17, xs: 15 }}
                fontWeight={500}
              >
                {name}
              </Typography>
            </Link>
            <Stack mt={1} spacing={1} direction='row' alignItems={"center"}>
              {category?.map((item: Category) => (
                <Link href={`/the-loai/${item.slug}`} key={item.slug}>
                  <Typography
                    sx={{
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Stack>
            <Link href={`/${currentChapter.slug}`}>
              <Typography
                sx={{
                  ":hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
                variant='body2'
                color='primary'
                mt={1}
              >
                {currentChapter?.name}
              </Typography>
            </Link>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default UpComingCard;
