import { Box, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import styleLineClamp from "../utils/styleClamp";

interface ITextMore {
  description: string;
  minLine?: number;
  maxLine?: number;
}

const TextMore: FC<ITextMore> = ({ description, minLine = 3, maxLine = 4 }) => {
  const [isFull, setIsFull] = useState(false);

  const styles = isFull ? styleLineClamp(maxLine) : styleLineClamp(minLine);
  return (
    <Box sx={{ position: "relative" }}>
      <Typography
        component={"p"}
        mt={1}
        variant='body1'
        sx={styles}
        lineHeight={1.5}
        align='justify'
        color='text.primary'
      >
        {description}
      </Typography>
      {!isFull && (
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            right: 0,
            left: 0,
            background: "linear-gradient(rgba(255,255,255,0),#484848)",
            height: 20,
          }}
        ></Box>
      )}
      <div onClick={() => setIsFull(!isFull)}>
        <Typography
          color='primary'
          sx={{
            ":hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}
        >
          {isFull ? "Thu gọn" : "Xem thêm"}
        </Typography>
      </div>
    </Box>
  );
};

export default TextMore;
