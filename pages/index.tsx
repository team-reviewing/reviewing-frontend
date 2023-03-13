import Template from '../components/Main/Template';
import Header from '../components/Header';
import useGetUserQuery from '../queries/getUserQuery';

const Home = () => {
  const { data } = useGetUserQuery();

  return (
    <>
      <Header imageUrl={data} />
      <div className="w-full h-full flex justify-center">
        <Template />
      </div>
    </>
  );
};

export default Home;
