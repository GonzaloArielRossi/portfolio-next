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
        <meta content="Gonzalo Ariel Rossi" property="og:title" />
        <meta content="Gonzalo Ariel Rossi" name="twitter:title" />

        <meta
          content="Full Stack Developer | React NextJs NodeJs Express MongoDB"
          name="description"
        />
        <meta
          content="Full Stack Developer | React NextJs NodeJs Express MongoDB"
          property="og:description"
        />
        <meta
          content="Full Stack Developer | React NextJs NodeJs Express MongoDB"
          name="twitter:description"
        />

        <meta
          content="https://i.postimg.cc/ZRDD9GX2/porfolio-Img.png"
          property="og:image"
        />
        <meta
          content="https://i.postimg.cc/ZRDD9GX2/porfolio-Img.png"
          name="twitter:image"
        />
        <meta content="index" name="robots" />
        <meta content="follow" name="robots" />
        <meta
          content="HTML, CSS, JavaScript, React, Node, Developer, Full Stack Developer, Front End Developer, Back End Developer, NextJs, Express, SQL, Gonzalo Rossi, Gonzalo Ariel Rossi, Programador, developer"
          name="keywords"
        />
        <meta content="Gonzalo Ariel Rossi" name="author" />
        <meta content="https://gonzalorossi.dev/" property="og:url" />
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
