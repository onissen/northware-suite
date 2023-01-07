/* jshint esversion:6 */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'next-themes';
config.autoAddCss = false;
import '../styles/globals.sass';

function App({ Component, pageProps }) {
  return(
    <ThemeProvider forcedTheme={Component.theme || null} enableSystem="false">
      <Component {...pageProps} />
    </ThemeProvider>
    )
}

export default App;
