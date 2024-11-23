'use client';

import React, { FC } from "react";
import { DictionaryInterface } from "@/shared/types/dictionary";
import CardInfo from "@/shared/ui/Card/card-info";
import StagesImage from '@/assets/BecomeSurrogateMother/stages.webp';
import Image from "next/image";
import { StagesCard } from "@/shared/ui";
import { CardInterface } from "@/shared/types/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Reusable MotionDiv component for animations
const MotionDiv: FC<{
  children: React.ReactNode;
  index: number;
  initialProps: any;
  animateProps: any;
  transitionProps?: any;
}> = ({ children, index, initialProps, animateProps, transitionProps }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация сработает только один раз
    threshold: 0.2, // 20% компонента должно быть видно, чтобы анимация началась
  });

  return (
    <motion.div
      ref={ref}
      initial={initialProps}
      animate={inView ? animateProps : initialProps}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 * index, ...transitionProps }}
    >
      {children}
    </motion.div>
  );
};

const Stages: FC<DictionaryInterface> = ({ dictionary }) => {
  return (
    <motion.div className="container mt-[100px]">
      {/* Заголовок */}
      <MotionDiv
        index={1}
        initialProps={{ opacity: 0, y: 30 }}
        animateProps={{ opacity: 1, y: 0 }}
      >
        <h2 className="title">{dictionary.becomeSurrogateMother.stages.title}</h2>
      </MotionDiv>

      {/* Описание */}
      <MotionDiv
        index={2}
        initialProps={{ opacity: 0, y: 20 }}
        animateProps={{ opacity: 1, y: 0 }}
      >
        <p className="desc1 max-w-1/2">{dictionary.becomeSurrogateMother.stages.desc}</p>
      </MotionDiv>

      {/* Карточки */}
      <div className="grid gap-4 gap-y-10 mt-[60px] md:mt-[140px]">
        {/* Первые 6 карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dictionary.becomeSurrogateMother.stages.stagesProgram.slice(0, 6).map((info: CardInterface, index: number) => (
            <MotionDiv
              key={`${info.title}+${index}`}
              index={index + 1}
              initialProps={{ opacity: 0, y: 30 }}
              animateProps={{ opacity: 1, y: 0 }}
            >
              <StagesCard desc={info.desc} title={info.title} />
            </MotionDiv>
          ))}
        </div>

        {/* Следующие 2 карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dictionary.becomeSurrogateMother.stages.stagesProgram.slice(6, 8).map((info: CardInterface, index: number) => (
            <StagesCard key={index} desc={info.desc} title={info.title} />
          ))}
        </div>
      </div>

      {/* Изображение и описание */}
      <div className="flex flex-col sm:flex-row gap-5 mt-[100px]">

        <Image className="rounded-4xl mx-auto" src={StagesImage} width={550} alt="become-surrogate-mother" />

        <div className="flex flex-col">
          <h2 className="title mb-10">{dictionary.becomeSurrogateMother.stages.supTitle}</h2>
          <p className="desc2">{dictionary.becomeSurrogateMother.stages.desc1}</p>
        </div>
      </div>

      {/* Список этапов */}
      <div className="flex flex-wrap gap-4 gap-y-10 mt-[140px]">
        {dictionary.becomeSurrogateMother.stages.stagesList.map((info, index) => (
            <CardInfo key={index} index={index + 1} desc={info.desc} title={info.title} />
        ))}
      </div>
    </motion.div>
  );
};

export default Stages;
