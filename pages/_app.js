import GlobalStyle from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />

    </div>
  );
}

export default MyApp;
