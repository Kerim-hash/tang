import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Modal from "./Modal/Modal";
import { license } from "../types/licenses";
import { StaticImageData } from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Licenses: React.FC<{ licenses: license[] }> = ({ licenses }) => {
  const [selectedImage, setSelectedImage] = useState<license | null>(null);

  const openModal = (license: license) => {
    setSelectedImage(license);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const getImageSrc = (src: string | StaticImageData): string =>
    typeof src === "string" ? src : src.src;

  return (
    <div className="relative w-full">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16} // Расстояние между слайдами
        slidesPerView="auto" // Автоматический размер слайдов
        style={{ display: "flex", overflow: "hidden" }} // Горизонтальная ориентация
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 24 },
        }}
      >
        {licenses.map((license) => (
          <SwiperSlide
            key={license.id}
            className="flex-shrink-0"
            style={{
              width: "200px", // Установите фиксированную ширину
              height: "auto",
              display: "block", // Обеспечивает горизонтальное размещение
            }}
          >
            <div
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openModal(license)}
            >
              <img
                src={getImageSrc(license.src)}
                alt={license.alt}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <Modal isOpen={!!selectedImage} onClose={closeModal}>
        {selectedImage && (
          <div className="flex flex-col items-center">
            <img
              src={getImageSrc(selectedImage.src)}
              alt={selectedImage.alt}
              className="max-w-full max-h-full rounded-lg"
            />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Закрыть
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Licenses;
