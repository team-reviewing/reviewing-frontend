import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot, RecoilEnv } from 'recoil';
import '../styles/globals.css';
import 'react-quill/dist/quill.snow.css';
import { Toaster } from 'react-hot-toast';
import Header from '../components/Commons/Header';
import { useRouter } from 'next/router';
import Carousel from '../components/Commons/Carousel';

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
