import { DictionaryType } from "@/shared/config/i18n";
import Image from "next/image";
import React, { FC } from "react";
import LawImage from '@/assets/Home/law.webp'

type DocumentCardProps = {
    title: string;
    downloadLink: string;
};

const DocumentCard: FC<DocumentCardProps> = ({ title, downloadLink }) => {
    return (
        <div className="flex items-center justify-between bg-white rounded-4xl px-6 py-4 mb-6">
            <div>
                <h3 className="text-[#171717] text-[16px] mb-3 font-semibold tracking-wide">{title}</h3>
                <a
                    href={downloadLink}
                    download
                    className="text-blue-500 flex items-center gap-2 mt-2 hover:underline"
                >
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.25 8.90625L8 13L11.75 8.90625" stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 1.5L8 12.75" stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.625 15.125L2.375 15.125" stroke="#1677FF" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Скачать <b>PDF</b>
                </a>
            </div>
        </div>
    );
};

const Law: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
    const documents = [
        {
            id: 1,
            title: 'Семейный кодекс КР',
            downloadLink: '/path/to/document1.pdf',
        },
        {
            id: 2,
            title: 'Семейный кодекс КР',
            downloadLink: '/path/to/document2.pdf',
        },
        {
            id: 3,
            title: 'Семейный кодекс КР',
            downloadLink: '/path/to/document3.pdf',
        },
    ];

    return (
        <div className="container pt-[100px]">
            <div className="title mb-10 text-3xl font-semibold">{dictionary.family.law.title}</div>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1">
                    <div className="bg-gray-100 rounded-xl md:p-5 ">
                        {documents.map((doc) => (
                            <DocumentCard
                                key={doc.id}
                                title={doc.title}
                                downloadLink={doc.downloadLink}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <Image className="rounded-4xl max-h-[350px] object-cover w-full" src={LawImage} alt="law" />
                </div>
            </div>
        </div>
    );
};

export default Law;
