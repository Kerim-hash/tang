'use client';

import { forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutImage from '@/assets/EggDonation/about.webp';
import { DictionaryType } from "@/shared/config/i18n";

const About = forwardRef<HTMLDivElement, { dictionary: DictionaryType }>(
  ({ dictionary }, ref) => {
  return (
    <motion.div
      className="container mt-[60px] md:mt-[100px]"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
      }}
      ref={ref}
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20">
        {/* Анимация изображения */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image className="rounded-9xl md:min-h-[500px] object-cover" src={AboutImage} height={500} alt="about" />
        </motion.div>

        {/* Анимация текста */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.h2
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {dictionary.eggDonation.about.title}
          </motion.h2>
          <motion.p
            className="desc1 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {dictionary.eggDonation.about.desc}
          </motion.p>
        </motion.div>
      </div>

      {/* Анимация карточки */}
      <motion.div
        className="card rounded-4xl bg-white p-6 pb-8 mt-[60px] md:mt-[100px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.h4
          className="text-xl md:text-[48px]  text-textSecondary font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {dictionary.eggDonation.about.supTitle}
        </motion.h4>
        <motion.p
          className="desc1 text-textSecondary mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {dictionary.eggDonation.about.underTitle}
        </motion.p>

        {/* Анимация списка */}
        <motion.ul
          className="list-disc list-inside"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {dictionary.eggDonation.about.list.map((list) => {
            return (
              <motion.li
                className="desc1 mt-6 font-bold"
                key={list}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {list}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
});

export default About;
