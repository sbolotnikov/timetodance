import GetLocation from '../../components/getLocation';
import { useState, useContext } from 'react';
import AppContext from '../../appContext';

function contacts(props) {
  const [location, setLocation] = useState(props.id);
  const value = useContext(AppContext);
  let locations = value.locations;
  return (
    <div>
      <h1 className="text-center p-6 font-extrabold text-darkAccent uppercase">Where is it?</h1>
      {/* Где находится? */}
      <GetLocation
            loc={location}
            list={locations}
            onChange={(loc) => {
              setLocation(loc);
            }}
          />
      <h2 className=" font-extrabold m-4 text-center text-5xl text-brightAccent font-[GoudyBookletter]" >
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
        <div className="rounded bg-yellow1 text-myBlack p-3 m-2">
          <p
            className="m-4"
            dangerouslySetInnerHTML={{ __html: locations[location].address }}
          ></p>
          <p>
            <span className=" text-lg font-black flex flex-row">
              <svg  className="fill-brightAccent w-5 mr-2"   viewBox="0 0 28 30" alt="menu call">
                <path
                  id="path77"
                  d="M23.6541 28.8036C23.585 28.6719 20.1432 24.9872 19.7125 24.5133C19.2449 23.9988 17.6009 22.285 17.3286 21.922C17.0139 22.0631 16.6419 22.6852 15.3917 21.8978C14.6888 21.4552 13.7093 20.6443 13.0943 20.081C12.7336 19.7507 10.9025 17.7438 10.45 17.2489C10.2302 17.0085 10.0206 16.7509 9.79265 16.5276C9.52823 16.2686 9.35677 16.0777 9.12418 15.8186C8.43281 15.0483 7.88744 14.4676 7.38445 13.4078C6.70648 11.9791 7.36634 11.5723 7.4648 11.2758C7.0349 10.8925 3.95928 7.51349 3.40155 6.90183L0.95227 4.27832C0.568645 4.57321 0.1898 5.92234 0.0904628 6.61764C-0.517768 10.8733 2.05768 15.3127 4.32384 18.4104C4.89114 19.1859 5.82657 20.3562 6.46632 21.0474C6.60268 21.1947 6.7089 21.3335 6.84143 21.4864C7.28928 22.003 8.2959 23.0201 8.7941 23.5238C9.04671 23.7792 9.33943 24.0456 9.61383 24.2919C12.1785 26.5954 15.0759 28.8319 18.5794 29.5773C19.4741 29.7677 20.4573 29.8461 21.3988 29.7261C22.1763 29.6269 23.2897 29.281 23.6541 28.8036V28.8036Z"
                />
                <path
                  id="path79"
                  d="M1.46124 3.76221C1.70165 3.95877 6.61058 9.30966 7.1545 9.90248C7.39179 10.1611 7.70088 10.5537 7.9724 10.7716C8.09161 10.7112 9.89021 8.84306 9.98412 8.65863C10.4181 7.80588 9.6657 7.23749 9.25702 6.79313L7.25039 4.6303C6.80429 4.14106 6.37991 3.68119 5.93342 3.19094L4.57892 1.75411C4.17998 1.42581 3.58371 1.45625 3.16538 1.95532C2.92433 2.24291 1.54694 3.54698 1.46124 3.76221V3.76221Z"
                />
                <path
                  id="path81"
                  d="M17.8008 21.4174L19.399 23.135C19.9245 23.7156 20.4731 24.2775 20.9977 24.8585C21.3099 25.2044 24.0694 28.2252 24.2034 28.286C24.3934 28.0468 24.6543 27.8487 24.8573 27.6043C25.5157 26.8112 26.7812 26.0956 26.1284 25.046C26.0296 24.8871 25.0444 23.8448 24.8369 23.6164C24.415 23.1521 23.9208 22.6469 23.5056 22.1913C23.0716 21.7151 22.6527 21.2269 22.2067 20.769C21.942 20.4972 20.9871 19.4566 20.8555 19.3657C20.5616 19.1627 20.1572 19.147 19.8408 19.3218C19.5818 19.4649 17.8435 21.3059 17.8008 21.4174V21.4174Z"
                />
                <path
                  id="path83"
                  d="M17.4472 0.0167712C17.0568 0.0407794 16.5094 0.0857345 16.156 0.185415C15.772 0.293664 15.5848 0.625116 15.6108 1.13149C15.6737 2.35897 17.035 1.94082 17.4921 1.91851C22.0273 1.69658 25.6367 5.44313 25.5287 10.1624C25.5156 10.7364 25.3554 11.0009 25.6477 11.4311C25.8377 11.7109 26.3263 11.8242 26.751 11.6656C27.681 11.3183 27.3389 8.76399 27.1802 7.98164C26.8269 6.23999 26.1687 4.95523 25.3387 3.82193C23.9229 1.88855 21.116 -0.209143 17.4472 0.0167712V0.0167712Z"
                />
                <path
                  id="path85"
                  d="M15.9367 4.38439C15.3215 4.43215 14.4786 4.4402 14.2476 4.96439C14.1272 5.23782 14.1445 5.72555 14.2709 5.97684C14.3952 6.22413 14.6761 6.35451 14.9909 6.41551C15.2351 6.46276 15.6591 6.35681 15.9358 6.33204C16.8527 6.24992 18.1234 6.29683 18.864 6.7731C19.5175 7.19346 20.5924 8.43349 20.9908 9.28227C21.4364 10.2313 21.4831 11.2429 21.3773 12.3116C21.3317 12.7732 21.2612 12.9267 21.5351 13.2547C21.854 13.6364 22.7601 13.709 23.0471 13.0082C23.294 12.4053 23.2909 11.5971 23.2323 10.9033C23.11 9.45618 22.6564 8.35501 22.0233 7.41987C20.5802 5.28788 18.5857 4.17866 15.9367 4.38439V4.38439Z"
                />
              </svg>
              {locations[location].telephone}
            </span>
          </p>
          <p>
            <span className="text-brightAccent text-xl font-semibold mr-2">@</span>
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
