import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 0 }
};

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
      <h1>Box {num} </h1>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="App">
      <box>
      <motion.div
      className="box"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.4], x: 100 }}
      transition={{ duration: 0.3 }}
    >
      <h1>hover</h1>
    </motion.div>
  
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      </box>
      <Box num={1} />
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <Box num={2} />
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <h1>space</h1>
      <Box num={3} />
    </div>
  );
}