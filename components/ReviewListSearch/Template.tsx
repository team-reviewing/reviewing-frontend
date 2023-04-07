import React from 'react';
import ReviewSearchForm from './ReviewSearchForm';
import useSetLocalPath from '../../useHooks/useSetLocalPath';

function Template() {
  useSetLocalPath();

  return (
    <div className="w-full h-full max-w-7xl">
      <ReviewSearchForm />
    </div>
  );
}

export default Template;
