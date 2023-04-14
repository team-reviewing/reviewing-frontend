import React from 'react';
import InduceBox from './InduceBox';

function Template() {
  return (
    <div
      className="bg-top bg-cover wh-f flex-cc"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2019/09/22/16/20/backend-4496461_1280.png')",
      }}>
      <InduceBox />
    </div>
  );
}

export default Template;
