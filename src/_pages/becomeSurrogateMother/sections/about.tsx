'use client';

import { DictionaryInterface } from "@/shared/types/dictionary";
import React, { FC } from "react";
import AboutImage from '@/assets/BecomeSurrogateMother/about.webp';
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: FC<DictionaryInterface> = ({ dictionary }) => {
  // Хук для отслеживания видимости элемента
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% элемента должно быть в области видимости
  });

  return (
    <motion.div
      className="container mt-[40px] md:mt-[100px]"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row gap-20 items-center">
        {/* Текстовая часть */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="title mb-4">{dictionary.becomeSurrogateMother.about.title}</h2>
          {dictionary.becomeSurrogateMother.about.desc.map((desc) => (
            <motion.p
              key={desc}
              className="desc1 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            >
              {desc}
            </motion.p>
          ))}
        </motion.div>

        {/* Изображение */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image className="rounded-lg md:rounded-9xl mx-auto object-cover" src={AboutImage} alt="about" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
