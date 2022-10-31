import Head from 'next/head';

import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact | Gonzalo Rossi</title>
        <meta content="Gonzalo Ariel Rossi" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <div className="container">
        <NavBar />
        <main>
          <ContactForm />
        </main>
      </div>
      <Footer />
    </div>
  );
}
