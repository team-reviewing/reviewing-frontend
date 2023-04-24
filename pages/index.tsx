import { GetServerSideProps } from 'next';
import Template from '../components/Main/Template';
import { ICategoriesType } from '../components/Main/mainType';
import { getCategories } from './api/main';
// import { setupServer } from 'msw/node';
// import { handlers } from '../mocks/handlers';
import HeadHoc from '../components/Commons/HeadHoc';

const Home = ({ categories }: ICategoriesType) => {
  return (
    <>
      <main className="flex justify-center px-8 wh-f">
        <Template categories={categories} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    // setupServer(...handlers);
  }
  const response = await getCategories();
  const categories = response.data.categories;

  return {
    props: {
      categories,
    },
  };
};

export default HeadHoc({ desc: '메인 페이지', Component: Home });
