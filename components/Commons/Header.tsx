import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import GithubLogInButton from '../HeaderSub/GithubLogInButton';
import HeaderDropDown from '../HeaderSub/HeaderDropDown';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/userState';
import useLoginMaintain from '../../useHooks/useLoginMaintain';
import GuideButton from '../HeaderSub/GuideButton';

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
    <header className="w-full">
      <div className="flex justify-center w-full h-24 text-4xl">
        <div className="flex items-center justify-between w-full mx-8 max-w-7xl">
          <Link href="/">
            <span className="font-bold cursor-pointer">REVIEWING</span>
          </Link>
          {user ? (
            <>
              <figure
                ref={ref}
                className="relative flex items-center cursor-pointer"
                onClick={() => setDropdown((prev) => !prev)}>
                <Image src={user.imageUrl} alt="userProfile" width={45} height={45} className="rounded-radius-50%" />
                {dropdown && <HeaderDropDown />}
              </figure>
            </>
          ) : (
            <div className="flex justify-between w-36">
              <GuideButton />
              <GithubLogInButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
