import React from 'react';
import { StrictPropsWithChildren } from './commonsType';

function EmptyListWrapper({ children }: StrictPropsWithChildren) {
  return <p className="flex-cc">{children}</p>;
}

export default EmptyListWrapper;
