import React, { FC } from "react";
import Info1 from '@/assets/family-info-1.svg';
import Info2 from '@/assets/family-info-2.svg';
import Info3 from '@/assets/family-info-3.svg';
import Info4 from '@/assets/family-info-4.svg';
import Info5 from '@/assets/family-info-5.svg';
import Info6 from '@/assets/family-info-6.svg';
import Image from "next/image";
import FirstBlock from '@/assets/Home/info.webp';
import SecondBlock from '@/assets/Home/info-2.webp';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DictionaryType } from "@/shared/config/i18n";

const Info: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Уменьшите порог для более раннего срабатывания
    });

    const infoData = [
        { src: Info1, text: dictionary.family.info.information[0] },
        { src: Info2, text: dictionary.family.info.information[1] },
        { src: Info3, text: dictionary.family.info.information[2] },
        { src: Info4, text: dictionary.family.info.information[3] },
        { src: Info5, text: dictionary.family.info.information[4] },
        { src: Info6, text: dictionary.family.info.information[5] },
    ];

    // Анимации
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    return (
        <motion.div
            className="container mt-[100px] px-4 sm:px-8"
            ref={sectionRef} // Подключаем ref
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"} // Анимация зависит от inView
            variants={staggerContainer}
        >
            {/* Первый блок */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                <motion.div className="flex-1" variants={fadeInUp}>
                    <Image className="mx-auto object-contain" src={FirstBlock} width={470} alt="info" />
                </motion.div>
                <motion.div className="flex-1 space-y-10" variants={fadeInUp}>
                    <h5 className="title">{dictionary.family.info.infoBlock[0].title}</h5>
                    <hr className="w-full h-2 my-4 bg-primary border-0 rounded md:my-8 max-w-[140px]" />
                    <p className="desc1">{dictionary.family.info.infoBlock[0].desc[0]}</p>
                    <p className="desc1">{dictionary.family.info.infoBlock[0].desc[1]}</p>
                </motion.div>
            </div>

            {/* Второй блок */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 mt-[85px]">
                <motion.div className="flex-1 space-y-10" variants={fadeInUp}>
                    <hr className="w-full h-2 my-4 bg-primary border-0 rounded md:my-8 max-w-[140px]" />
                    <p className="desc1">{dictionary.family.info.infoBlock[1].desc[0]}</p>
                    <p className="desc1">{dictionary.family.info.infoBlock[1].desc[1]}</p>
                </motion.div>
                <motion.div className="flex-1" variants={fadeInUp}>
                    <Image className="mx-auto object-contain" src={SecondBlock} width={470} alt="info" />
                </motion.div>
            </div>

            {/* Карточки */}
            <motion.div
                className="mt-[160px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16"
                variants={staggerContainer}
            >
                {infoData.map((item, index) => (
                    <motion.div
                        key={`${item.text}+${index}`}
                        className="card text-center"
                        variants={fadeInUp}
                    >
                        <Image
                            src={item.src}
                            alt="info"
                            className="mx-auto mb-8 max-w-[105px] max-h-[105px]"
                            width={120}
                            height={120}
                        />
                        <p className="desc1 max-w-[330px] mx-auto">{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Info;
