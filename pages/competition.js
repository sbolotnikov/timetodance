import React from 'react';
import Hero from '../components/Hero';
function competition() {
  return (
    <div
      id="windowStart"
      className="flex flex-col w-full h-full justify-start  items-start m-auto overflow-hidden overflow-y-scroll relative"
    >
      <Hero
        backgroundImage={'/images/blackpoolballroom.jpg'}
        mainImg={'/images/competitors.png'}
        manColor={'black'}
        skinColor={'#BFA595'}
        dress1={'red'}
        dress2={'black'}
        firstLine={'Hello and welcome to'}
        header={'Competitions Extravaganza'}
        paragraph={"With grace and poise, steps and turns,<br /> It's time to master the dance that yearns.<br /> Our team of pros will guide the way,<br /> To help you dance like a pro today."}
        callToAction={'Call Us'}
        buttonLink={'tel:+19179162840'}
        heroSize={'50'}
      />
    </div>
  );
}

export default competition;