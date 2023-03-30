import Link from 'next/link';
import React from 'react';

function HeaderDropDown() {
  return (
    <div className="z-100 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 absolute mt-3 left-2/4 -translate-x-2/4 top-12 text-center">
      <div className="py-2 text-sm text-gray-700 dark:text-gray-200">
        <ul className="cursor-pointer font-semibold">
          <li>
            <Link
              href="/user/me"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              마이페이지
            </Link>
          </li>
          <li>
            <Link
              href="/reviews"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              요청한 리뷰
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-center">
              로그아웃
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderDropDown;
