import React from 'react';
import Hero from '../components/Hero';
function competition() {
  return (
    <div
      id="windowStart"
      className="flex flex-col w-full h-full justify-start  items-start m-auto overflow-hidden overflow-y-scroll relative"
    >
      <Hero
        backgroundImage={'/images/blackpoolballroom.jpeg'}
        mainImg={'/images/competitors.png'}
        manColor={'black'}
        skinColor={'#BFA595'}
        dress1={'red'}
        dress2={'black'}
      />
    </div>
  );
}

export default competition;