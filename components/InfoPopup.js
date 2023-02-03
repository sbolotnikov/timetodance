import { useEffect, useState } from 'react';
import PopupSign from './PopupSign';
import { AnimatePresence, motion } from 'framer-motion';
export default function InfoPopup(props) {
  // main popup alert component
  const [isVisible, setIsVisible] = useState(true);
  const el = document.querySelector('.windowStart');
  function StopScroll() {
    // prevent scrolling
    var x = 0;
    var y = el.scrollTop;
    el.onscroll = function () {
      el.scrollTo(x, y);
    };
  }
  function AllowScroll() {
    // when done release scroll
    el.onscroll = function () {};
  }
  useEffect(() => {
    // setup buttons style on load
    StopScroll();
  }, []);
  return (
    <div
      className="absolute left-0 h-[100vh] w-[100vw] flex justify-center items-center z-[1001] backdrop-blur-sm"
      style={{ top: el.scrollTop }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x:-600 }}
            transition={{
              ease: 'easeOut',
              duration: 1,
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            animate={{
              opacity: [0, 1, 1, 1, 1],
              rotateX: ['90deg', '89deg', '89deg', '0deg', '0deg'],
              x: ['-100vw', '0vw', '0vw', '0vw', '0vw'],
            }}
            exit={{ opacity: [1, 1, 1, 1, 0],rotateX: ['0deg', '0deg', '89deg', '89deg', '90deg'], x: [ '0vw', '0vw', '0vw', '0vw', '-100vw'] }}
            className="m-auto  max-w-[600px] max-h-[90%]  border-4 border-brightAccent/75 overflow-hidden  rounded-lg w-[97%]  flex flex-col content-evenly relative text-white"
          >
            <PopupSign text={''} />
            <div className="absolute w-full h-full flex flex-col justify-evenly items-center xs:text-sm xs:leading-4">
              <label className="px-1 py-2 border-2 border-solid border-transparent rounded-sm w-[80%] m-1 text-center font-[GoudyBookletter]   ">
                {props.styling.heading}
              </label>
              <h5
                className="px-1 py-2 border-2 border-solid border-transparent rounded-sm w-full m-1 text-center"
                dangerouslySetInnerHTML={{ __html: props.styling.text }}
              />
              <div className="w-full flex flex-row">
                <button
                  className="px-1 py-2 border-2 border-solid border-transparent rounded-sm w-[48%] m-1 text-center "
                  onClick={(e) => {
                    AllowScroll();
                    setIsVisible(false);
                    props.onReturn({
                      response: props.styling.button1,
                      link: props.styling.link,
                    });
                  }}
                >
                  {props.styling.button1}
                </button>
                <button
                  className="px-1 py-2 border-2 border-solid border-transparent rounded-sm w-[48%] m-1 text-center"
                  onClick={(e) => {
                    AllowScroll();
                    setIsVisible(false);
                    props.onReturn({
                      response: props.styling.button2,
                      link: '',
                    });
                  }}
                >
                  {props.styling.button2}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
