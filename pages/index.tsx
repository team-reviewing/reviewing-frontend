import { GetServerSideProps } from 'next';
import Template from '../components/Main/Template';
import { ICategoriesType } from '../components/Main/mainType';
import axios from 'axios';

const Home = ({ categories }: ICategoriesType) => {
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <Template categories={categories} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get('http://localhost:3000/tags');
  const categories = response.data.categories;

  return {
    props: {
      categories,
    },
  };
};

export default Home;
