import { DictionaryType } from "@/shared/config/i18n";
import CardInfo from "@/shared/ui/Card/card-info";
import React, { FC } from "react";

const Info: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
  return <div className="container mt-[60px] md:mt-[140px]">
    <div className="flex flex-wrap gap-4 gap-y-10">
      {dictionary.about.info.map((info, index) => {
        return <CardInfo key={`${info.title}+${index}`} index={index + 1} desc={info.desc} title={info.title} />
      })}
    </div>
  </div>
};

export default Info;
