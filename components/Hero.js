import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Animation from './Animation';
import sleep from '../utils/functions';
function Hero(props) {
    const [animationState, setAnimationState] = useState(false);
    useEffect(() => {
        document.getElementById(
          'pageHero'
        ).style.backgroundImage = `url(${props.backgroundImage})`;
     
        document.getElementById('pageHero')
        .style.height=`${props.heroSize}vh`
                // .classList.add(`h-[${props.heroSize}vh]`);
        document.getElementById('mainPicHero')
        .style.height=`${props.heroSize}vh`
                // .classList.add(`h-[${props.heroSize}vh]`);

      }, []);
  return (
    <div className='w-full'>
              {animationState && (
        <div className="absolute w-screen h-screen bg-transparent z-[1000]">
       
          <Animation manColor={props.manColor} skinColor={props.skinColor} dress1={props.dress1} dress2={props.dress2}/>
        </div>
      )}
      <div id='topLayerHero' className={`w-full flex portrait:flex-col portrait:overflow-y-visible justify-between items-center relative`}>
        <div id='pageHero' className={`absolute w-full bg-cover`}></div>
        <div className=" widthAlt  ">
          <div
            id="mainPicHero"
            className={` hover:grayscale hover:scale-105 relative cursor-pointer`}
            onClick={(e) => {
              setAnimationState(true);
              sleep(16500).then(() => {
                setAnimationState(false);
              });
            }}
          >
            <Image src={props.mainImg} alt="logo" layout="fill" />
          </div>
        </div>
        <div className=" widthAlt  flex justify-center items-center ">
          <div className="stainglass rounded-lg border-gray-600/60 portrait:w-[95%] mx-auto text-white p-2 m-1">
            {props.firstLine &&<h1 className="text-2xl text-center font-[GoudyBookletter]">{props.firstLine}</h1>}
            {props.header &&<h2 className="fontSizeBig leading-10 text-center font-[Birthstone] laptop:m-4">{props.header}</h2>}
            {props.paragraph &&<p className="font-[GoudyBookletter] fontSizeMiddle text-center my-2" dangerouslySetInnerHTML={{ __html:props.paragraph}} />}
            {props.buttonLink &&<Link className="navbar__link" href={props.buttonLink}>
              <div className="navbar__item w-[95%]">
                <span className="m-3">{props.callToAction}</span>
              </div>
            </Link>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero