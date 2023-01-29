import Image from 'next/image';
import { useEffect, useRef, useState} from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
function PageIn3D() {

    const boxVariant = {
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      hidden: { opacity: 0, scale: 0 }
    };


// inside component:
const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 })
const elementRef = useRef()

  // Element scroll position
useScrollPosition(
  ({ currPos }) => {
    setElementPosition(currPos)
    console.log(currPos);
  }, [], elementRef
)


useEffect(() => {
   
}, []);
    const Box = ({ num }) => {
    
      const control = useAnimation();
      const [ref, inView] = useInView();
    
      useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
       
      }, [control, inView]);
    
      return (
        <motion.div
          className="box"
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <h1 className='w-2/3 h-[67vh] text-center bg-slate-600'>Box {num} </h1>
        </motion.div>
      );
    };




    
  return (
    <div ref={elementRef}  className='overflow-scroll'>
         <Box  num={1} />
      <Box num={2} />
      <Box num={3} />
    </div>
  );
}

export default PageIn3D;
