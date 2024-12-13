'use client'

import { useDictionary } from "@/shared/lib/hooks";
import React, { useRef } from "react";
import Hero from "./sections/hero";
import Description from "./sections/description";
import RequestConsultation from "@/shared/ui/RequestConsultation";
import About from "./sections/about";
import Stages from "./sections/stages";
import ContactUs from "./sections/contactUs";
import Accreditation from "./sections/accreditation";
import Licenses from "@/shared/ui/licenses";
import License from "./sections/license";
import GeneralInformation from "./sections/generalInformation";
import Anchor from "./sections/anchor";

const BecomeSurrogateMotherPage = () => {
  const { dictionary } = useDictionary()
  const aboutSectionRef = useRef<HTMLDivElement>(null);
	const scrollToAbout = () => {
	  if (aboutSectionRef.current) {
		aboutSectionRef.current.scrollIntoView({
		  behavior: 'smooth',
		  block: 'start',
		});
	  }
	};
  return <main className="overflow-hidden">
    <Hero dictionary={dictionary} scrollToAbout={scrollToAbout} />
    <Description dictionary={dictionary} ref={aboutSectionRef} />
    <Anchor dictionary={dictionary} />
    <GeneralInformation dictionary={dictionary} />
    <div className='container mt-[60px] md:mt-[100px]'>
      <RequestConsultation dictionary={dictionary} />
    </div>
     <About dictionary={dictionary} />
    <Stages dictionary={dictionary} />
    <ContactUs dictionary={dictionary} />
    <Accreditation dictionary={dictionary} />
    {/* <License dictionary={dictionary} />  */}
  </main>;
};

export default BecomeSurrogateMotherPage;
