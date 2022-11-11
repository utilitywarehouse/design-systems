import * as React from "react";
import { FC, ReactElement } from "react";
import {
  colors,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import {
  Box,
  FormControlLabel,
  Radio,
  styled,
  Typography,
} from "@mui/material";
import { Color } from "../types";

interface Props {
  label: string | ReactElement;
  handleClick?: () => void;
  value: string;
  color?: Color;
  selected: boolean;
  disabled?: boolean;
}

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  width: "100%",
  margin: 0,
}));

const StyledLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "selected" && prop !== "disabled",
})<{ selected: boolean; disabled: boolean }>(({ selected, disabled }) => ({
  fontWeight: selected
    ? fontWeights.secondary.semibold
    : fontWeights.secondary.regular,
  padding: "16.5px 16px 16.5px 0px",
  color: disabled ? colors.codGray40 : "",
}));

const StyledRadio = styled(Radio)<{ disabled: boolean }>(({ disabled }) => ({
  "#radioBox:hover &": {
    color: disabled ? "" : "#ACCAFD",
  },
}));

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "selected" && prop !== "disabled",
})<{ selected: boolean; disabled: boolean }>(
  ({ theme, selected, disabled }) => {
    const baseStyle = {
      // display: "inline-flex",
      display: "flex",
      // flexGrow: 1,
      // minWidth: "auto",
      height: 56,
      borderRadius: theme.spacing(1),
      borderWidth: "2px",
      borderColor: selected ? colors.cyan : colors.codGray20,
      borderStyle: "solid",
      cursor: "pointer",
      backgroundColor: colors.white,
      margin: 16,
    };

    return disabled
      ? {
          ...baseStyle,
          borderColor: "transparent",
        }
      : {
          ...baseStyle,
          "&:hover": {
            background: "#E9F1FF",
            borderColor: "#ACCAFD",
          },
          "&:focus": {
            background: "#D3E3FE",
            borderColor: "#75A7FD",
          },
        };
  }
);

const RadioButton: FC<Props> = ({
  label,
  value,
  color = "secondary",
  selected,
  disabled = false,
}: Props) => (
  <StyledBox id="radioBox" selected={selected} disabled={disabled}>
    <StyledFormControlLabel
      value={value}
      control={
        <StyledRadio
          color={color}
          checked={selected}
          disableRipple
          disabled={disabled}
        />
      }
      label={
        <StyledLabel selected={selected} disabled={disabled} variant="subtitle">
          {label}
        </StyledLabel>
      }
    />
  </StyledBox>
);
export default RadioButton;
