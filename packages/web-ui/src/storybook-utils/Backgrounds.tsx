import { Background } from '../Background';
import { Stack } from '../Stack';
import { backgroundColors } from '../types';

interface BackgroundsProps {
  children: React.ReactNode;
}

const Backgrounds = (props: BackgroundsProps) => (
  <Stack spacing={0}>
    {backgroundColors.map(bg => (
      <Background
        key={bg}
        backgroundColor={bg}
        display="flex"
        justifyContent="center"
        padding={4}
        {...props}
      />
    ))}
  </Stack>
);

export default Backgrounds;
