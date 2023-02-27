import { useContext, useState } from 'react';
import AppContext from '../appContext';
import Dropdown from './Dropdown';
import Image from 'next/image';
import InfoPopup from './InfoPopup';
import sleep from '../utils/functions';

function SongDetails() {
  const value = useContext(AppContext);
  const [songChoice, setSongChoice] = useState(value.dances[0]);
  const dances = value.dances.map((item) => item.name);
  const [revealAlert, setRevealAlert] = useState(false);
  const [alertStyle, setAlertStyle] = useState({});
  const onReturn = (decision1) => {
    console.log(decision1);
    sleep(1200).then(() => {
      setRevealAlert(false);
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center ">
    {revealAlert && <InfoPopup onReturn={onReturn} styling={alertStyle} />}
      <Dropdown
        dances={dances}
        onChoice={(choice) => {
          setSongChoice(value.dances[choice]);
          console.log(value.dances[choice].songs);
        }}
      />
      <h1 className=' text-7xl font-[Birthstone] text-red-600'>{songChoice.name}</h1>

      {songChoice &&
        songChoice.songs.map((item, index) => {
          return (
            <div
              key={'opt_song_' + index}
              className="w-64 flex flex-row justify-between items-center m-auto"
            >
              <h5 className="w-48 my-auto">{item.title}</h5>
              <div className=" landscape:h-12 landscape:w-12 portrait:h-10 portrait:w-10 relative flex justify-center items-end m-2">
                <Image
                  className="absolute hover:grayscale hover:scale-105 cursor-pointer"
                  src={'/icons/youtube1.svg'}
                  alt="logo"
                  layout="fill"
                  onClick={(e) => {
                    setAlertStyle({
                      variantHead: 'info',
                      heading: item.title,
                      text: `<iframe width="420" height="315"src="https://www.youtube.com/embed/${item.link}"></iframe>`,
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
            </div>
          );
        })}
    </div>
  );
}

export default SongDetails;
