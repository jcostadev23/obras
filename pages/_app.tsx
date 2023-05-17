import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';


import awsconfig from '../src/aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../src/ui-components";

Amplify.configure(awsconfig);
export default function App({ Component, pageProps }: AppProps) {

  return <ThemeProvider theme={studioTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
