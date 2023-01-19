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
      }, []);
  return (
    <div className='w-full'>
              {animationState && (
        <div className="absolute w-screen h-screen bg-transparent z-[1000]">
       
          <Animation manColor={props.manColor} skinColor={props.skinColor} dress1={props.dress1} dress2={props.dress2}/>
        </div>
      )}
      <div className=" w-full flex heroSection justify-between items-center relative">
        <div id='pageHero' className="absolute w-full h-[66.67vh] bg-cover"></div>
        <div className=" widthAlt  ">
          <div
            className=" h-[66.67vh] hover:grayscale hover:scale-105 relative cursor-pointer"
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
            <h1 className="text-2xl text-center font-[GoudyBookletter]">Welcome to</h1>
            <h1 className="fontSizeBig text-center font-[Birthstone] laptop:m-5">Best Time To Dance</h1>
            <p className="font-[GoudyBookletter] fontSizeMiddle text-center my-2">Unleash your inner dancer <br />And let your spirit take flight <br />The best time to hit the dance floor <br />Is any time, day or night</p>
            <Link className="navbar__link" href={'/about'}>
              <div className="navbar__item w-[95%]">
                <span className="m-3">About Us</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero