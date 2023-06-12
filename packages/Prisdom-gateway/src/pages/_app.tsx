import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { chakraTheme } from '@prisdom/theme/chakraTheme';
import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import { RootStoreProvider } from '@/store/StoreProvider';
import '../yupSetup';
import { initGatewayService } from '@/initService';
import { initServices } from '@prisdom/services/initService';

initGatewayService();
initServices();
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ChakraProvider theme={chakraTheme}>
      <RootStoreProvider hydratedData={pageProps.hydrationData}>
        <Layout currentLocation={router.pathname}>
          <Component {...pageProps} />
        </Layout>
      </RootStoreProvider>
    </ChakraProvider>
  );
}
