// this is a comment at the beginning of the file
import * as React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Checkbox,
  Checkbox as MuiCheckbox,
  Dialog,
  Divider,
  FormControlLabel,
  IconButton,
  InputLabel,
  TextField as MuiTextField,
  Select,
  SelectProps,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
} from '@mui/material';

import {
  Background,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Card,
  CardProps,
  CardVariant,
  Container,
  Grid,
  GridProps,
  Hidden,
  HiddenProps,
  Icon,
  IconProps,
  InteractiveCard,
  InteractiveCardProps,
  Link,
  LinkProps,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  NavLink,
  NavLinkProps,
  StylesProvider,
  StylesProviderProps,
  TextField,
  TextFieldProps,
  ThemeProvider,
  ThemeProviderProps,
  Typography,
  TypographyProps,
  styled,
  useDeviceSize,
  useTheme,
} from 'cwui-v2';

const Component = () => {
  const muiTheme = useTheme();
  return (
    <div>
      <Button size="small"></Button>
      <Button size="small"></Button>
      <Button size="large"></Button>
      <Button size="small" variant="primary"></Button>
      <Button size="small" variant="secondary"></Button>
      <Button size="small" variant="tertiary"></Button>
      <Background backgroundColor="midnight"></Background>
      <Background backgroundColor="purple"></Background>
      <Background backgroundColor="lightTint"></Background>
      <Background backgroundColor="whiteOwl"></Background>
      <Background backgroundColor="white"></Background>
    </div>
  );
};

export default Component;
