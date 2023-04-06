import React from 'react';
import InduceBox from './InduceBox';

function Template() {
  return (
    <div
      className="w-full h-full flex justify-center items-center bg-cover bg-top"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2019/09/22/16/20/backend-4496461_1280.png')",
      }}>
      <InduceBox />
    </div>
  );
}

export default Template;
