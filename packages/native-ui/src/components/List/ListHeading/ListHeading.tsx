import React from 'react';
import { Root, SupportingText, Title } from './styled-components';

interface ListHeadingProps {
  title: string;
  supportingText?: string;
}

const ListHeading: React.FC<ListHeadingProps> = ({ title, supportingText }) => {
  return (
    <Root>
      <Title>{title}</Title>
      {supportingText ? <SupportingText>{supportingText}</SupportingText> : null}
    </Root>
  );
};

export default ListHeading;
