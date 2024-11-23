'use client'

import React, { FC } from "react";
import Hero from "./sections/hero";
import { useDictionary } from '@/shared/lib/hooks';
import RequestConsultation from "@/shared/ui/RequestConsultation";
import ContactsSection from "./sections/contacts";

const ContactsPage: FC = () => {
    const { dictionary } = useDictionary();
    return <div>
        <Hero dictionary={dictionary} />
        <ContactsSection dictionary={dictionary} />
        <div className='container mt-[60px] md:mt-[100px]'>
            <RequestConsultation dictionary={dictionary} />
        </div>
    </div>;
};

export default ContactsPage;
