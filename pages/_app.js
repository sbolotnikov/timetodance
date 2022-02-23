import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../styles/general.css';
import '../styles/navStyle.css';
import '../styles/rating.css';
import '../styles/animation.css';
import Layout from '../components/layout';
import AppContext from '../appContext';
import dataObject from '../dataObject';
import {motion} from "framer-motion"
// import LazyLoadComponent from 'react-intersection-observer-lazy-load';
function MyApp({ Component, pageProps, router }) {
  return (
    <SessionProvider
      session={pageProps.session}
      options={{
        // Stale Time controls how often the useSession in the client should
        // contact the server to sync the session state. Value in seconds.
        // e.g.
        // * 0  - Disabled (always use cache value)
        // * 60 - Sync session state with server if it's older than 60 seconds
        staleTime: 0,
        // Refetch Interval tells windows / tabs that are signed in to keep sending
        // a keep alive request (which extends the current session expiry) to
        // prevent sessions in open windows from expiring. Value in seconds.
        //
        // Note: If a session has expired when keep alive is triggered, all open
        // windows / tabs will be updated to reflect the user is signed out.
        refetchInterval: 0,
      }}
    >
      <Head>
      <title>Best Time To Dance - Welcome</title>
<meta name="title" content="Best Time To Dance - Welcome" />
<meta name="description" content="Best Time To Dance - Welcome - Independent Ballroom And Latin Dance Instruction with highly skilled and certified Professionals in New York City, Long Island and New Jersey"/>
<meta name="keywords" content="Best, Time, Dance, studio, lesson, Sergey, Bolotnikov, Social, Ballroom, Latin, Pro-Am, ProAm, kids, Dancesport,      competition, championship,  best time to dance"/>
<meta property="og:url" content="https://www.time-dance.com/"/>
<meta property="og:title" content="Best Time To Dance"/>
<meta property="og:description" content="Independent Ballroom And Latin Dance Instruction with highly skilled and certified Professionals in New York City, Long Island and New Jersey"/>
<meta property="og:site_name" content="Best Time To Dance"/>
      </Head>
      <AppContext.Provider value={dataObject}>
      <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
            pageInitial: { opacity: 0, x: -200, y: 0 },
            pageAnimate: { opacity: 1, x: 0, y: 0 },
         }} exit={{ opacity: 0, x: 0, y: -100 }}
      transition={{ duration: 0.5 }}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
          </motion.div>
      </AppContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
