import { IconButton, Stack } from "@mui/material";
import React from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Tippy from "@tippyjs/react";
import shareData, { IShareData } from "./data/share";
import { useRouter } from "next/router";
import copyToClipboard from "../utils/copyPath";

const ShareNovel = ({ title }: any) => {
  const router = useRouter();
  return (
    <Stack direction='row' spacing={1}>
      {shareData?.map((item: IShareData, index: number) => {
        const MIcon = item.Icon;

        return (
          <Tippy key={index} content={item.name}>
            <a
              href={item.link(
                `${process.env.NEXT_PUBLIC_CLIENT_URL}${router.asPath}`,
                title
              )}
              rel='noreferrer'
              target='_blank'
            >
              <IconButton>
                <MIcon color='info' fontSize='large' />
              </IconButton>
            </a>
          </Tippy>
        );
      })}
      <Tippy content={"Copy liên kết"}>
        <IconButton
          onClick={() =>
            copyToClipboard(
              `${process.env.NEXT_PUBLIC_CLIENT_URL}${router.asPath}`
            )
          }
        >
          <InsertLinkIcon color='info' fontSize='large' />
        </IconButton>
      </Tippy>
    </Stack>
  );
};

export default ShareNovel;
