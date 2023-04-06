import React from 'react';
import img from 'styles/images/person.png';
import Image from 'next/image';

function Carousel() {
  return (
    <div className="w-full h-80 bg-cyan200">
      <div className="max-w-7xl h-full flex items-center justify-between mx-auto">
        <Image src={img} alt="person" />
        <div className="w-full text-4xl font-bold leading-10 tracking-widest">
          <div className="w-full flex justify-center items-center flex-col">
            <span className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl">개인 프로젝트의 코드리뷰가</span>
            <br />
            <span className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl">필요하신가요?</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
