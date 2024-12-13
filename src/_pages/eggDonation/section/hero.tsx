'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DictionaryType } from '@/shared/config/i18n';
import heroImage from '@/assets/EggDonation/hero.webp';
import ArrowDown from '@/assets/arrow-down.svg';

const Hero: FC<{ dictionary: DictionaryType, scrollToAbout: () => void }> = ({ dictionary, scrollToAbout}) => {
  return (
    <motion.div
      className="h-screen-minus-74 md:h-screen-minus-127 bg-background"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
      }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between h-full relative">
        {/* Анимация текста */}
        <motion.div
          className="info flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="mb-4 mt-4 md:mt-0 title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {dictionary.eggDonation.hero.title}
          </motion.h1>
          <motion.button
            className="btn btn-primary btn-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {dictionary.common.GetAConsultation}
          </motion.button>
        </motion.div>

        {/* Анимация изображения */}
        <motion.div
          className="flex-1 h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <Image src={heroImage} className="mx-auto h-full object-contain lg:object-fill" alt="Hero Image" />
        </motion.div>

        {/* Анимация стрелки */}
        <motion.div
          className="hidden absolute bottom-14 w-full md:flex justify-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToAbout}
        >
          <Image src={ArrowDown} alt="arrow-down" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
