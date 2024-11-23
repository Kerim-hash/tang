import React, { FC } from "react";
import { DictionaryType } from "@/shared/config/i18n";
import CardInfo from "@/shared/ui/Card/card-info";

const Stages: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
    return <div className="bg-white mt-[100px]">
        <div className="container !py-10">
            <div className="title mb-10">{dictionary.eggDonation.stages.title}</div>
            <div className="flex flex-wrap gap-4 gap-y-10">
                {dictionary.about.info.map((info, index) => {
                    return <CardInfo key={`${info.title}+${index}`} index={index + 1} desc={info.desc} title={info.title} />
                })}
            </div>
        </div>
    </div>;
};

export default Stages;
