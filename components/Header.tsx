import Image from 'next/image';
import img from 'styles/images/person.png';
import Link from 'next/link';
import { UserType } from './userInfomation/informationType';
import { useState } from 'react';
import lena from 'styles/images/lena.jpg';
import GithubLogInButton from './HeaderSub/GithubLogInButton';
import HeaderDropDown from './HeaderSub/HeaderDropDown';

const Header = ({ imageUrl }: Partial<Pick<UserType, 'imageUrl'>>) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <div className="w-full sticky mb-3">
      <div className="max-w-7xl mx-auto h-24 flex items-center justify-between text-4xl">
        <Link href="/">
          <span className="cursor-pointer font-bold">Logo</span>
        </Link>
        {imageUrl ? (
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
          <GithubLogInButton />
        )}
      </div>
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
