'use client'

import { useDictionary } from "@/shared/lib/hooks";
import React from "react";
import Hero from "./section/hero";
import About from "./section/about";
import RequestConsultation from "@/shared/ui/RequestConsultation";
import Stages from "./section/stages";

const EggDonation = () => {
  const { dictionary } = useDictionary();
  return <main>
    <Hero dictionary={dictionary} />
    <About dictionary={dictionary} />
    <Stages dictionary={dictionary} />
    <div className='container mt-[60px] md:mt-[100px]'>
      <RequestConsultation dictionary={dictionary} />
    </div>
  </main>;
};

export default EggDonation;
