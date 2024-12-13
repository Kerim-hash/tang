import { FC } from "react";
import Image from "next/image";
import heroImageWebp from "@/assets/Home/hero.webp";
import ArrowDown from "@/assets/arrow-down.svg";
import { DictionaryType } from "@/shared/config/i18n";
import { motion, Variants } from "framer-motion";

const Hero: FC<{ dictionary: DictionaryType,  scrollToAbout: () => void }> = ({ dictionary, scrollToAbout }) => {
  // Анимации
  const backgroundVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 1.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 1.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 2,
        ease: "easeOut",
      },
    },
  };

  const arrowVariants: Variants = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: 1,
      y: 10,
      transition: {
        repeat: Infinity,
        repeatType: "reverse", // No need for 'as const' with correct typing
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="relative h-screen-minus-74 md:h-screen-minus-127 overflow-hidden">
      {/* Анимируем фон */}
      <motion.div
        className="absolute inset-0 bg-background z-0"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      />

      <motion.div
        className="container flex flex-col md:flex-row items-center justify-between h-full relative z-10"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <div className="info flex-1 text-center md:text-left flex flex-col justify-center md:block">
          {/* Заголовок с эффектом всплытия */}
          <motion.h1
            className="mb-8 title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {dictionary.family.hero.title}
          </motion.h1>
          <motion.p
            className="desc1"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            {dictionary.family.hero.desc}
          </motion.p>
          <motion.button
            className="btn btn-primary btn-lg mt-8"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            {dictionary.common.GetAConsultation}
          </motion.button>
        </div>

        {/* Изображение с анимацией масштаба */}
        <motion.div
          className="flex-1 mt-8 md:mt-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={heroImageWebp}
            quality={100}
            className="rounded-full object-cover mx-auto w-[270px] h-[270px] lg:w-[500px] lg:h-[500px]"
            alt="Hero Image"
            width={469}
            height={469}
          />
        </motion.div>
      </motion.div>

      {/* Стрелка с эффектом пульсации */}
      <motion.div
        className="absolute bottom-14 w-full flex justify-center cursor-pointer z-10"
        variants={arrowVariants}
        initial="initial"
        animate="animate"
        onClick={scrollToAbout}
      >
        <Image src={ArrowDown} alt="arrow-down" />
      </motion.div>
    </div>
  );
};

export default Hero;
