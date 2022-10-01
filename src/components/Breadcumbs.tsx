import { Breadcrumbs, Link as LinkMUI, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

interface IBreadcumbs {
  current: string;
}

const Breadcumbs: FC<IBreadcumbs> = ({ current }) => {
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link href='/'>
        <LinkMUI underline='hover' color='inherit'>
          Trang chủ
        </LinkMUI>
      </Link>

      <Typography color='text.primary'>{current}</Typography>
    </Breadcrumbs>
  );
};

export default Breadcumbs;
