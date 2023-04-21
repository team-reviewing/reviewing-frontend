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
    <div className="z-20 bg-c-white divide-y divide-gray100 rounded-radius-m shadow w-40 dark:bg-gray700 absolute mt-3 left-2/4 m2xl:left-[10%] m2xl:w-32 -translate-x-2/4 top-12 text-center">
      <nav className="py-2 text-sm text-gray-700 dark:text-gray-200">
        <ul className="font-semibold cursor-pointer">
          <li>
            <Link href="/user/me" className="nav_b_link">
              마이페이지
            </Link>
          </li>
          <li>
            <Link href="/reviews" className="nav_b_link">
              요청한 리뷰
            </Link>
          </li>
          <li className="flex-cc">
            <button
              className="block w-full px-4 py-2 text-center hover:bg-gray100 dark:hover:bg-gray600 dark:hover:text-c-white"
              onClick={logOutHandler}>
              로그아웃
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderDropDown;
