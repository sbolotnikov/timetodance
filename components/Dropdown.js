import { Fragment, useState } from 'react';

function Dropdown(props) {
    const [dropdownValue, setDropdownValue] = useState('');
    const changeStatus=(e)=>{
        e.preventDefault();
        setDropdownValue(e.target.value);
        props.onChoice(e.target.value);
    }
  return (
    <>
         <select className=" m-2 w-72 h-12 cursor-pointer text-xl font-[Birthstone] border-0 outline-0 shadow-xl py-3 px-5 rounded-lg" value={dropdownValue} onChange={changeStatus} >
         {props.dances &&
            props.dances.map((item, index) => {
                return (
                  <option key={'option_' + index} value={index} >
                    {item}
                  </option>
                );
              })}
              
          </select>
      
      </>
  );
}
export default Dropdown;