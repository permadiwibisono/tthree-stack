import type { NextPage } from 'next';
import Head from 'next/head';
import HomeScreen from '@/client/screens/home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Grocery List</title>
        <meta name="description" content="Visit www.mosano.eu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen />
    </>
  );
};

export default Home;
