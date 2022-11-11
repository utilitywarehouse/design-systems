import * as React from "react";
import { FC } from "react";
import { RadioGroup as RadioGroupMui, styled } from "@mui/material";
import { RadioGroupProps } from "@mui/material/RadioGroup/RadioGroup";
import { useDeviceSize } from "../index";

interface Props extends RadioGroupProps {
  inline?: boolean;
  children: React.ReactNode;
}

const StyledRadioGroup = styled(RadioGroupMui, {
  shouldForwardProp: (prop) => prop !== "inline",
})<{ inline: boolean }>(({ inline }) => ({
  display: "flex",
  flexDirection: inline ? "row" : "column",
}));

const RadioGroup: FC<Props> = ({
  inline = true,
  children,
  ...props
}: Props) => {
  const { isMobile } = useDeviceSize();
  return (
    <StyledRadioGroup {...props} inline={!isMobile && inline}>
      {children}
    </StyledRadioGroup>
  );
};
export default RadioGroup;
