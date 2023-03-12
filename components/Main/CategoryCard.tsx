import React from 'react';
import img from 'styles/images/lena.jpg';
import Image from 'next/image';

function CategoryCard() {
  return (
    <div className="max-w-md rounded-md shadow-md border-2 border-neutral-400 flex justify-center items-center px-3 py-3">
      <div className="flex flex-col w-full h-full">
        <p className="w-full line-clamp-3 overflow-ellipsis whitespace-normal max-h-18 leading-6">
          introduce introduce introduce introduce introduc eintroduceintrod uceintroduc eintrodu ceintr oduceintrod
          uceintrodu ceintr oduceintro duceintr oduce
        </p>
        <div className="w-full mt-3 flex justify-between">
          <div className="flex flex-col">
            <span>직무 : 백엔드</span>
            <span>경력 : n년차</span>
            <span>github : leeuihyun</span>
            <span>stack : java, spring, kotlin</span>
          </div>
          <Image src={img} alt="img" width={80} height={80} className="rounded-full"></Image>
        </div>
        <div className="w-full flex justify-between mt-3">
          <div className="bg-black text-white text-bold rounded-lg w-28 text-center">4.7</div>
          <button className="bg-black text-white text-bold rounded-lg w-28">리뷰요청</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
