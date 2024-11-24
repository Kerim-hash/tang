import { CardInterface } from "@/shared/types/card";
import { FC } from "react";

const StagesCard: FC<CardInterface> = ({ title, desc, opposite }) => {
  return (
    <div className="p-6 border border-transparent hover:border-primary bg-white rounded-4xl min-h-[200px] hover:transform  transition-transform duration-300 group">
      <h6 className={`${opposite ? "text-xl" : "text-2xl"}  text-textPrimary font-lato mb-4`}>
        {title}
      </h6>
      <p className={`${opposite ? "text-2xl" : "desc2"}  text-textSecondary transition-transform duration-300  group-hover:text-primary`}>
        {desc}
      </p>
    </div>
  );
};

export default StagesCard;
