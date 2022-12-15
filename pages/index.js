import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luciano's Portfolio</title>
        <meta name="description" content="Luciano Portfolio, maded in NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
}
