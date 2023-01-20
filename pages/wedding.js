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
        firstLine={'page devoted to the'}
        header={'Wedding Dance'}
        paragraph={"It's your special day so why not make it grand?<br /> A memorable moment will be made when you hold each other's hand.<br /> Show off your moves with a unique and special dance,<br />We'll help you create the perfect routine for you to romance."}
        callToAction={'Call Us'}
        buttonLink={'tel:+19179162840'}
      />
    </div>
  );
}

export default wedding;
