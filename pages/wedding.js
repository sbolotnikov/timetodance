import React from 'react';
import Hero from '../components/Hero';
import PageIn3D from '../components/PageIn3D';
import  Head  from 'next/head';
function wedding() {
  return (
    <>
      <Head>
        <title>Best Time Dance Studio | The romantic, poetic guide to Wedding Dance NYC and NJ</title>
        <meta
          name="description"
          content="Learn to dance like a pro for your special day with Best Time Dance Studio. Our experienced instructors offer wedding dance classes in NYC and NJ."
        />
        <meta
          name="keywords"
          content="wedding dance classes, dance lessons, first dance, NYC, NJ, Best Time Dance Studio"
        />
         <meta property="og:url" content="https://www.time-dance.com/wedding"/>
        <meta
          property="og:title"
          content="Best Time Dance Studio | Wedding Dance Classes in NYC and NJ"
        />
        <meta
          property="og:description"
          content="Learn to dance like a pro for your special day with Best Time Dance Studio. Our experienced instructors offer wedding dance classes in NYC and NJ."
        />
        <meta
          property="og:image"
          content="/images/weddingfull.jpg"
        />
        <meta name="robots" content="index,follow" />
      </Head>
        <PageIn3D />
    </>
  );
}

export default wedding;
