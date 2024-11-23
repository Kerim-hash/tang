'use client';

import { DictionaryInterface } from "@/shared/types/dictionary";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Description: FC<DictionaryInterface> = ({ dictionary }) => {
  // Хук для отслеживания видимости элемента
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Элемент будет анимироваться, когда 20% его будет в поле зрения
  });

  return (
    <motion.div
      className="container flex justify-end mt-[40px] md:mt-[100px]"
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="desc1 md:w-1/2">{dictionary.becomeSurrogateMother.hero.desc}</p>
    </motion.div>
  );
};

export default Description;
