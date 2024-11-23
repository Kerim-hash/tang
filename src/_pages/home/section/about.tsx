import { FC } from 'react';
import Image from 'next/image';
import aboutImage from "@/assets/Home/about.webp";
import AccordionBlock from '@/features/Accordion/ui/accordion-info';
import { DictionaryType } from '@/shared/config/i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {

  // Анимации
  const contentVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
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
      },
    },
  };

  // Хук для отслеживания вью
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.2, // Срабатывание анимации, когда 20% элемента видны на экране
  });

  return (
    <section ref={ref} className="container mt-[100px]">
      <motion.div
        className='flex flex-col gap-y-5  md:flex-row items-center justify-between pb-[100px]'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contentVariants}
      >
        <div className="flex-1">
          <div className='max-w-[560px] space-y-[24px]'>
            <motion.h1 className="mb-10 title" variants={contentVariants}>
              {dictionary.family.about.title}
            </motion.h1>
            <motion.p className='desc1 text-gray' variants={contentVariants}>
              {dictionary.family.about.articles[0]}
            </motion.p>
            <motion.p className='desc2' variants={contentVariants}>
              {dictionary.family.about.articles[1]}
            </motion.p>
            <motion.p className='desc2' variants={contentVariants}>
              {dictionary.family.about.articles[2]}
            </motion.p>
          </div>
        </div>

        <motion.div className="flex-1" variants={imageVariants}>
          <Image
            className="mx-auto rounded-md  md:rounded-9xl lg:max-w-[502px] max-h-[502px] object-cover max-w-[100%]"
            src={aboutImage}
            alt="about"
            width={502}
            height={502}
          />
        </motion.div>
      </motion.div>

      <AccordionBlock />
    </section>
  );
};

export default About;
