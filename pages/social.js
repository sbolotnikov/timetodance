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
        firstLine={'Hello social dance fanatics.Welcome to'}
        header={'Social Dance Party '}
        paragraph={"So come on in and try out Best Time to Dance,<br /> We’ll make sure you improve with every chance!<br /> Our private lessons give you the personal touch,<br />So you can perfect your moves so much!"}
        callToAction={'Call Us'}
        buttonLink={'tel:+19179162840'}
      />
    </div>
  );
}

export default social;