import React from 'react';
import Hero from '../components/Hero';
function competition() {
  return (
    <>
      {/* <Head>
        <title>Best Time Dance Studio | Competitive Ballroom & Latin Dance Classes in NYC and NJ</title>
        <meta
          name="description"
          content="Take your ballroom and Latin dancing to the next level with Best Time Dance Studio. Our experienced instructors offer competitive dance classes in NYC and NJ."
        />
        <meta
          name="keywords"
          content="competitive dance classes, ballroom dance, Latin dance, NYC, NJ, Best Time Dance Studio"
        />
        <meta
          property="og:title"
          content="Best Time Dance Studio | Competitive Ballroom & Latin Dance Classes in NYC and NJ"
        />
        <meta
          property="og:description"
          content="Take your ballroom and Latin dancing to the next level with Best Time Dance Studio. Our experienced instructors offer competitive dance classes in NYC and NJ."
        />
        <meta
          property="og:image"
          content="/images/competitorsfull.jpg"
        />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:url"
          content="https://www.time-dance.com/competition"
        />
        <meta property="og:site_name" content="Best Time To Dance" />
      </Head> */}

      <div className=" flex flex-col w-full h-full justify-start  items-start m-auto overflow-hidden overflow-y-scroll relative">
        <Hero
          backgroundImage={'/images/blackpoolballroom.jpg'}
          mainImg={'/images/competitors.png'}
          manColor={'black'}
          skinColor={'#BFA595'}
          dress1={'red'}
          dress2={'black'}
          firstLine={'Hello and welcome to'}
          header={'Competitions Extravaganza'}
          paragraph={
            "With grace and poise, steps and turns,<br /> It's time to master the dance that yearns.<br /> Our team of pros will guide the way,<br /> To help you dance like a pro today."
          }
          callToAction={'Call Us'}
          buttonLink={'tel:+19179162840'}
          heroSize={'60'}
        />
      </div>
    </>
  );
}

export default competition;
