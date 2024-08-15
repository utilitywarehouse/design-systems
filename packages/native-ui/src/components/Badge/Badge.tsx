import React, { ComponentProps } from 'react';
import { Badge as GSBadge, BadgeText } from '@gluestack-ui/themed';

const Badge: React.FC<ComponentProps<typeof GSBadge>> = ({ children, ...props }) => {
  if (typeof children !== 'string' && typeof children !== 'number') {
    return <GSBadge {...props}>{children}</GSBadge>;
  }
  return (
    <GSBadge {...props}>
      <BadgeText>{children}</BadgeText>
    </GSBadge>
  );
};

export default Badge;
