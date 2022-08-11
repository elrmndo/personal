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
          <h1 className="text-4xl font-bold">Enrique Rimando.</h1>
          <p className="text-lg text-gray-500">
            Hello, kamusta? Enrique here. I am a Full Stack Developer with 5+
            years of progressive experience
          </p>

          <ul
            className="mt-6 text-gray-500 text-sm flex flex-row space-x-3"
            aria-label="skills"
          >
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>

        <footer className="p-6 text-xs uppercase border-t border-slate-100">
          <p>Made with ❤️ by Enrique</p>
        </footer>
      </main>
    </>
  );
}
