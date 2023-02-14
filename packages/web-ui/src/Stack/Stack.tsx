import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack';

export type StackProps<C extends React.ElementType = 'div'> = MuiStackProps<C, { component?: C }>;

function Stack<C extends React.ElementType>(props: StackProps<C>) {
  return <MuiStack {...props} />;
}

export default Stack;
