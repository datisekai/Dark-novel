import {
  Box,
  Link as LinkMUI,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import EmailIcon from "@mui/icons-material/Email";
import FlexBox from "./FlexBox";
import FacebookIcon from "@mui/icons-material/Facebook";
import WidthLayout from "./Layouts/WidthLayout";

const Footer = () => {
  const {
    palette: { secondary },
  } = useTheme();
  return (
    <>
      <Box bgcolor={secondary.main} pb={3}>
        <WidthLayout>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Stack
              direction={{ md: "row", xs: "column" }}
              justifyContent={{ md: "space-between", xs: "center" }}
              pt={2}
            >
              <Stack spacing={2} mt={1}>
                <Typography
                  fontWeight={"bold"}
                  textTransform='uppercase'
                  color='text.primary'
                >
                  Hỗ trợ khách hàng
                </Typography>
                <FlexBox justifyContent={"center"}>
                  <EmailIcon color='info' />
                  <Typography ml={1} color='text.primary'>
                    datly030102@gmail.com
                  </Typography>
                </FlexBox>
                <FlexBox justifyContent={"center"}>
                  <FacebookIcon color='info' />
                  <Typography ml={1} color='text.primary'>
                    facebook.com/datisekai
                  </Typography>
                </FlexBox>
              </Stack>
              <Stack spacing={2} mt={1}>
                <Typography
                  fontWeight={"bold"}
                  textTransform='uppercase'
                  color='text.primary'
                >
                  Giúp đỡ
                </Typography>
                <Typography color='text.primary'>Câu hỏi thường gặp</Typography>
                <Typography color='text.primary'>Điều khoản sử dụng</Typography>
              </Stack>
              <Stack spacing={2} mt={1}>
                <Typography
                  color='text.primary'
                  fontWeight={"bold"}
                  textTransform='uppercase'
                  sx={{
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Giới thiệu
                </Typography>
                <Typography
                  sx={{
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                  color='text.primary'
                >
                  DarkNovel là gì?
                </Typography>
                <Typography
                  sx={{
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                  color='text.primary'
                >
                  Ai tạo ra DarkNovel?
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </WidthLayout>
      </Box>
      <FlexBox
        alignItems={"center"}
        justifyContent='center'
        bgcolor='#ccc'
        height={40}
      >
        <Typography>
          Copyright © 2022. Design by{" "}
          <LinkMUI href='https://www.facebook.com/datisekai/'>
            Datisekai
          </LinkMUI>{" "}
        </Typography>
      </FlexBox>
    </>
  );
};

export default Footer;
