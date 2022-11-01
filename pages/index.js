import Head from 'next/head';

import NavBar from '../components/NavBar/NavBar';
import Projects from '../components/Projects/Projects';
import Hero from '../components/Hero/Hero';
import Cta from '../components/Cta/Cta';
import Footer from '../components/Footer/Footer';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Gonzalo Rossi</title>
        <meta content="Gonzalo Ariel Rossi" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div className={'container'}>
        <NavBar />
        <main>
          <Hero id="hero" />
          <Projects />
          <Cta />
        </main>
      </div>
      <Footer />
    </div>
  );
}
