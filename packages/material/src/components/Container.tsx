import React from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "./Box";

const StyledBox = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  display: "block",
  width: "100%",
  padding: `0 ${theme.spacing(2)}`,
  margin: "0 auto",
  maxWidth: `calc(343px + ${theme.spacing(4)})`,
  [theme.breakpoints.up("tablet")]: {
    padding: `0 ${theme.spacing(3)}`,
    maxWidth: `calc(720px + ${theme.spacing(6)})`,
  },
  [theme.breakpoints.up("desktop")]: {
    maxWidth: `calc(1021px + ${theme.spacing(6)})`,
  },
}));

interface ContainerProps extends BoxProps {
  forwardedRef?: React.Ref<unknown>;
}

const Container: React.FC<ContainerProps> = ({
  children,
  forwardedRef,
  ...props
}) => {
  return (
    <StyledBox ref={forwardedRef} {...props}>
      {children}
    </StyledBox>
  );
};

export default Container;
