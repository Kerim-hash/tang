import { CardInterface } from "@/shared/types/card";
import { FC } from "react";

const StagesCard: FC<CardInterface> = ({ title, desc, opposite }) => {
  return (
    <div className="p-6 border border-transparent hover:border-primary bg-white rounded-4xl min-h-[200px] hover:transform  transition duration-300 group">
      <h6 className={`${opposite ? "text-xl text-[#4F4F4F]" : "text-2xl text-textPrimary"} font-lato mb-4`}>
        {title}
      </h6>
      <p className={`${opposite ? "text-2xl text-[#3B3B58] font-lato font-semibold transition-all duration-500 group-hover:text-[32px]" : "desc2 text-textSecondary "} leading-22p4  group-hover:text-primary`}>
        {desc}
      </p>
    </div>
  );
};

export default StagesCard;
