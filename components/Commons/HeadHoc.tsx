import Head from 'next/head';
import { HeadType } from './commonsType';

function HeadHoc<P>({ desc, Component }: HeadType<P>) {
  const Hoc = (props: JSX.Element & P) => {
    return (
      <>
        <Head>
          <title>리뷰어 리뷰이</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={`개인 프로젝트 코드리뷰를 돕는 리뷰어 리뷰이 😊 ${desc}`} />
        </Head>
        <Component {...props} />
      </>
    );
  };
  return Hoc;
}

export default HeadHoc;
