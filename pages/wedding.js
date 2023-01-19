import React from 'react';
import Hero from '../components/Hero';
function wedding() {
  return (
    <div
      id="windowStart"
      className="flex flex-col w-full h-full justify-start  items-start m-auto overflow-hidden overflow-y-scroll relative"
    >
      <Hero
        backgroundImage={'/images/backgroundWedding.jpg'}
        mainImg={'/images/wedding.png'}
        manColor={'lightgrey'}
        skinColor={'#BFA595'}
        dress1={'white'}
        dress2={'lightgrey'}
      />
    </div>
  );
}

export default wedding;
