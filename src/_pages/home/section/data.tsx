import Accordion from "@/features/Accordion/ui/accordion-data";
import { DictionaryInterface } from "@/shared/types/dictionary";
import React, { FC } from "react";

interface AccordionItem {
  title: string; // Заголовок
  desc: string[]; // Массив строк для описания
}

interface AccordionDataInterface {
  titles: string[]; // Массив заголовков
  data?: AccordionItem[]; // Массив объектов с данными
}

const AccordionData: FC<AccordionDataInterface> = ({ titles, data }) => {
  return (
    <>
      <div className="flex justify-between mb-10">
        {Array.isArray(titles) && titles.length > 0 && titles.map((t, index) => (
          <h5 key={index} className="flex-1 text-2xl text-primary font-lato text-center">{t}</h5>
        ))}
      </div>
      {Array.isArray(data) && data.length > 0 && data.map((item, index) => (
        <div key={index}>
          <p className="desc1 text-center mb-8">{item.title}</p>
          <div className="flex justify-between mb-10 gap-2">
            {Array.isArray(item.desc) && item.desc.length > 0 && item.desc.map((el, idx) => (
              <p key={idx} className="flex-1 desc2">{el}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const Data: FC<DictionaryInterface> = ({ dictionary }) => {
  return (
    <div className="container mt-[100px]">
      {
       Array.isArray(dictionary.family.data) && dictionary.family.data.map((data, index) => {
          return <Accordion title={data.title} key={data.title + index}>
            <AccordionData
              titles={data.content.titles}
              data={data.content.data}
            />
          </Accordion>
        })
      }
    </div>
  );
};

export default Data;
