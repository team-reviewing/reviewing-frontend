import Image from 'next/image';
import img from 'styles/images/person.png';
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
    <div className="w-full sticky mb-3">
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
                <Image src={lena} alt="userProfile" width={45} height={45} className="rounded-full" />
                {dropdown && <HeaderDropDown />}
              </div>
            </>
          ) : (
            <GithubLogInButton />
          )}
        </div>
      </header>
      <div className="w-full h-80 bg-cyan-200">
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
    </div>
  );
};

export default Header;
