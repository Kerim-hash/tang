import { CardInterface } from "@/shared/types/card";
import React, { FC } from "react";

const CardInfo: FC<CardInterface> = ({ index, title, desc }) => {
    return (
        <div className="w-full sm:w-[calc(33.333%-1rem)]">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-textPrimary font-bold mb-1">
                {index}
            </div>
            <h5 className="subtitle text-xl tracking-tight py-6">{title}</h5>
            <p className="desc2">{desc}</p>
        </div>
    );
}

export default CardInfo;
