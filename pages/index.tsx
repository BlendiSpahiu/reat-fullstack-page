import type { NextPage } from 'next';
import Head from 'next/head';
import { Posts } from '../components/Posts/Posts';
import { AppLayout } from '../components/templates/AppLayout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout content={<Posts />} />
    </div>
  );
};

export default Home;
