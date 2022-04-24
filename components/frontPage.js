import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AboutComponent from './about';

export default function FrontPage() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const router = useRouter();
  // useEffect(() => {
  //   const onScroll = e => {
  //     setScrollTop(e.target.documentElement.scrollTop);
  //     setScrolling(e.target.documentElement.scrollTop > scrollTop);
  //     console.log("scrolling")
  //   };
  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [scrollTop]);
  //   useEffect(() => {

  //     window.addEventListener('scroll', onScroll);
  //     return () => window.removeEventListener('scroll', onScroll);
  //   }, [scrollTop]);
  //   function onScroll() {
  //     let currentPosition = 0; // or use document.documentElement.scrollTop;
  //     console.log("wheel", WheelEvent.wheelDelta)
  //     if (currentPosition >0) {
  //       // downscroll code
  //       setScrolling(true);
  //     } else {
  //       // upscroll code
  //       setScrolling(false);
  //     }

  //   }

  //     useEffect(() => {
  //       const onScroll = () => {if (window.pageYOffset>0) setScrollDown(true)}
  //       // clean up code
  //       window.removeEventListener('scroll', onScroll);
  //       window.addEventListener('scroll', onScroll, { passive: true });
  //       return () => window.removeEventListener('scroll', onScroll);
  //   }, []);
  return (
    <>
      <div className="heroSection w-full h-full max-w-[1170px] flex flex-col justify-start  items-start m-auto">
        <h1
          className="w-full text-6xl text-center mt-6  xs:hidden sm:hidden phone:block"
          style={{ fontFamily: 'Lumberjack' }}
        >
          Best Time To Dance
        </h1>
        <div className=" flex xs:flex-col sm:flex-col phone:flex-row justify-center items-start mx-auto">
          <div className="xs:w-52 w-64 h-[13rem] xs:mx-0 mx-auto">
            <div className="relative xs:w-52 w-64 ">
              <img
                className="w-64 absolute top-0 left-0 "
                //style={{ filter: 'drop-shadow(10px 5px 4px #6a640d)' }} #4444dd #FFEC00 #7D8800 shadow change
                src={'/svg/logo.svg'}
                alt="hero"
              />
            </div>
          </div>
          <div className=" inner-wrap_front flex  flex-col justify-center  items-center">
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
              {/* <Link href="/contacts/0">
                <div className="text-[#FFEC00] font-extrabold cursor-pointer">
                  в Челябинске
                </div>
              </Link> */}
            </h3>
            {/* <button
              className="navbar__item"
              onClick={(e) => {
                router.replace('/book');
              }}
              style={{ padding: '5px 0', margin: '10px 0' }}
            >
              Забронировать
            </button> */}
          </div>
        </div>
        {scrolling && <AboutComponent />}
      </div>
      {/* <div className="w-[50vw] ">
        <img
          className="w-full h-[65vh]"
          style={{ filter: 'drop-shadow(10px 5px 4px #4444dd)' }}
          src={'/icons/tree_fence_combo.svg'}
          alt="hero"
        />

        <img className="w-[75vw] h-[65vh]" style={{filter: 'drop-shadow(10px 5px 4px #4444dd)'}} src={"/icons/houses_cloud.svg"}  alt="hero"  />
      </div> */}
    </>
  );
}
