'use client';

import { DictionaryInterface } from "@/shared/types/dictionary";
import RequestConsultation from "@/shared/ui/RequestConsultation";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactUs: FC<DictionaryInterface> = ({ dictionary }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="container mt-[100px]"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Title */}
      <motion.h6
        className="text-2xl text-textPrimary font-bold font-lato mb-4"
        variants={itemVariants}
      >
        {dictionary.becomeSurrogateMother.contactUs.title}
      </motion.h6>

      {/* Description */}
      <motion.p
        className="desc2 w-full sm:w-1/2 mb-6"
        variants={itemVariants}
      >
        {dictionary.becomeSurrogateMother.contactUs.desc}
      </motion.p>

      {/* Button */}
      <motion.button
        className="btn btn-primary w-full sm:w-1/2"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {dictionary.common.GetAConsultation}
      </motion.button>
    </motion.div>
  );
};

export default ContactUs;
