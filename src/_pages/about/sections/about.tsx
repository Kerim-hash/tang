'use client';

import React, { FC, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DictionaryType } from '@/shared/config/i18n';
import AboutTang from '@/assets/About/about.webp';

const About: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
  // Используем хук useInView для определения, когда элемент попадает в область видимости
  const { ref, inView } = useInView({
    triggerOnce: true, // Срабатывает только один раз
    threshold: 0.2, // Доля видимой части элемента для активации
  });

  return (
    <motion.div
      ref={ref} // Привязываем реф к контейнеру
      className="container mt-[60px] md:mt-[100px]"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'} // Анимация срабатывает только при inView
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
      }}
    >
      <div className="flex flex-col md:flex-row items-center">
        {/* Анимация изображения */}
        <motion.div
          className="flex-1"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
        >
          <Image quality={100} src={AboutTang} alt="about" />
        </motion.div>

        {/* Анимация текста */}
        <motion.div
          className="flex-1 mt-8 md:mt-0 md:ml-[100px]"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
          }}
        >
          <motion.h2
            className="title mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
            }}
          >
            {dictionary.about.about.title}
          </motion.h2>
          <motion.p
            className="desc1 max-w-[470px] tracking-wide"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.7 } },
            }}
          >
            {dictionary.about.about.desc}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
