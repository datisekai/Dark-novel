import { Breadcrumbs, Link as LinkMUI, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Breadcumbs = () => {
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link href='/'>
        <LinkMUI underline='hover' color='inherit'>
          Trang chủ
        </LinkMUI>
      </Link>

      <Typography color='text.primary'>Breadcrumbs</Typography>
    </Breadcrumbs>
  );
};

export default Breadcumbs;
