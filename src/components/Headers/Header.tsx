import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import WidthLayout from "../Layouts/WidthLayout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FlexBox from "../FlexBox";
import { useRouter } from "next/router";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import useWidth from "../../hooks/useWidth";
import PageviewIcon from "@mui/icons-material/Pageview";
import WidgetsIcon from "@mui/icons-material/Widgets";
import useScrollY from "../../hooks/useScrollY";
import useScrollProgress from "../../hooks/useScrollProgress";
import CategoryData, { ICategoryData } from "../data/category";
import LineProgress from "./LineProgress";

const Header = () => {
  const {
    palette: { secondary },
  } = useTheme();

  const router = useRouter();
  const width = useWidth();

  return (
    <Box
      sx={{
        bgcolor: secondary.main,
        height: 60,
        py: 0.5,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 5000,
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
      }}
    >
      <WidthLayout>
        <FlexBox alignItems={"center"} justifyContent='space-between'>
          <IconButton
            sx={{
              display: {
                md: "none",
                xs: "inline-flex",
              },
            }}
          >
            <WidgetsIcon fontSize='medium' />
          </IconButton>
          <FlexBox alignItems={"center"}>
            <LazyLoadImage
              alt={"Logo"}
              effect='blur'
              style={{ width: 45, height: 45 }}
              src={
                "https://kaguya.live/_next/image?url=%2Flogo.png&w=1920&q=75"
              }
            />
            <Stack
              direction={"row"}
              sx={{ display: { md: "flex", xs: "none" } }}
              spacing={2}
              ml={3}
            >
              {CategoryData?.map((item: ICategoryData) => (
                <Link href={item.href} key={item.href}>
                  <Typography
                    color={
                      router.asPath === item.href ? "primary" : "text.primary"
                    }
                    fontSize={16}
                    fontWeight={600}
                    sx={{
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </FlexBox>
          <Stack
            direction={"row"}
            spacing={{ md: 2, xs: 0 }}
            alignItems={"center"}
          >
            <IconButton>
              <SearchIcon fontSize={width > 768 ? "large" : "medium"} />
            </IconButton>
            <Button
              sx={{
                display: {
                  md: "inline-flex",
                  xs: "none",
                },
              }}
              variant='contained'
              color='primary'
            >
              Đăng nhập
            </Button>
            <IconButton sx={{ display: { md: "block", xs: "none" } }}>
              <SettingsSuggestIcon
                fontSize={width > 768 ? "large" : "medium"}
              />
            </IconButton>
          </Stack>
        </FlexBox>
      </WidthLayout>
      <LineProgress />
    </Box>
  );
};

export default Header;
