import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../styles/general.css';
import '../styles/navStyle.css';
import '../styles/rating.css';
import '../styles/animation.css';
import '../styles/dropdown.css';
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
<link rel="shortcut icon" href="/favicon.ico"></link>
<link rel="manifest" href="manifest.json" />
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
