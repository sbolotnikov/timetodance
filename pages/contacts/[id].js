import GetLocation from '../../components/getLocation';
import { useState, useContext } from 'react';
import AppContext from '../../appContext';

function contacts(props) {
  const [location, setLocation] = useState(props.id);
  const value = useContext(AppContext);
  let locations = value.locations;
  return (
    <div>
      <h1 className="text-center p-6 font-extrabold text-mainMaroon uppercase">Where is it?</h1>
      {/* Где находится? */}
      <GetLocation
            loc={location}
            list={locations}
            onChange={(loc) => {
              setLocation(loc);
            }}
          />
      <h2 className=" font-extrabold m-4 text-center text-5xl text-mainMaroon font-[GoudyBookletter]" >
        {locations[location].name}
      </h2>
      <div className="containerContacts">
        <div className="flex flex-col justify-center items-center">
          <div className="m-auto mt-2">
          <iframe
              src={locations[location].link}
              width="auto"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              aria-hidden="false"
              tabIndex="0"
            />
          </div>

          <h2 className="hideOnSmall text-left mt-8 pt-8 border-t-2 border-gray-700">
           
          </h2>
        </div>
        <div className="borderleft">
        <div className="rounded bg-popup/60 p-3 m-2">
          <p
            className="m-4"
            dangerouslySetInnerHTML={{ __html: locations[location].address }}
          ></p>
          <p>
            <span className="text-white text-lg font-black flex flex-row">
              <img
                className="object-fill w-5 mr-2"
                src={'/icons/call.svg'}
                alt="menu call"
              />
              {locations[location].telephone}
            </span>
          </p>
          <p>
            <span className="text-white text-xl font-black mr-2">@</span>
            {locations[location].email}
          </p>
          <p
            className="m-4 "
            dangerouslySetInnerHTML={{
              __html: locations[location].address_desc,
            }}
          ></p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default contacts;
export function getServerSideProps(context) {
  return { props: { id: context.query.id } };
}
