"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#bd7a00] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#de9000] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Quality Assurance for your Projects
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              {" "}
              Šiaurys{" "}
            </span>
            Bėrontas
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-orange-100 my-5 max-w-[600px]"
        >
          I&apos;m a Quality Assurance Engineer with experience in writing manual & automatic tests, Continuous Integration and dogfooding big Projects like the Unity Editor.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Contact Me!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/siauryss.jpg"
          alt="work icons"
          height={650}
          width={650}
          style={{
          opacity: 1,
          borderRadius: '50px',
          maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 70%)'
  }}
/>

      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
