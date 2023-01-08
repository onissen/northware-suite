/* jshint esversion:6 */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'next-themes';
config.autoAddCss = false;
import '../styles/globals.sass';

export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider forcedTheme={Component.theme || 'light'} enableSystem="false">
      {/* TODO: Hier als Fallback das Cockpit Theme hinterlegen */}
      <Component {...pageProps} />
    </ThemeProvider>
    )
}
