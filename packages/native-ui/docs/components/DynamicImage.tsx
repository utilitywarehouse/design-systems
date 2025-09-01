import React, { FC } from 'react';
import { useColorMode } from '../../src';

interface DynamicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lightSrc: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  darkSrc: React.ImgHTMLAttributes<HTMLImageElement>['src'];
}

const DynamicImage: FC<DynamicImageProps> = ({ lightSrc, darkSrc, ...props }) => {
  const [colorMode] = useColorMode();

  return <img src={colorMode === 'light' ? lightSrc : darkSrc} {...props} />;
};

export default DynamicImage;
