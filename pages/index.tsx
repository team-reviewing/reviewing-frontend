import { GetServerSideProps } from 'next';
import Template from '../components/Main/Template';
import { ICategoriesType } from '../components/Main/mainType';
import { getCategories } from './api/main';

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
  const response = await getCategories();
  const categories = response.data.categories;

  return {
    props: {
      categories,
    },
  };
};

export default Home;
