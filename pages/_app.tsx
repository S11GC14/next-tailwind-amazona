import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { StoreProvider } from '../utils/Store';
import '../styles/globals.css';


interface Props {
  Component: any;
  pageProps: React.Component;
  session: any;
}


function MyApp({ Component, pageProps, session }: Props) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
  );
}

export default MyApp;