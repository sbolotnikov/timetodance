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
      text: "So don't wait, don't hesitate<br /> The time is now, the time is right<br /> Come on down to the dance studio<br /> And let's dance through the night!",
    },
    {
      imgLink: '/images/wedding.png',
      imgLink2: '/images/weddingfull.png',
      pageLink: '/wedding',
      pageName: 'Wedding Couples',
      text: "It's your special day, why not make it grand?<br /> A memorable moment that starts side by side, hand in hand,<br />Showing off your moves with a unique and special dance,<br />With the perfect song and routine for your fairy tale romance.",
    }, 
    {
      imgLink: '/images/competitors.png',
      imgLink2: '/images/competitorsfull.png',
      pageLink: '/competition',
      pageName: 'Competitors',
      text: "With grace and poise, steps and turns,<br /> It's time to master the dance that yearns.<br /> Our team of pros will guide the way,<br /> To help you dance like a pro today.",
    },
    {
      imgLink: '/images/social.png',
      imgLink2: '/images/socialfull.png',
      pageLink: '/social',
      pageName: 'Social Dancers',
      text: 'Looking for something fun to do?<br />Best Time to Dance has an offer for you,<br />Come on in to the ballroom floor<br />And you’ll find yourself dancing more and more',
    },
  ];

  const [revealAlert, setRevealAlert] = useState(false);
  const [alertStyle, setAlertStyle] = useState({});
  const onReturn = (decision1) => {
    console.log(decision1);
    sleep(1200).then(() => {
      setRevealAlert(false);
      if (decision1.response == 'Continue') window.location = decision1.link;
    });
  };
  return (
    <div
      id="windowStart"
      className="flex flex-col w-full h-full justify-start  items-start m-auto  overflow-y-scroll  relative"
    >
      {revealAlert && <InfoPopup onReturn={onReturn} styling={alertStyle} />}

      <Hero
        backgroundImage={'/images/backgroundhero.png'}
        mainImg={'/images/main.png'}
        manColor={'#080820'}
        skinColor={'#BFA595'}
        dress1={'#0149A2'}
        dress2={'#001E3C'}
        firstLine={'Welcome to'}
        header={'Best Time To Dance'}
        paragraph={"Unleash your inner dancer <br />And let your spirit take flight <br />The best time to hit the dance floor <br />Is any time, day or night"}
        callToAction={'About Us'}
        buttonLink={'/about'}
        heroSize={'66.67'}
      />
      <div className="w-full departmentsContainer flex justify-between portrait:flex-wrap px-1">
        {departments.map((item, j) => {
          return (
            <div
              key={`depart${j}`}
              className=" landscape:h-full portrait:h-64 portrait:w-[50%] landscape:w-full laptop:mx-6  relative flex justify-center items-end pb-2"
            >
              <Image src={item.imgLink2} alt="logo" layout="fill" />
              <Image
                className="absolute hover:grayscale hover:scale-105 cursor-pointer"
                src={item.imgLink}
                alt="logo"
                layout="fill"
                onClick={(e) => {
                  setAlertStyle({
                    variantHead: 'info',
                    heading: item.pageName,
                    text: item.text,
                    color1: 'success',
                    button1: 'Continue',
                    color2: 'secondary',
                    button2: 'Cancel',
                    link: item.pageLink,
                  });
                  setRevealAlert(true);
                }}
              />
              <Link href={item.pageLink}>
                <div className="navbar__item" style={{ width: '75%',flex:'none' }}>
                  <span
                    className=" navbar__link"
                    style={{
                      backgroundColor: 'transparent',
                      justifyContent: 'center',
                      margin: '.25rem',
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
