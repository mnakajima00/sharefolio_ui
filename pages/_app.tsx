import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import theme from '../configs/theme';
import createEmotionCache from '../configs/createEmotionCache';

import { IconContext } from 'react-icons';

/* TopBar Component */
import TopBar from '../components/common/TopBar';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface SharefolioApp extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: SharefolioApp) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <IconContext.Provider value={{ color: '#00214d' }}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <TopBar />
          <Component {...pageProps} />
        </IconContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}