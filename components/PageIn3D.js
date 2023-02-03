import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Hero from "./Hero";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Box = ({ children }) => {

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
     {children}
    </motion.div>
  );
};

export default function PageIn3D() {
  return (
    <div >
      <Box>
      <Hero
         backgroundImage={'/images/backgroundWedding.jpg'}
         mainImg={'/images/wedding.png'}
         manColor={'lightgrey'}
         skinColor={'#BFA595'}
         dress1={'white'}
         dress2={'lightgrey'}
         firstLine={'page devoted to the'}
         header={'Wedding Dance'}
         paragraph={"It's your special day, why not make it grand?<br /> A memorable moment that starts side by side, hand in hand,<br />Showing off your moves with a unique and special dance,<br />With the perfect song and routine for your fairy tale romance."}
         callToAction={'Call Us'}
         buttonLink={'tel:+19179162840'}
         heroSize={'65'}
       />
      </Box>
      <Box>
       <h1 className="h-64 w-full bg-red-700">box 2</h1>
      </Box>
      <Box>
      <h1 className="h-64 w-full bg-blue-400">box 2</h1>
      </Box>
    </div>
  );
}

