import { type AppType } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '@fontsource/raleway/700.css';
import '@fontsource/open-sans/400.css';
import theme from '@/styles/theme';

const MyApp: AppType = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
