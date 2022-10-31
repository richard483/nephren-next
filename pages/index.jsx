import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Works from "../components/Works";
import ContactButton from "../components/ContactButton";

export default function Home() {
  const router = useRouter();
  const refresh = () => {
    return router.push("/");
  };
  useEffect(() => {
    refresh();
  }, []);
  return (
    <div>
      <Head>
        <title>Richard William - Nephren</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <ContactButton />
      <Works />
      <AboutMe />
      <Footer />
    </div>
  );
}
