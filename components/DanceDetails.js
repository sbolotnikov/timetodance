import { useContext, useState } from 'react';
import AppContext from '../appContext';
import Dropdown from './Dropdown';
import Image from 'next/image';
import InfoPopup from './InfoPopup';
import sleep from '../utils/functions';

function DanceDetails() {
  const value = useContext(AppContext);
  const [danceChoice, setDanceChoice] = useState(value.dances[0]);
  const dances = value.dances.map((item) => item.name);
  const [revealAlert, setRevealAlert] = useState(false);
  const [alertStyle, setAlertStyle] = useState({});
  const onReturn = (decision1) => {
    console.log(decision1);
    sleep(1200).then(() => {
      setRevealAlert(false);
    });
  };
  function imageLoader({ src}) {
     return `https://i3.ytimg.com/vi/${src}/hqdefault.jpg`;
  }
  return (
    <div className="w-full flex flex-col justify-center items-center ">
    {revealAlert && <InfoPopup onReturn={onReturn} styling={alertStyle} />}
      <Dropdown
        dances={dances}
        onChoice={(choice) => {
          setDanceChoice(value.dances[choice]);
        }}
      />
        <h1 className='relative text-7xl font-[Birthstone] text-red-600'>{danceChoice.name}</h1>
                    <div className=" landscape:h-[30vw] landscape:w-[40vw] portrait:h-[60vw] portrait:w-[80vw] relative flex justify-center items-end m-2">
                <Image
                  className="absolute hover:grayscale hover:scale-105 cursor-pointer"
                  loader={imageLoader}
                  src={danceChoice.videoLink}
                  alt="video thumb nail"
                  layout='fill'
                  onClick={(e) => {
                    setAlertStyle({
                      variantHead: 'info',
                      heading:`${danceChoice.name} example`,
                      text: `<iframe width="420" height="315"src="https://www.youtube.com/embed/${danceChoice.videoLink}"></iframe>`,
                      color1: 'success',
                      button1: 'Exit',
                      color2: 'secondary',
                      button2: '',
                      link: '',
                    });
                    setRevealAlert(true);
                  }}
                />
              </div>
    
      <p className='text-lg font-[GoudyBookletter] m-2'>{danceChoice.short}</p>
      <p className="px-1 py-2 text-sm font-[SegoePrint] text-red-600 border-2 border-solid border-transparent rounded-sm w-full m-1 text-center flex flex-col justify-center items-center overflow-auto PlayenSans]"
                dangerouslySetInnerHTML={{ __html: danceChoice.poem }}
              />
    </div>
  );
}

export default DanceDetails;