import { Box } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { ChildrenProps } from "../../models";
import { setChapter } from "../../redux/slices/history";

const DataLayout: FC<ChildrenProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage && localStorage.getItem("history")) {
      dispatch(
        setChapter(JSON.parse(localStorage.getItem("history") as string))
      );
    }
  }, []);
  return <Box>{children}</Box>;
};

export default DataLayout;
