import React from 'react';
import Loading from '../Loading';
import useRedirectBefore from '../../useHooks/useRedirectBefore';

function Template() {
  useRedirectBefore();
  return <Loading />;
}

export default Template;
