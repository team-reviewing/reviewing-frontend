import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import lena from 'styles/images/lena.jpg';
import GithubLogInButton from './HeaderSub/GithubLogInButton';
import HeaderDropDown from './HeaderSub/HeaderDropDown';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userState';
import useLoginMaintain from '../useHooks/useLoginMaintain';

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
    <div className="w-full sticky">
      <header className="w-full h-24 flex justify-center text-4xl">
        <div className="max-w-7xl mx-16 flex items-center justify-between w-full">
          <Link href="/">
            <span className="cursor-pointer font-bold">Logo</span>
          </Link>
          {user ? (
            <>
              <div
                ref={ref}
                className="flex items-center cursor-pointer relative"
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
