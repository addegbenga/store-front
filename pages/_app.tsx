import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';
import { AuthContextprovider } from '../state/context/authContext';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <AuthContextprovider>
      <Component {...pageProps} />
    </AuthContextprovider>
  );
}

export default MyApp;
