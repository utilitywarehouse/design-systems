// this is a comment at the beginning of the file
import * as React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Background,
  BackgroundProvider,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Card,
  CardProps,
  CardVariant,
  Checkbox,
  Checkbox as MuiCheckbox,
  Container,
  Dialog,
  Divider,
  FormControlLabel,
  Grid,
  GridProps,
  Hidden,
  HiddenProps,
  Icon,
  IconButton,
  IconProps,
  InputLabel,
  InteractiveCard,
  InteractiveCardProps,
  Link,
  LinkProps,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  MuiTextField,
  NavLink,
  NavLinkProps,
  Select,
  SelectProps,
  StylesProvider,
  StylesProviderProps,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  TextFieldProps,
  ThemeProvider,
  ThemeProviderProps,
  Typography,
  TypographyProps,
  styled,
  useDeviceSize,
  useMuiTheme,
} from '@utilitywarehouse/customer-ui-material';

const Component = () => {
  const muiTheme = useMuiTheme();
  return (
    <div>
      <Button></Button>
      <Button size="regular"></Button>
      <Button size="large"></Button>
      <Button variant="contained"></Button>
      <Button variant="outlined"></Button>
      <Button variant="tertiary"></Button>
      <Background backgroundColor="level0"></Background>
      <Background backgroundColor="level1"></Background>
      <Background backgroundColor="level3"></Background>
      <Background backgroundColor="level4"></Background>
      <Background backgroundColor="level5"></Background>
    </div>
  );
};

export default Component;
