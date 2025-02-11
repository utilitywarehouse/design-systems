import { useColorMode } from '../../src';
import React, { FC } from 'react';

interface DynamicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lightSrc: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  darkSrc: React.ImgHTMLAttributes<HTMLImageElement>['src'];
}

const DynamicImage: FC<DynamicImageProps> = ({ lightSrc, darkSrc, ...props }) => {
  const colorMode = useColorMode();

  return <img src={colorMode === 'light' ? lightSrc : darkSrc} {...props} />;
};

export default DynamicImage;
