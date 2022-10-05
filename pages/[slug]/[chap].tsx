import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import DetailAPI from "../../src/actions/detail";
import Breadcumbs from "../../src/components/Breadcumbs";
import MainLayout from "../../src/components/Layouts/MainLayout";
import WidthLayout from "../../src/components/Layouts/WidthLayout";
import { Chapter } from "../../src/models/Chapter";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ReadChapSkeleton from "../../src/components/Skeletons/ReadChapSkeleton";
import FlexBox from "../../src/components/FlexBox";
import { useAppDispatch } from "../../src/hooks/reduxHooks";
import { addChapter } from "../../src/redux/slices/history";

const ChapNovel = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [chapter, setChapter] = useState("");

  const { data, isLoading } = useQuery(["chap", router], () => {
    if (router.asPath) {
      return DetailAPI.read(router.asPath);
    }
  });

  const { data: dataChapter, isLoading: loadingChapter } = useQuery(
    ["chap-chapter", router],
    () => {
      if (router.asPath) {
        return DetailAPI.chapter(router.asPath);
      }
    }
  );

  useEffect(() => {
    if (router.asPath) {
      dispatch(addChapter(router.asPath + "/"));
    }
  }, [router]);

  console.log(router.asPath);

  const {
    palette: { text, grey, primary },
  } = useTheme();

  useEffect(() => {
    setChapter(router.asPath + "/");
  }, [router]);

  const handleChangeChapter = (e: any) => {
    setChapter(e.target.value);
    router.push(e.target.value);
  };

  const toolChap = useMemo(() => {
    const currentChap = router.asPath + "/";
    let preChap = 0,
      nextChap = 0;
    dataChapter?.forEach((item: Chapter, index: number) => {
      if (item.href === currentChap) {
        preChap = index + 1;
        nextChap = index - 1;
      }
    });

    return dataChapter
      ? {
          preChap: dataChapter[preChap]?.href || undefined,
          nextChap: dataChapter[nextChap]?.href || undefined,
        }
      : {
          preChap: undefined,
          nextChap: undefined,
        };
  }, [dataChapter]);

  return (
    <MainLayout>
      <WidthLayout>
        <Box
          pt={2}
          sx={{
            "#ads-chapter-pc-top": {
              height: "16px !important",
            },
            "#chapterSelect": {
              maxWidth: {
                md: 200,
                xs: "30%",
              },
            },
            img: {
              width: "100%",
            },
          }}
        >
          <Breadcumbs current={data?.name || "Hiện tại"} />
          {isLoading ? (
            <FlexBox justifyContent={"center"}>
              <Skeleton width='50%' height={30} />
            </FlexBox>
          ) : (
            <Typography
              color='text.primary'
              fontWeight={600}
              fontSize={{ md: 19, xs: 17 }}
              mt={2}
              align='center'
            >
              {data?.name}
            </Typography>
          )}
          {isLoading ? (
            <FlexBox justifyContent={"center"}>
              <Skeleton width={"20%"} height={20} />
            </FlexBox>
          ) : (
            <Typography color='primary' align='center' mt={1}>
              {data?.currentChap}
            </Typography>
          )}
          <Stack
            direction={"row"}
            spacing={1}
            justifyContent={"center"}
            sx={{ mt: 2 }}
          >
            {!toolChap?.preChap ? (
              <Button
                disabled
                variant='outlined'
                color='primary'
                startIcon={<ChevronLeftIcon color='primary' />}
              >
                Trước
              </Button>
            ) : (
              <Button
                variant='outlined'
                color='primary'
                onClick={() => router.push(toolChap?.preChap as string)}
                startIcon={<ChevronLeftIcon color='primary' />}
              >
                Trước
              </Button>
            )}
            <select
              id='chapterSelect'
              style={{
                outline: "none",
                backgroundColor: grey[900],
                color: text.primary,
                borderRadius: "4px",
                border: "1px solid rgba(220, 38, 38, 0.5)",
                padding: "5px 15px",
                overflowX: "hidden",
                width: "100%",
              }}
              value={chapter}
              defaultValue={router.asPath + "/"}
              onChange={handleChangeChapter}
            >
              {dataChapter?.map((item: Chapter) => (
                <option key={item.href} value={item.href}>
                  {item.name}
                </option>
              ))}
            </select>
            {!toolChap?.nextChap ? (
              <Button
                disabled
                variant='outlined'
                endIcon={<ChevronRightIcon color='primary' />}
                color='primary'
              >
                Sau
              </Button>
            ) : (
              <Button
                variant='outlined'
                onClick={() => router.push(toolChap?.nextChap as string)}
                endIcon={<ChevronRightIcon color='primary' />}
                color='primary'
              >
                Sau
              </Button>
            )}
          </Stack>
          {isLoading ? (
            <ReadChapSkeleton />
          ) : (
            <div
              style={{
                color: text.primary,
                fontFamily: "Montserrat",
                fontSize: 16,
                lineHeight: 1.5,
                textAlign: "justify",
              }}
              dangerouslySetInnerHTML={{ __html: data?.html as string }}
            />
          )}
        </Box>
      </WidthLayout>
    </MainLayout>
  );
};

export default ChapNovel;
