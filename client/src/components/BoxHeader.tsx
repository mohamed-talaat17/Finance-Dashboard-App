import React from "react";
import FlexBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  title: string;
  sideText: string;
  subTitle?: string;
  icon?: React.ReactNode;
};

const BoxHeader = ({ title, subTitle, icon, sideText }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween margin="1.5rem 1rem 0 " color={palette.grey[400]}>
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subTitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h6" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
