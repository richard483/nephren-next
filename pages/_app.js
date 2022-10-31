import GlobalStyle from "../styles/GlobalStyles";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default MyApp;
