import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimationImage from "@/assets/Home/animation.webp";
import HeaderImage from "@/assets/heart.png";
import Image from "next/image";

const Animation = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается один раз
    threshold: 0.3, // Запускаем анимацию, когда 30% элемента в зоне видимости
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variants
  const headerVariants = {
    hidden: { top: "2.5rem", x: "-50%", scale: 1 },
    visible: {
      top: "40%",
      x: "-50%",
      scale: 1.3,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 1, opacity: 0.8 },
    visible: {
      scale: 1.1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="container relative mx-auto max-h-[640px] overflow-hidden rounded-4xl mt-[100px] px-4 md:px-8"
    >
      {/* Centered Heart Image with top animation */}
      <motion.div
        className="absolute z-10 left-1/2"
        style={{ top: "2.5rem" }}
        initial="hidden"
        animate={controls}
        variants={headerVariants}
      >
        <Image
          src={HeaderImage}
          alt="heart"
          width={100}
          height={100}
          className="w-20 h-20 md:w-auto md:h-auto"
        />
      </motion.div>

      {/* Main Animation Image with scale effect */}
      <motion.div
        className="w-full mx-auto overflow-hidden rounded-4xl"
        initial="hidden"
        animate={controls}
        variants={imageVariants}
      >
        <Image
          className="w-full h-auto object-cover rounded-4xl"
          src={AnimationImage}
          alt="animation"
          height={640}
        />
      </motion.div>
    </div>
  );
};

export default Animation;
