/* jshint esversion:6 */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import '../styles/globals.sass';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
