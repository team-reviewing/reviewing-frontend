import { useState } from 'react';
import Template from '../components/Main/Template';
import ReviewModal from '../components/ReviewModal/ReviewModal';

const Home = () => {
  const [btn, setBtn] = useState(false);
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <Template />
        <button onClick={() => setBtn((prev) => !prev)}>Btn</button>
        {btn && <ReviewModal closeModal={setBtn} />}
      </div>
    </>
  );
};

export default Home;
