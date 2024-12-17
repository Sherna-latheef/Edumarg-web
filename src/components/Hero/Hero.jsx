import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroPng from "../../assets/hero.jpg";
import Blob from "../../assets/blob.jpg";
import { motion } from "framer-motion";

// Your corrected FadeUp function
export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,  // Now delay is passed correctly
        ease: "easeInOut",
      }
    }
  };
}

const Hero = () => {
  return (
    <section className="bg-light dark:bg-black overflow-hidden relative">
      <Navbar />

      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug font-body"
            >
              Ignite Your <span className="text-secondary">Learning</span>
              &nbsp;Journey with the perfect partner
              <p className="font-body text-lg lg:text-lg whitespace-nowrap">
                Guiding your minds to begin your educational journey
              </p>

            </motion.h1>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* hero image */}
        <div className="flex justify-center items-center relative">

          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt="Hero"
            className="w-[400px] xl:w-[800px] relative z-10 drop-shadow" />
          {/*
          <img
            src={Blob}
            alt="Blob"
            className="absolute bottom-0 left-0 w-[600px] md:w-[1300px] z-0 hidden md:block"
          /> * */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
