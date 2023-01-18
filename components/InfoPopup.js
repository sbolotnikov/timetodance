import { useEffect, useState } from 'react';
import PopupSign from './PopupSign';

export default function InfoPopup(props) {
  // main popup alert component
  const el = document.querySelector('#windowStart');
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
      className="absolute left-0 h-[100vh] w-[100vw] flex justify-center items-center bg-slate-500/70 z-[1001] backdrop-blur-md"
      style={{ top: el.scrollTop }}
    >
      <div className="m-auto  max-w-[600px] bg-gray-700 border-2 border-solid border-gray-400 rounded-md w-[97%]  flex flex-col content-evenly relative">
        <PopupSign text={''} />
        <div className="absolute w-full h-full flex flex-col justify-evenly items-center xs:text-sm xs:leading-4">
          <label className="px-1 py-2 border-2 border-solid border-transparent rounded-sm w-[80%] m-1 text-center font-[GoudyBookletter] text-white  ">
            {props.styling.heading}
          </label>
          <h5
            className="px-1 py-2 border-2 border-solid border-transparent rounded-sm w-full m-1 text-center"
            dangerouslySetInnerHTML={{ __html: props.styling.text }}
          />
          <div className="w-full flex flex-row">
            <button
              className="px-1 py-2 border-2 border-solid border-transparent rounded-sm w-[48%] m-1 text-center text-white"
              onClick={(e) => {
                AllowScroll();
                props.onReturn(
                  props.styling.button1,
                  props.styling.inputField
                    ? document.querySelector('#inputField').value
                    : null
                );
              }}
            >
              {props.styling.button1}
            </button>
            <button
              className="px-1 py-2 border-2 border-solid border-transparent rounded-sm w-[48%] m-1 text-center text-white"
              onClick={(e) => {
                AllowScroll();
                props.onReturn(props.styling.button2);
              }}
            >
              {props.styling.button2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
