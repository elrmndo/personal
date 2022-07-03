import { Header } from '@/core/layout/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Enrique Rimando</title>
        <meta name="description" content="Enrique Rimando" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header size="lg" />
      </main>
    </>
  );
}
