import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import HomeAPI from "../src/actions/home";
import MainLayout from "../src/components/Layouts/MainLayout";
import Section1 from "../src/components/Sections/Section1";
import Section2 from "../src/components/Sections/Section2";
import Section3 from "../src/components/Sections/Section3";

const Home: NextPage = () => {
  const { data: dataHot, isLoading: loadingHot } = useQuery(
    ["hot"],
    HomeAPI.hot
  );
  const { data: dataUpComing, isLoading: loadingUpComing } = useQuery(
    ["upComing"],
    HomeAPI.upComing
  );
  const { data: dataDone, isLoading: loadingDone } = useQuery(
    ["done"],
    HomeAPI.done
  );
  return (
    <MainLayout>
      <Box pt={1}>
        <Section1
          title='Truyện Hot'
          data={dataHot || []}
          isLoading={loadingHot}
        />
        <Section2
          title='Truyện mới cập nhật'
          data={dataUpComing ? dataUpComing.slice(0, 12) : []}
          isLoading={loadingUpComing}
        />
        <Section3
          title='Truyện đã hoàn thành'
          data={dataDone || []}
          isLoading={loadingDone}
        />
      </Box>
    </MainLayout>
  );
};

export default Home;
