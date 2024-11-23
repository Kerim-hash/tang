import { useDictionary } from "@/shared/lib/hooks";
import React, { FC, useState } from "react";
import ArrowDown from "@/assets/arrow-down.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DictionaryType } from "@/shared/config/i18n";

const AccordionStages: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    const arrowVariants = {
        open: { rotate: 180 },
        closed: { rotate: 0 },
    };

    const contentVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: "auto", opacity: 1 },
    };

    return (
        <div className="flex flex-col sm:flex-row flex-wrap gap-6">
            {dictionary.family.programStages.data.map((item, index) => (
                <motion.div
                    key={`${item.title}+${index}`}
                    className="flex flex-col bg-white rounded-4xl p-6 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1rem)]"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E4B1AB] text-white font-bold mb-4 text-lg">
                        {index + 1}
                    </div>

                    <h3 className="font-medium text-xl text-textPrimary mb-4">
                        {item.title}
                    </h3>

                    <div className="flex-1 overflow-hidden">
                        <AnimatePresence initial={false}>
                            {expandedIndex === index ? (
                                <motion.div
                                    variants={contentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <p className="text-textSecondary text-base">{item.desc}</p>
                                </motion.div>
                            ) : (
                                <p className="text-textSecondary text-base line-clamp-4">
                                    {item.desc}
                                </p>
                            )}
                        </AnimatePresence>
                    </div>

                    <div
                        className="mt-4 flex justify-end cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                    >
                        <motion.div
                            variants={arrowVariants}
                            animate={expandedIndex === index ? "open" : "closed"}
                            transition={{ duration: 0.4 }}
                        >
                            <Image src={ArrowDown} alt="Toggle Accordion" />
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default AccordionStages;
