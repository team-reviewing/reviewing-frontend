import React from 'react';

function HeaderDropDown() {
  return (
    <div className="z-100 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-3">
      <div className="py-2 text-sm text-gray-700 dark:text-gray-200">
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            리뷰어 등록
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            내 정보 수정
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            요청한 리뷰
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            로그아웃
          </a>
        </li>
      </div>
    </div>
  );
}

export default HeaderDropDown;
