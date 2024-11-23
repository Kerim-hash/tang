import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDictionary } from '@/shared/lib/hooks';
import RequestConsultation from '@/shared/ui/RequestConsultation';

const AccordionBlock: React.FC = () => {
  const { dictionary } = useDictionary();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      {/* Accordion */}
      <div className="w-full md:w-1/2 rounded-4xl overflow-hidden">
        <div
          className={`min-h-[194px] flex flex-col justify-center items-center px-8 pt-5 pb-10 cursor-pointer 
            ${isOpen ? 'bg-background text-primary' : 'bg-primary text-white'}
          `}
          onClick={toggleOpen}
        >
          <h2 className="font-normal text-2xl mb-8 leading-7">{dictionary.family.about.desc}</h2>
          {!isOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-gray-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
              className="bg-background flex flex-col gap-y-10"
            >
              {dictionary.family.about.conditions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-8"
                >
                  <h3 className="font-medium text-textPrimary text-2xl">{item.title}</h3>
                  <div className="flex items-start mt-4 gap-4">
                    <svg className='min-w-6 min-h-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.29883L4.63636 11.0488C6.3475 6.13347 7.77256 3.97655 11 1.04883" stroke="#A9448B" strokeWidth="1.71" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-textSecondary">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Side Panel */}
      <div className="w-full md:w-1/2">
        <RequestConsultation sticky dictionary={dictionary} start />
      </div>
    </div>
  );
};

export default AccordionBlock;
