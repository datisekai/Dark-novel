import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import SearchAPI from "../src/actions/search";
import MainLayout from "../src/components/Layouts/MainLayout";
import WidthLayout from "../src/components/Layouts/WidthLayout";
import Meta from "../src/components/Meta";
import Section5 from "../src/components/Sections/Section5";
import Section6 from "../src/components/Sections/Section6";

const Search = () => {
  const router = useRouter();

  const { data, isLoading } = useQuery(["tim-kiem", router], () => {
    if (router.query["tu-khoa"]) {
      return SearchAPI.keyword(router.query["tu-khoa"] as string);
    }
  });

  console.log(data);

  return (
    <>
      <Meta
        title='DarkNovel - Tìm kiếm'
        image='https://img5.thuthuatphanmem.vn/uploads/2021/11/12/hinh-anh-anime-don-gian-hinh-nen-anime-don-gian-ma-dep_092443354.png'
        description='Tìm kiếm truyện'
      />
      <MainLayout>
        <WidthLayout>
          <Box pt={2}>
            <Typography color={"text.primary"} fontSize={{ md: 17, xs: 16 }}>
              Kết quả tìm kiếm{" "}
              <strong>&quot;{router.query["tu-khoa"]}&quot;</strong>{" "}
            </Typography>
            <Section6 data={data || []} isLoading={isLoading} />
          </Box>
        </WidthLayout>
      </MainLayout>
    </>
  );
};

export default Search;
