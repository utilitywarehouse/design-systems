import Box from '../Box';
import Stack from '../Stack';
import { backgroundColors } from '../types';

interface BackgroundsProps {
  children: React.ReactNode;
}

const Backgrounds = (props: BackgroundsProps) => (
  <Stack spacing={0}>
    {backgroundColors.map(bg => (
      <Box key={bg} background={bg} display="flex" justifyContent="center" padding={4} {...props} />
    ))}
  </Stack>
);

export default Backgrounds;
