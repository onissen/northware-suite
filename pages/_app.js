/* jshint esversion:6 */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'next-themes';
config.autoAddCss = false;
import '../styles/globals.sass';

export default function App({ Component, pageProps }) {
  return(
      <ThemeProvider 
        themes={['cockpit_theme', 'finance_theme', 'hr_theme', 'trader_theme']} 
        forcedTheme={Component.theme || 'cockpit_theme'} 
        enableSystem="false"
        attribute="class"
      >
      <Component {...pageProps} />
    </ThemeProvider>
    )
}
