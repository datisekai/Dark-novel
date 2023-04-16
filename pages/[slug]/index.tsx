import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import DetailAPI from "../../src/actions/detail";
import Breadcumbs from "../../src/components/Breadcumbs";
import FlexBox from "../../src/components/FlexBox";
import MainLayout from "../../src/components/Layouts/MainLayout";
import WidthLayout from "../../src/components/Layouts/WidthLayout";
import { Category, Chapter, Novel } from "../../src/models/Novel";
import Person2Icon from "@mui/icons-material/Person2";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Link from "next/link";
import ShareNovel from "../../src/components/ShareNovel";
import ArticleIcon from "@mui/icons-material/Article";
import TextMore from "../../src/components/TextMore";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Meta from "../../src/components/Meta";
import { useAppSelector } from "../../src/hooks/reduxHooks";

interface IDetailNovel {
  data: Novel;
  slug: string;
}

const DetailNovel: FC<IDetailNovel> = ({ data, slug }) => {
  const {
    palette: { primary },
  } = useTheme();

  const { chapter } = useAppSelector((state) => state.history);

  return (
    <>
      <Meta
        title={data?.name}
        description={data?.description}
        image={data?.image}
      />
      <MainLayout>
        <WidthLayout>
          <Box pt={2}>
            <Breadcumbs current={data?.name} />
            <Typography
              mt={2}
              fontSize={{ md: 20, xs: 17 }}
              fontWeight={600}
              align='center'
              color='text.primary'
              component={"h1"}
            >
              {data?.name}
            </Typography>
            <FlexBox
              mt={2}
              alignItems='center'
              flexDirection={{ md: "row", xs: "column" }}
            >
              <LazyLoadImage
                src={data?.image}
                alt={data?.name}
                style={{ aspectRatio: 215 / 322 }}
              />
              <Stack spacing={2} ml={{ md: 5, xs: 0 }} mt={{ md: 0, xs: 2 }}>
                <FlexBox alignItems={"center"}>
                  <Person2Icon color='info' />
                  <Typography
                    ml={1}
                    fontSize={{ md: 16, xs: 14 }}
                    fontWeight={500}
                    color='text.primary'
                  >
                    Tác giả: {data?.author}
                  </Typography>
                </FlexBox>
                <FlexBox alignItems={"center"}>
                  <RssFeedIcon color='info' />
                  <Typography
                    ml={1}
                    fontSize={{ md: 16, xs: 14 }}
                    fontWeight={500}
                    color='text.primary'
                  >
                    Tình trạng: {data?.status}
                  </Typography>
                </FlexBox>
                <FlexBox alignItems={"center"}>
                  <FormatListBulletedIcon color='info' />
                  <FlexBox alignItems={"center"} flexWrap='wrap'>
                    <Typography
                      ml={1}
                      fontSize={{ md: 16, xs: 14 }}
                      fontWeight={500}
                      color='text.primary'
                    >
                      Thể loại:
                    </Typography>
                    {data?.categories?.map((item: Category) => {
                      return (
                        <Link key={item.href} href={`/the-loai/${item.href}`}>
                          <Typography
                            color={"primary"}
                            sx={{
                              ":hover": {
                                textDecoration: "underline",
                                cursor: "pointer",
                              },
                              ml: 2,
                            }}
                            fontSize={{ md: 16, xs: 14 }}
                          >
                            {item.name}
                          </Typography>
                        </Link>
                      );
                    })}
                  </FlexBox>
                </FlexBox>
                <ShareNovel title={slug} />
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <Button variant='contained' color='info'>
                    Đọc từ đầu
                  </Button>
                  <Button variant='contained' color='info'>
                    Đọc mới nhất
                  </Button>
                  <Button variant='contained' color='primary'>
                    Đọc tiếp
                  </Button>
                </Stack>
              </Stack>
            </FlexBox>
            <Box mt={4}>
              <FlexBox
                sx={{ borderBottom: "1px solid #ccc" }}
                alignItems={"center"}
              >
                <ArticleIcon fontSize='medium' color='info' />
                <Typography
                  textTransform={"uppercase"}
                  fontSize={{ md: 17, xs: 15 }}
                  fontWeight={500}
                  color='text.primary'
                  ml={1}
                >
                  Nội dung
                </Typography>
              </FlexBox>
              <TextMore description={data?.description} />
            </Box>
            <Box mt={4}>
              <FlexBox
                sx={{ borderBottom: "1px solid #ccc" }}
                alignItems={"center"}
              >
                <FactCheckIcon fontSize='medium' color='info' />
                <Typography
                  textTransform={"uppercase"}
                  fontSize={{ md: 17, xs: 15 }}
                  fontWeight={500}
                  color='text.primary'
                  ml={1}
                >
                  Danh sách chương
                </Typography>
              </FlexBox>
              <Grid
                container
                spacing={2}
                mt={0}
                sx={{
                  maxHeight: 600,
                  overflowY: "scroll",
                  "&::-webkit-scrollbar-thumb": {
                    background: primary.main,
                  },
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#ccc",
                  },
                }}
              >
                {data?.chapters?.map((item: Chapter) => (
                  <Grid item xs={6} key={item.href}>
                    <LazyLoadComponent>
                      <Link href={item.href}>
                        <Typography
                          sx={{
                            ":hover": {
                              textDecoration: "underline",
                              cursor: "pointer",
                            },
                          }}
                          color={
                            chapter?.some(
                              (element: string) => element === item.href
                            )
                              ? "info.100"
                              : "text.primary"
                          }
                        >
                          {item.name}
                        </Typography>
                      </Link>
                    </LazyLoadComponent>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </WidthLayout>
      </MainLayout>
    </>
  );
};

export default DetailNovel;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const data = await DetailAPI.novel(slug);

  return {
    props: {
      data,
      slug,
    },
  };
};
