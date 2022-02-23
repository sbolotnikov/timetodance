import Head from 'next/head';

import FrontPage from '../components/frontPage';
import Animation from '../components/Animation';
export default function Home() {

  return (
    <>
      <Head></Head>
      <Animation/>
      <FrontPage />
    </>
  );
}
