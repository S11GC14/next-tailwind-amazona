import React from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';

interface Props {
  Component: any;
  pageProps: React.Component;
}


function MyApp({ Component, pageProps }: Props) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;