import { CardInterface } from "@/shared/types/card";
import { FC } from "react";


const StagesCard: FC<CardInterface> = ({ title, desc }) => {
    return (
      <div className="p-6 bg-white rounded-4xl min-h-[200px]">
        <h6 className="text-2xl text-textPrimary font-lato mb-4">{title}</h6>
        <p className="desc2">{desc}</p>
      </div>
    );
  };

export default StagesCard;
