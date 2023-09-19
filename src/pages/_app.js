import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      
      <Component {...pageProps} />
      <Footer />
    </div></>
  );
}

export default MyApp;
