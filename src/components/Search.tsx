import { Box, TextField, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import WidthLayout from "./Layouts/WidthLayout";

interface ISearch {
  isSearch: boolean;
  handleClose: () => void;
}

const Search: FC<ISearch> = ({ isSearch, handleClose }) => {
  const {
    palette: { secondary },
  } = useTheme();

  const [search, setSearch] = useState("");

  const router = useRouter();
  const handleSearch = () => {
    router.push(`/tim-kiem?tu-khoa=${encodeURI(search)}`);
  };

  return (
    <Box>
      <div onClick={handleClose}>
        <Box
          sx={{
            position: "fixed",
            zIndex: 10,
            bgcolor: "rgba(0,0,0,0.616)",
            inset: 0,
            display: isSearch ? "block" : "none",
          }}
        ></Box>
      </div>
      <WidthLayout>
        <Box
          sx={{
            position: "fixed",
            py: 2,
            px: 3,
            top: 76,
            zIndex: 100,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: secondary.main,
            width: {
              md: 500,
              xs: "100%",
            },
            borderRadius: "8px",
            boxShadown: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            display: isSearch ? "block" : "none",
          }}
          id='search'
        >
          <Typography color={"text.primary"} fontSize={{ md: 17, xs: 16 }}>
            Tìm truyện
          </Typography>
          <TextField
            fullWidth
            id='filled-basic'
            variant='filled'
            label='Nhập tên truyện'
            value={search}
            onKeyUp={(e: any) => {
              if (e.keyCode === 13) {
                handleSearch();
                handleClose();
              }
            }}
            sx={{ mt: 1 }}
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </Box>
      </WidthLayout>
    </Box>
  );
};

export default Search;
