import React from "react";

import LicensesImage from "@/assets/images.png";
import Licenses from "@/shared/ui/licenses";
import { DictionaryInterface } from "@/shared/types/dictionary";
import { license } from "@/shared/types/licenses";

const License: React.FC<DictionaryInterface> = ({ dictionary }) => {
  const licenses: license[] = [
    { id: 1, src: LicensesImage, alt: "License 1" },
    { id: 2, src: LicensesImage, alt: "License 2" },
    { id: 3, src: LicensesImage, alt: "License 3" },
    { id: 3, src: LicensesImage, alt: "License 3" },
    { id: 3, src: LicensesImage, alt: "License 3" },
    { id: 3, src: LicensesImage, alt: "License 3" },
    { id: 3, src: LicensesImage, alt: "License 3" },
    { id: 3, src: LicensesImage, alt: "License 3" },
    { id: 3, src: LicensesImage, alt: "License 3" },
    { id: 3, src: LicensesImage, alt: "License 3" },
    { id: 3, src: LicensesImage, alt: "License 3" },
    { id: 3, src: LicensesImage, alt: "License 3" },
    { id: 3, src: LicensesImage, alt: "License 3" },
  ];

  return (
    <div className="container mx-auto mt-[100px]">
      <div className="border-l border-gray-300 pl-4">
        <h2 className="title mb-10">{dictionary.common.License}</h2>
      </div>
      <Licenses licenses={licenses} />
    </div>
  );
};

export default License;
