'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { DictionaryType } from '@/shared/config/i18n';
import director from '@/assets/director.png';
import tang from '@/assets/tang.png';

const Director: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
  // Хук для определения видимости секции
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className="bg-white py-[80px] mt-[100px] relative" // added relative position to prevent layout shifts
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
      }}
    >
      <div className="container relative">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center">
          {/* Текстовая часть */}
          <motion.div
            className="flex-1 max-w-1/2"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
            }}
          >
            <div className="desc2 italic tracking-tight">
              {dictionary.about.director.supTitle}
            </div>
            <div className="space-y-5 mt-6">
              {dictionary.about.director.desc.map((desc) => (
                <motion.p
                  key={desc}
                  className="desc2 indent-8 italic tracking-tight"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  {desc}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Изображение и подпись */}
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
            }}
          >
            <Image
              className="rounded-4xl mx-auto max-h-[470px] max-w-[560px] object-scale-down"
              src={director}
              alt="director"
              height={470}
            />
            <div className="ml-0 md:ml-10">
              <h5 className="text-primary text-3xl font-bold mt-8">
                {dictionary.about.director.name}
              </h5>
              <i className="desc2">{dictionary.about.director.position}</i>
            </div>
          </motion.div>
        </div>

        {/* Дополнительное изображение в углу */}
        <motion.div
          className="absolute bottom-[-80px] md:bottom-0 right-[20px]"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 } },
          }}
        >
          <Image src={tang} alt="tang" width={82} height={82} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Director;
