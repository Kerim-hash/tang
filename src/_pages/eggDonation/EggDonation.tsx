'use client'

import { useDictionary } from "@/shared/lib/hooks";
import React, { useRef } from "react";
import Hero from "./section/hero";
import About from "./section/about";
import RequestConsultation from "@/shared/ui/RequestConsultation";
import Stages from "./section/stages";

const EggDonation = () => {
  const { dictionary } = useDictionary();
  const aboutSectionRef = useRef<HTMLDivElement>(null);
	const scrollToAbout = () => {
	  if (aboutSectionRef.current) {
		aboutSectionRef.current.scrollIntoView({
		  behavior: 'smooth',
		  block: 'start',
		});
	  }
	};
  return <main>
    <Hero dictionary={dictionary} scrollToAbout={scrollToAbout} />
    <About dictionary={dictionary} ref={aboutSectionRef} />
    <Stages dictionary={dictionary} />
    <div className='container mt-[60px] md:mt-[100px]'>
      <RequestConsultation dictionary={dictionary} />
    </div>
  </main>;
};

export default EggDonation;
