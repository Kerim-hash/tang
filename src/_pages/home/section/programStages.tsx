import AccordionStages from "@/features/Accordion/ui/accordion-stages";
import { DictionaryType } from "@/shared/config/i18n";
import React, { FC } from "react";

const ProgramStages: FC<{dictionary: DictionaryType}> = ({dictionary}) => {

  return <div className="container mt-[60px] md:mt-[100px]">
        <div className="title mb-5 md:mb-10">{dictionary.family.programStages.title}</div>
        <AccordionStages dictionary={dictionary} />
  </div>;
};

export default ProgramStages;
