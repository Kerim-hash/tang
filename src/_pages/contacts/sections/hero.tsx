'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DictionaryType } from '@/shared/config/i18n';
import ContactsImage from "@/assets/contacts.jpg";

const Hero: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
  return (
    <header className="relative h-screen-minus-127 bg-background overflow-hidden">
      <div className="container flex flex-col lg:flex-row items-center justify-between h-full relative">
        {/* Левая колонка с текстом */}
        <motion.div
          className="flex-1 flex flex-col gap-3 md:gap-6 justify-center md:justify-normal lg:w-1/2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } },
          }}
        >
          <motion.h1
            className="title text-6xl lg:text-8xl mb-10 lg:mb-20"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {dictionary.contacts.title}
          </motion.h1>
          <motion.a
            href="tel:+996556668989"
            className="text-textPrimary text-4xl lg:text-5xl font-oxygen mb-6"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            +996 556 668 989
          </motion.a>
          <motion.a
            href="mailto:tang.ivf@gmail.com"
            className="text-textPrimary text-4xl lg:text-5xl font-oxygen tracking-tight"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            tang.ivf@gmail.com
          </motion.a>
        </motion.div>

        {/* Правая колонка с изображением */}
        <motion.div
          className="md:absolute md:w-1/2 right-0 top-0 flex-1 h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={ContactsImage}
            className="mx-auto w-full h-full object-cover"
            alt="Hero Image"
            width={630}
            height={575}
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
