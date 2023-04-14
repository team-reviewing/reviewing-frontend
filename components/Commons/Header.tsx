import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import lena from 'styles/images/lena.jpg';
import GithubLogInButton from '../HeaderSub/GithubLogInButton';
import HeaderDropDown from '../HeaderSub/HeaderDropDown';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/userState';
import useLoginMaintain from '../../useHooks/useLoginMaintain';

const Header = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const user = useRecoilValue(userState);
  const ref = useRef<HTMLDivElement>(null);

  useLoginMaintain();

  useEffect(() => {
    const closeHandler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setDropdown(false);
    };

    document.body.addEventListener('mousedown', closeHandler);
    return () => {
      document.removeEventListener('mousedown', closeHandler);
    };
  }, [ref]);

  return (
    <div className="w-full">
      <header className="flex justify-center w-full h-24 text-4xl">
        <div className="flex items-center justify-between w-full mx-8 max-w-7xl">
          <Link href="/">
            <span className="font-bold cursor-pointer">Logo</span>
          </Link>
          {user ? (
            <>
              <div
                ref={ref}
                className="relative flex items-center cursor-pointer"
                onClick={() => setDropdown((prev) => !prev)}>
                <Image src={lena} alt="userProfile" width={45} height={45} className="rounded-radius-50%" />
                {dropdown && <HeaderDropDown />}
              </div>
            </>
          ) : (
            <GithubLogInButton />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
