import Link from 'next/link';
import React from 'react';
import { logOutUser } from '../../pages/api/member';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../atoms/userState';

function HeaderDropDown() {
  const setUser = useSetRecoilState(userState);

  const logOutHandler = async () => {
    await logOutUser().then(() => {
      setUser(null);
    });
  };

  return (
    <div className="z-100 bg-c-white divide-y divide-gray100 rounded-radius-m shadow w-28 dark:bg-gray700 absolute mt-3 left-2/4 m2xl:left-1/4 -translate-x-2/4 top-12 text-center">
      <div className="py-2 text-sm text-gray-700 dark:text-gray-200">
        <ul className="cursor-pointer font-semibold">
          <li>
            <Link
              href="/user/me"
              className="block px-4 py-2 hover:bg-gray100 dark:hover:bg-gray600 dark:hover:text-c-white">
              마이페이지
            </Link>
          </li>
          <li>
            <Link
              href="/reviews"
              className="block px-4 py-2 hover:bg-gray100 dark:hover:bg-gray600 dark:hover:text-c-white">
              요청한 리뷰
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <button
              className="w-full block px-4 py-2 hover:bg-gray100 dark:hover:bg-gray600 dark:hover:text-c-white text-center"
              onClick={logOutHandler}>
              로그아웃
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderDropDown;
