import React, { FC } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { DictionaryType } from "@/shared/config/i18n";

const RequestConsultation: FC<{ dictionary: DictionaryType, sticky?: boolean, start?: boolean }> = ({ dictionary, sticky, start }) => {
    return <motion.div
        className={`${sticky ? "sticky" : ""} top-20 self-start py-4 px-6 bg-background min-h-[194px] h-full rounded-4xl ${start ? "text-start": "text-center"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
    >
        <h3 className="text-2xl font-medium text-textPrimary">{dictionary.common.RequestConsultationSupTitle}</h3>
        <button className="btn btn-primary btn-lg mt-10 w-full">{dictionary.common.RequestConsultation}</button>
    </motion.div>
};

export default RequestConsultation;
