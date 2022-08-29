import GlobalStyle from "../styles/GlobalStyles";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
