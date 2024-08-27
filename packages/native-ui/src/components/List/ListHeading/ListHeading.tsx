import React from 'react';
import { Root, SupportingText, Title } from './styled-components';

interface ListHeadingProps {
  text: string;
  supportingText?: string;
}

const ListHeading: React.FC<ListHeadingProps> = ({ text, supportingText }) => {
  return (
    <Root>
      <Title>{text}</Title>
      {supportingText ? <SupportingText>{supportingText}</SupportingText> : null}
    </Root>
  );
};

export default ListHeading;
