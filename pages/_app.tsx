import React from 'react';
import { SessionProvider, useSession } from 'next-auth/react';
import { StoreProvider } from '../utils/Store';
import '../styles/globals.css';
import { useRouter } from 'next/router';


interface Props {
  Component: any;
  pageProps: React.Component;
  session: any;
}


function MyApp({ Component, pageProps, session }: Props) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </StoreProvider>
    </SessionProvider>
  );
}

function Auth(children: any) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loding...</div>;
  }
  return children;
}

export default MyApp;