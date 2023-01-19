import React from 'react';
import Hero from '../components/Hero';
function social() {
  return (
    <div
      id="windowStart"
      className="flex flex-col w-full h-full justify-start  items-start m-auto overflow-hidden overflow-y-scroll relative"
    >
      <Hero
        backgroundImage={'/images/latindancepartyfloor.jpg'}
        mainImg={'/images/social.png'}
        manColor={'#9E8452'}
        skinColor={'#BFA595'}
        dress1={'yellow'}
        dress2={'brown'}
      />
    </div>
  );
}

export default social;