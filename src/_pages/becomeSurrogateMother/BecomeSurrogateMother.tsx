'use client'

import { useDictionary } from "@/shared/lib/hooks";
import React from "react";
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

  return <div>
    <Hero dictionary={dictionary} />
    <Description dictionary={dictionary} />
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
  </div>;
};

export default BecomeSurrogateMotherPage;
