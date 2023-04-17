import { GetServerSideProps } from 'next';
import Template from '../components/Main/Template';
import { ICategoriesType } from '../components/Main/mainType';
import { getCategories } from './api/main';
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers';

const Home = ({ categories }: ICategoriesType) => {
  return (
    <>
      <div className="flex justify-center wh-f">
        <Template categories={categories} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    setupServer(...handlers);
  }
  const response = await getCategories();
  const categories = response.data.categories;

  return {
    props: {
      categories,
    },
  };
};

export default Home;
