import { Box, Button } from "@mui/material";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import HomeAPI from "../../src/actions/home";
import Breadcumbs from "../../src/components/Breadcumbs";
import MainLayout from "../../src/components/Layouts/MainLayout";
import WidthLayout from "../../src/components/Layouts/WidthLayout";
import OnTop from "../../src/components/OnTop";
import Section5 from "../../src/components/Sections/Section5";

const DanhSach = () => {
  const router = useRouter();
  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ["danh-sach", router],
    ({ pageParam }) => {
      return HomeAPI.list({
        slug: router.query.slug as string,
        pageParam: pageParam,
      });
    },
    {
      getNextPageParam: (lastPage: any, allPages: any) => {
        if (+lastPage.page < +lastPage.totalPage) {
          return +lastPage.page + 1;
        }
      },
    }
  );

  const dataSection = useMemo(() => {
    let dataArray: any = [];
    data?.pages?.forEach((item: any, index: number) => {
      dataArray = [...dataArray, ...item.data];
    });
    return dataArray;
  }, [data]);

  return (
    <MainLayout>
      <WidthLayout>
        <Box pt={2}>
          <Breadcumbs current={data?.pages[0]?.title || ""} />
          <Section5
            isLoading={isLoading}
            title={data?.pages[0]?.title || ""}
            data={dataSection || []}
            fetchNextPage={fetchNextPage}
          />
          <OnTop />
        </Box>
      </WidthLayout>
    </MainLayout>
  );
};

export default DanhSach;
