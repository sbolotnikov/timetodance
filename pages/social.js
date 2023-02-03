import React from 'react';
import Hero from '../components/Hero';
function social() {
  return (
    <div
      className="windowStart flex flex-col w-full h-full justify-start  items-start m-auto overflow-hidden overflow-y-scroll relative"
    >
      <Hero
        backgroundImage={'/images/latindancepartyfloor.jpg'}
        mainImg={'/images/social.png'}
        manColor={'#9E8452'}
        skinColor={'#BFA595'}
        dress1={'yellow'}
        dress2={'brown'}
        firstLine={'Hello social dance fanatics.Welcome to'}
        header={'Social Dance Party '}
        paragraph={"Looking for something fun to do?<br />Best Time to Dance has an offer for you,<br />Come on in to the ballroom floor<br />And you’ll find yourself dancing more and more"}
        callToAction={'Call Us'}
        buttonLink={'tel:+19179162840'}
        heroSize={'60'}
      />
    </div>
  );
}

export default social;