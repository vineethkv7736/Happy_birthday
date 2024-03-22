import React, { useEffect, useState } from "react";
import BgParticles from "../../components/BgParticles";
import useSound from "use-sound";
import song from "/birthdaySong.mp3";
import { motion } from "framer-motion";
const Home = () => {
  const [play] = useSound(song);

  useEffect(() => {
    // Function to handle click event
    const handleClick = () => {
      // Play the sound
      play();
      // Remove the click event listener after the sound is played
      document.removeEventListener("click", handleClick);
    };

    // Attach click event listener to the document
    document.addEventListener("click", handleClick);

    // Clean up function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [play]);
  const createLetterMotion = (letter, index) => {
    return (
      <motion.span
        key={index}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 2, 1] }}
        transition={{ duration: 0.5, delay:  index * 0.3 }}
        className="text-sm font-serif opacity-50 mt-2 pl-1"
      >
        {letter}
      </motion.span>
    );
  };
  const createLetterMotion2 = (letter, index) => {
    return (
      <motion.span
        key={index}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 2, 1] }}
        transition={{ duration: 0.5, delay: 3 + index * 0.3 }}
        className="text-sm font-serif opacity-50 mt-2 pl-1"
      >
        {letter}
      </motion.span>
    );
  };
  const text = "Forget the past, look forward to the future";
  const letters = text.split(" ");
  const text2 = "The best things are yet to come";
  const letters2 = text2.split(" ");
  const dl1=5
  const dl2=6

  return (
    <div className="h-screen w-full">
      {/* <BgParticles /> */}
      <div className="flex flex-col justify-center items-center min-h-screen w-full text-white">
        <motion.h1
          className="text-4xl md:text-8xl font-serif mb-1"
          initial={{ opacity: 0, y: -50 }} // Initial opacity and y position
          animate={{ opacity: 1, y: 0 }} // Animation properties
          transition={{ duration: 2 }} // Animation duration
        >
          Happy Birthday
        </motion.h1>
        <motion.h1
          className="text-2xl font-serif"
          initial={{ opacity: 0, x: -100 }} // Initial opacity and y position
          animate={{ opacity: 1, x: 0 }} // Animation properties
          transition={{ duration: 2}} // Animation duration
        >
          @ 15
        </motion.h1>
        <motion.h1
          className="mb-6 text-xs"
          initial={{ opacity: 0, x: 100 }} // Initial opacity and y position
          animate={{ opacity: 1, x: 0 }} // Animation properties
          transition={{ duration: 2 }} // Animation duration
        >
          I Hope You Enjoy Your Special Day To The Fullest
        </motion.h1>

        <img src="/cake2.png" className="w-auto h-52 md:h-96" />
        <div className="flex flex-row ">
          {letters.map((letter, index) => createLetterMotion(letter, index))}
        </div>

        <div className="flex flex-row ">
          {letters2.map((letter, index) => createLetterMotion2(letter, index))}
        </div>
      </div>
        <div className="text-xs text-white opacity-85">
           Best Wishes From Aju ❤️
        </div>
    </div>
  );
};

export default Home;
