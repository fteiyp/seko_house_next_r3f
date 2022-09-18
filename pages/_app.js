import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
