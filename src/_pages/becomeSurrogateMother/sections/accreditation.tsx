import { DictionaryInterface } from "@/shared/types/dictionary";
import React, { FC } from "react";

const Accreditation: FC<DictionaryInterface> = ({dictionary}) => {
  return <div className="container mt-[100px]">
        <div className="flex flex-col md:flex-row  gap-5 items-center justify-between">
            <div className="flex-1">
                <h5 className="text-3xl text-[#171717] font-lato font-bold">{dictionary.becomeSurrogateMother.accreditation.title}</h5>
            </div>
            <div className="flex-1">
                <p className="desc2">{dictionary.becomeSurrogateMother.accreditation.desc}</p>
            </div>
        </div>
  </div>;
};

export default Accreditation;
