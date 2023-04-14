import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot, RecoilEnv } from 'recoil';
import '../styles/globals.css';
import 'react-quill/dist/quill.snow.css';
import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import Carousel from '../components/Carousel';
import Head from 'next/head';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
}

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <Head>
          <title>리뷰어 리뷰이</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="개인 프로젝트의 코드리뷰를 받을 수 있는 리뷰어 리뷰이 사이트입니다" />
        </Head>
        <Toaster />
        {router.pathname !== '/induceLogin' && (
          <>
            <Header />
            <Carousel />
          </>
        )}
        <Component {...pageProps} />
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
