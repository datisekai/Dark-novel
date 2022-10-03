import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import HomeAPI from "../src/actions/home";
import MainLayout from "../src/components/Layouts/MainLayout";
import Meta from "../src/components/Meta";
import Section1 from "../src/components/Sections/Section1";
import Section2 from "../src/components/Sections/Section2";
import Section3 from "../src/components/Sections/Section3";
import Section4 from "../src/components/Sections/Section4";

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

  // const { data: dataTienHiep, isLoading: loadingTienHiep } = useQuery(
  //   ["tien-hiep"],
  //   () => HomeAPI.list("tien-hiep-hay")
  // );
  return (
    <>
      <Meta
        title='DarkNovel - Đọc truyện chữ'
        image='https://img5.thuthuatphanmem.vn/uploads/2021/11/12/hinh-anh-anime-don-gian-hinh-nen-anime-don-gian-ma-dep_092443354.png'
        description='Đọc truyện online, đọc truyện chữ, truyện hay, truyện full. DarkNovel luôn tổng hợp và cập nhật các chương truyện một cách nhanh nhất.'
      />
      <MainLayout>
        <Box pt={1}>
          <Section1
            title='Truyện Hot'
            data={dataHot || []}
            isLoading={loadingHot}
          />
          <Section2
            title='Truyện mới cập nhật'
            url='truyen-moi'
            data={dataUpComing ? dataUpComing.slice(0, 12) : []}
            isLoading={loadingUpComing}
          />
          <Section3
            title='Truyện đã hoàn thành'
            data={dataDone || []}
            url='truyen-full'
            isLoading={loadingDone}
          />
          {/* <Section4
          title='Truyện Tiên hiệp hay'
          data={dataTienHiep || []}
          isLoading={loadingTienHiep}
        /> */}
        </Box>
      </MainLayout>
    </>
  );
};

export default Home;
