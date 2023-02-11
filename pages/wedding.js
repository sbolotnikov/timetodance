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
      <div id="windowStart">
        {/*  className="windowStart flex flex-col w-full h-full justify-start  items-start m-auto overflow-hidden overflow-y-scroll relative">
        <Hero
         backgroundImage={'/images/backgroundWedding.jpg'}
         mainImg={'/images/wedding.png'}
         manColor={'lightgrey'}
         skinColor={'#BFA595'}
         dress1={'white'}
         dress2={'lightgrey'}
         firstLine={'page devoted to the'}
         header={'Wedding Dance'}
         paragraph={"It's your special day, why not make it grand?<br /> A memorable moment that starts side by side, hand in hand,<br />Showing off your moves with a unique and special dance,<br />With the perfect song and routine for your fairy tale romance."}
         callToAction={'Call Us'}
         buttonLink={'tel:+19179162840'}
         heroSize={'50'}
       /> */}
        <PageIn3D />
      </div>
    </>
  );
}

export default wedding;
