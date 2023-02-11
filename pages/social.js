import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';
function social() {
  return (
    <>
      <Head>
        <title>Best Time Dance Studio | Social Dance Classes in NYC and NJ</title>
        <meta
          name="description"
          content="Dance the night away with Best Time Dance Studio. Our experienced instructors offer social dance classes in NYC and NJ for all levels."
        />
        <meta
          name="keywords"
          content="social dance classes, dance lessons, salsa, tango, ballroom, NYC, NJ, Best Time Dance Studio"
        />
        <meta property="og:url" content="https://www.time-dance.com/social" />
        <meta
          property="og:title"
          content="Best Time Dance Studio | Social Dance Classes in NYC and NJ"
        />
        <meta
          property="og:description"
          content="Dance the night away with Best Time Dance Studio. Our experienced instructors offer social dance classes in NYC and NJ for all levels."
        />
        <meta property="og:image" content="/images/socialfull.jpg" />
        <meta property="og:site_name" content="Best Time To Dance" />
        <meta name="robots" content="index,follow" />
      </Head>
      <div className="windowStart flex flex-col w-full h-full justify-start  items-start m-auto overflow-hidden overflow-y-scroll relative">
        <Hero
          backgroundImage={'/images/latindancepartyfloor.jpg'}
          mainImg={'/images/social.png'}
          manColor={'#9E8452'}
          skinColor={'#BFA595'}
          dress1={'yellow'}
          dress2={'brown'}
          firstLine={'Hello social dance fanatics.Welcome to'}
          header={'Social Dance Party '}
          paragraph={
            'Looking for something fun to do?<br />Best Time to Dance has an offer for you,<br />Come on in to the ballroom floor<br />And you’ll find yourself dancing more and more'
          }
          callToAction={'Call Us'}
          buttonLink={'tel:+19179162840'}
          heroSize={'60'}
        />
      </div>
    </>
  );
}

export default social;
