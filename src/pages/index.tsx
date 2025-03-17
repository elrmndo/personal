import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Enrique Rimando</title>
        <meta name="description" content="Enrique Rimando" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-h-screen text-center selection:text-white selection:bg-sky-300">
        <section className="flex-1 flex flex-col justify-center items-center bg-slate-50 px-4">
          <p className="text-lg text-gray-500">
            <a
              className="text-cyan-500 text-bold underline"
              href="mailto:hi@elrmndo.dev"
            >
              hi@elrmndo.dev
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
