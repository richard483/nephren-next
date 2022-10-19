import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import Works from "../components/Works";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Richard William - Nephren</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Hello World</h1>
      <Works />
      <AboutMe />
    </div>
  );
}
