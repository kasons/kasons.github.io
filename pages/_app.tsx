import Layout from "@/Components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'core-js/full/promise/with-resolvers.js';
import { polyfillPromiseWithResolvers } from '../utils/PromiseWithResolvers';

polyfillPromiseWithResolvers();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}