import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image'; // Для загрузки SVG через Next.js
import ArrowDown from '@/assets/arrow-down.svg'; // Убедитесь, что путь правильный

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`border ${isOpen ? "border-primary": "border-transparent"} accordion my-5 rounded-4xl overflow-hidden bg-background`}>
      <div
        className="accordion-header bg-gray-100 py-6 px-8 cursor-pointer hover:bg-gray-200 flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <h3 className={`${isOpen ? 'text-primary' : 'text-textPrimary'} text-xl md:text-2xl  text-gray-800`}>{title}</h3>
        {/* Animated Arrow */}
        <motion.div
          className="ml-2"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={ArrowDown} alt="Arrow Down" width={16} height={16} />
        </motion.div>
      </div>
      {/* Content */}
      <motion.div
        className="accordion-content overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="p-4 bg-background">{children}</div>
      </motion.div>
    </div>
  );
};

export default Accordion;
