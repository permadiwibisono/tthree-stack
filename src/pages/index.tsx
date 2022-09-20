import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen py-2 flex flex-col items-center justify-center">
      <Head>
        <title>T3 Stack App</title>
        <meta name="description" content="Example T3 Stack App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-white text-3xl font-bold">Hello World</h1>
      </main>
    </div>
  );
};

export default Home;
