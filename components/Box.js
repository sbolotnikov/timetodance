import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect  } from 'react';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = (props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <div>
    <h2 className="w-full">{props.title}</h2>
    <motion.div
      className="w-full"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {props.children}
    </motion.div>
    </div>
  );
};
export default Box;