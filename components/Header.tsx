import Image from 'next/image';
import img from 'styles/images/person.png';
import Link from 'next/link';
import { IData } from '../globalType';
import { useState } from 'react';
import lena from 'styles/images/lena.jpg';
import GithubLogInButton from './HeaderSub/GithubLogInButton';
import HeaderDropDown from './HeaderSub/HeaderDropDown';

const Header = ({ image_url }: Partial<IData>) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <div className="w-full sticky mb-3">
      <div className="max-w-7xl mx-auto h-24 flex items-center justify-between text-4xl">
        <Link href="/">
          <span className="cursor-pointer font-bold">Logo</span>
        </Link>
        {image_url ? (
          <>
            <ul className="cursor-pointer font-bold" onClick={() => setDropdown((prev) => !prev)}>
              <div className="flex">
                <Image src={lena} alt="userProfile" width={60} height={60} className="rounded-full" />
                <span className="text-base"> ▼ </span>
              </div>
              {dropdown && <HeaderDropDown />}
            </ul>
          </>
        ) : (
          <Link href="/login">
            <GithubLogInButton />
          </Link>
        )}
      </div>
      <div className="w-full h-80 bg-cyan-200">
        <div className="max-w-7xl h-full flex items-center justify-between mx-auto">
          <Image src={img} alt="person" />
          <div className="w-full text-4xl font-bold leading-10 tracking-widest">
            <div className="w-full flex justify-center items-center flex-col">
              <span>개인 프로젝트의 코드리뷰가</span>
              <br />
              <span>필요하신가요?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
