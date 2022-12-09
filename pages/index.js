import Head from "next/head";
import Image from "next/image";
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luciano's Porftolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar/>
      </div>
    </div>
  );
}
