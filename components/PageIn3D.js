import BoxClickable from './BoxClickable';
import DanceDetails from './DanceDetails';
import Hero from './Hero';
import SongDetails from './SongDetails';

export default function PageIn3D() {
  return (
    <div className="windowStart flex flex-col w-full h-full justify-start  items-start m-auto  overflow-y-scroll  relative">
      <Hero
        backgroundImage={'/images/backgroundWedding.jpg'}
        mainImg={'/images/wedding.png'}
        manColor={'lightgrey'}
        skinColor={'#BFA595'}
        dress1={'white'}
        dress2={'lightgrey'}
        firstLine={'page devoted to the'}
        header={'Wedding Dance'}
        paragraph={
          "It's your special day, why not make it grand?<br /> A memorable moment that starts side by side, hand in hand,<br />Showing off your moves with a unique and special dance,<br />With the perfect song and routine for your fairy tale romance."
        }
        callToAction={'Call Us'}
        buttonLink={'tel:+19179162840'}
        heroSize={'65'}
      />
      {/* <ButtonShoe/> */}
      <BoxClickable
        title="Recomended Dances"
        activeBox={false}
        className="overflow-hidden"
      >
        <div className=" w-full  overflow-auto">
          <DanceDetails />
        </div>
      </BoxClickable>
      <BoxClickable title="Recomened Songs" activeBox={false}>
          <SongDetails />
      </BoxClickable>
    </div>
  );
}
