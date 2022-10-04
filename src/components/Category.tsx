import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Tippy from "@tippyjs/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CategoryAPI from "../actions/category";

const Category = () => {
  const {
    palette: { grey },
  } = useTheme();
  const router = useRouter();

  const [display, setDisplay] = useState(false);

  const { data, isLoading } = useQuery(["category"], CategoryAPI.getCategory);

  return (
    <Tippy
      onClickOutside={() => setDisplay(false)}
      visible={display}
      delay={500}
      interactive
      render={(attrs: any) => (
        <Stack
          {...attrs}
          spacing={1}
          sx={{
            bgcolor: grey[900],
            py: 1,
            px: 2,
            borderRadius: 1,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: display ? "flex" : "none",
          }}
        >
          {data?.map((item: { slug: string; name: string }, index: number) => {
            return (
              <Link href={`/danh-sach/${item.slug}`} key={item.slug}>
                <Typography
                  color={
                    `${router.asPath}/` === `/danh-sach/${item.slug}`
                      ? "primary"
                      : "text.primary"
                  }
                  fontSize={14}
                  fontWeight={500}
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            );
          })}
        </Stack>
      )}
    >
      <div onClick={() => setDisplay(true)}>
        <Typography
          color={
            router.asPath.indexOf("danh-sach") !== -1
              ? "primary"
              : "text.primary"
          }
          fontSize={16}
          fontWeight={600}
          sx={{
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          Danh sách
        </Typography>
      </div>
    </Tippy>
  );
};

export default Category;
