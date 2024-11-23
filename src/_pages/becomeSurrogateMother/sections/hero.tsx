'use client';

import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "@/assets/BecomeSurrogateMother/hero.webp";
import ArrowDown from "@/assets/arrow-down.svg";
import { DictionaryInterface } from "@/shared/types/dictionary";

const Hero: FC<DictionaryInterface> = ({ dictionary }) => {
  return (
    <motion.div
      className="h-screen-minus-74 md:h-screen-minus-127 bg-background relative"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between h-full relative">
        {/* Текстовая часть с анимацией */}
        <motion.div
          className="info flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-4 mt-4 md:mt-0 title">
            {dictionary.becomeSurrogateMother.hero.title}
          </h1>
          <button className="btn btn-primary btn-lg mt-8">
            {dictionary.common.GetAConsultation}
          </button>
        </motion.div>

        {/* Изображение с анимацией */}
        <motion.div
          className="flex-1 h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={heroImage}
            className="mx-auto h-[300px] md:h-full object-contain"
            alt="Hero Image"
            width={500}
            height={600}
          />
        </motion.div>

        {/* Стрелка вниз с анимацией */}
        <motion.div
          className="hidden absolute bottom-14 w-full md:flex justify-center cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Image src={ArrowDown} alt="arrow-down" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
