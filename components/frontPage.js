import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InfoPopup from './InfoPopup';
import Hero from './Hero';
import sleep from '../utils/functions';
export default function FrontPage() {

  const departments = [
    {
      imgLink: '/images/locations.png',
      imgLink2: '/images/locationsfull.png',
      pageLink: '/contacts/0',
      pageName: 'Locations',
      text:"So don't wait, don't hesitate<br /> The time is now, the time is right<br /> Come on down to the dance studio<br /> And let's dance through the night!"
    },
    {
      imgLink: '/images/wedding.png',
      imgLink2: '/images/weddingfull.png',
      pageLink: '/wedding',
      pageName: 'Wedding Couples',
      text:"It's your special day so why not make it grand?<br /> A memorable moment will be made when you hold each other's hand.<br /> Show off your moves with a unique and special dance,<br />We'll help you create the perfect routine for you to romance."
    },
    {
      imgLink: '/images/competitors.png',
      imgLink2: '/images/competitorsfull.png',
      pageLink: '/competition',
      pageName: 'Competitors',
      text:"With grace and poise, steps and turns,<br /> It's time to master the dance that yearns.<br /> Our team of pros will guide the way,<br /> To help you dance like a pro today."
    },
    {
      imgLink: '/images/social.png',
      imgLink2: '/images/socialfull.png',
      pageLink: '/social',
      pageName: 'Social Dancers',
      text:"So come on in and try out Best Time to Dance,<br /> We’ll make sure you improve with every chance!<br /> Our private lessons give you the personal touch,<br />So you can perfect your moves so much!"
    },
  ];
  
  const [revealAlert, setRevealAlert] = useState(false);
  const [alertStyle, setAlertStyle] = useState({});
  const onReturn = (decision1) => {
    console.log(decision1)
    sleep(1200).then(() => {
      setRevealAlert(false);
      if (decision1.response=='Continue') window.location=decision1.link
    });

  };
  return (
    <div id="windowStart" className="flex flex-col w-full h-full justify-start  items-start m-auto overflow-hidden overflow-y-scroll relative">
    {revealAlert && <InfoPopup onReturn={onReturn} styling={alertStyle} />}
      {/* {animationState && (
        <div className="absolute w-screen h-screen bg-transparent z-[1000]">
       
          <Animation manColor={'#080820'} skinColor={'#BFA595'} dress1={'#0149A2'} dress2={'#001E3C'}/>
        </div>
      )}
      <div className=" w-full flex heroSection justify-between items-center relative">
        <div className="absolute w-full h-[66.67vh] bg-cover bg-heroImg"></div>
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
            <Image src={'/images/main.png'} alt="logo" layout="fill" />
          </div>
        </div>
        <div className=" widthAlt  flex justify-center items-center ">
          <div className="  stainglass rounded-lg border-gray-600/60 portrait:w-[95%] mx-auto text-white p-2 m-1">
            <h1
              className=" text-2xl text-center font-[GoudyBookletter] "
            >
              Welcome to
            </h1>
            <h1
              className=" fontSizeBig text-center font-[Birthstone] laptop:m-5"
            >
              Best Time To Dance
            </h1>
            <p className="font-[GoudyBookletter] fontSizeMiddle text-center my-2">
              Unleash your inner dancer <br />
              And let your spirit take flight <br />
              The best time to hit the dance floor <br />
              Is any time, day or night
            </p>
            <Link className="navbar__link" href={'/about'}>
              <div className="navbar__item w-[95%]">
                <span className="m-3">About Us</span>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
      <Hero backgroundImage={'/images/backgroundhero.png'} mainImg={'/images/main.png'} manColor={'#080820'} skinColor={'#BFA595'} dress1={'#0149A2'} dress2={'#001E3C'}/>
      <div className="w-full landscape:h-full departmentsContainer flex xs:flex-col">
        {departments.map((item, j) => {
          return (
            <div key={`depart${j}`} className=" landscape:h-full portrait:h-64 w-full laptop:mx-6  relative flex justify-center items-end pb-2">
              <Image src={item.imgLink2} alt="logo" layout="fill" />
              <Image
                className="absolute hover:grayscale hover:scale-105 cursor-pointer"
                src={item.imgLink}
                alt="logo"
                layout="fill" 
                onClick={(e)=>{
                    setAlertStyle({
                variantHead: 'info',
                heading: item.pageName,
                text: item.text,
                color1: 'success',
                button1: 'Continue',
                color2: 'secondary',
                button2: 'Cancel',
                link:item.pageLink
              });
              setRevealAlert(true);
                  }
                }
              />
              <Link  href={item.pageLink}>
                <div className="navbar__item " style={{ width: '90%' }}>
                  <span
                    className=" navbar__link"
                    style={{
                      backgroundColor: 'transparent',
                      justifyContent: 'center',
                      margin: '.75rem',
                    }}
                  >
                    {item.pageName}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* 
            <h3 className="font-bold text-2xl mt-12 w-[90%]">
              For years, Best Time To Dance has offered dance lessons to
              students of all ages who are looking to become the best that they
              can possibly be. Located in New York, NY, our dance studio was
              founded by dance instructor and competitor Sergey Bolotnikov.
              Sergey is registered with NDCA and holds numerous certificates
              from Imperial Society Teachers of Dance, Fred Astaire, and the
              Russian DanceSport Association.
              <br />
              At Best Time To Dance , the main goal of all of our dance classes
              is to teach our students not only the art of dance, but the
              meaning behind it as well. Our students will receive valuable
              information on how to create strength and quality in their
              dancing, whether they are simply using it as a hobby, take wedding
              dance lessons or are looking to turn it into a career. Our studio
              continuously strives to progress the development and event dance
              preparation of each and every one of our students. We provide
              private dance lessons, ballroom dance lessons, Latin dance classes
              and competitive dancing. Best Time To Dance also had a children's
              program, providing kid's dance classes for your youngsters too!
              <br />
              Best Time To Dance sees dance as a way to express both music and
              emotions through your physical body. This is not only an art, but
              also a sport, requiring strength and intelligence, emotion and
              discipline, passion and soul. If you are ready to begin your
              journey into an activity that can improve all aspects of your life
              while giving you experiences that you will never forget, give us a
              call and sign up for your first dance class today!

            </h3> */}
    </div>
  );
}
