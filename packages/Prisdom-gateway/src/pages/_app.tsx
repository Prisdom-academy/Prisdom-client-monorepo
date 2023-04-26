import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { chakraTheme } from '@prisdom/theme/chakraTheme';
import Layout from '@/components/layout';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ChakraProvider theme={chakraTheme}>
      <Layout currentLocation={router.pathname}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
