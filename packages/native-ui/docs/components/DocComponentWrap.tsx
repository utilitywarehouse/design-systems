import React, { FC, PropsWithChildren } from 'react';

const DocComponentWrap: FC<PropsWithChildren> = ({ children }) => (
  <div className="sb-unstyled">{children}</div>
);

export default DocComponentWrap;
