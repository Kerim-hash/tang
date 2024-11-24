import { CardInterface } from "@/shared/types/card";
import { DictionaryInterface } from "@/shared/types/dictionary";
import { StagesCard } from "@/shared/ui";
import React, { FC } from "react";

const GeneralInformation: FC<DictionaryInterface> = ({ dictionary }) => {
    return <div className="container mt-[100px]" id="section1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dictionary.becomeSurrogateMother.generalInformation.map((info: CardInterface, index: number) => (
                <StagesCard key={index} desc={info.desc} title={info.title} opposite />
            ))}
        </div>
    </div>;
};

export default GeneralInformation;
