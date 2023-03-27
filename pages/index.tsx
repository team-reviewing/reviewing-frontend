import { useState } from 'react';
import Template from '../components/Main/Template';
import ReviewModal from '../components/ReviewModal/ReviewModal';
import Link from 'next/link';

const Home = () => {
  const [btn, setBtn] = useState(false);
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <Template />
        <button onClick={() => setBtn((prev) => !prev)}>Btn</button>
        <Link href="/reviews">링크버튼</Link>
        {btn && <ReviewModal closeModal={setBtn} />}
      </div>
    </>
  );
};

export default Home;
