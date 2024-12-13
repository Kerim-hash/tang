import React, { FC, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { DictionaryType } from "@/shared/config/i18n";

const RequestConsultation: FC<{ dictionary: DictionaryType, sticky?: boolean, start?: boolean }> = ({ dictionary, sticky, start }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal control
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null); // For storing selected topic
  const [email, setEmail] = useState(""); // For email input
  const [question, setQuestion] = useState(""); // For question input

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  // Handle topic selection
  const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTopic(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ email, question, selectedTopic });
    closeModal();
  };

  return (
    <div className="h-full">
      <motion.div
        className={`${sticky ? "sticky" : ""} md:max-h-[194px] top-20 self-start py-4 px-6 bg-background min-h-[194px] h-full rounded-4xl ${start ? "text-start" : "text-center"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-medium text-textPrimary">{dictionary.common.RequestConsultationSupTitle}</h3>
        <button
          className="btn btn-primary btn-lg mt-10 w-full"
          onClick={openModal} // Open modal
        >
          {dictionary.common.RequestConsultation}
        </button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-lg flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl w-full sm:w-96 modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Modal Header */}
              <h2 className="text-2xl font-medium text-textPrimary">
                {dictionary.common.SelectTopicTitle}
              </h2>
              <p className="mt-2 text-textSecondary">{dictionary.common.SelectTopicDesc}</p>

              {/* Radio Buttons for topic selection */}
              {!selectedTopic && (
                <div className="mt-4 flex flex-col gap-4">
                  <div
                    className={`group cursor-pointer rounded-4xl p-6 px-10 hover:bg-primary  border border-primary  transition-all ${selectedTopic === "1" ? "bg-blue-100" : "bg-white"}`}
                    onClick={() => setSelectedTopic("1")}
                  >
                    <input
                      type="radio"
                      value="1"
                      checked={selectedTopic === "1"}
                      onChange={handleTopicChange}
                      className="hidden"
                    />
                    <p className="text-2xl text-primary font-lato group-hover:text-white">{dictionary.common.SearchSurrogate}</p>
                  </div>
                  <div
                    className={`group cursor-pointer rounded-4xl p-6 px-10 hover:bg-primary border border-primary  transition-all ${selectedTopic === "2" ? "bg-blue-100" : "bg-white"}`}
                    onClick={() => setSelectedTopic("2")}
                  >
                    <input
                      type="radio"
                      value="2"
                      checked={selectedTopic === "2"}
                      onChange={handleTopicChange}
                      className="hidden"
                    />
                    <p className="text-2xl text-primary font-lato group-hover:text-white">{dictionary.common.WantToBeSurrogate}</p>
                  </div>
                  <div
                    className={`group cursor-pointer rounded-4xl p-6 px-10 hover:bg-primary border border-primary  transition-all ${selectedTopic === "3" ? "bg-blue-100" : "bg-white"}`}
                    onClick={() => setSelectedTopic("3")}
                  >
                    <input
                      type="radio"
                      value="3"
                      checked={selectedTopic === "3"}
                      onChange={handleTopicChange}
                      className="hidden"
                    />
                    <p className="text-2xl text-primary font-lato group-hover:text-white">{dictionary.common.SearchAndWantToBeSurrogate}</p>
                  </div>
                </div>
              )}

              {/* Form for email and question input */}
              {selectedTopic && (
                <form onSubmit={handleSubmit} className="mt-6">
                  <div>
                    <label className="block text-textPrimary">{dictionary.common.Email}</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded mt-2"
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-textPrimary">{dictionary.common.Question}</label>
                    <textarea
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded mt-2"
                      required
                    />
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="btn btn-secondary"
                    >
                      {dictionary.common.Cancel}
                    </button>
                    <button type="submit" className="btn btn-primary">
                      {dictionary.common.Submit}
                    </button>
                  </div>
                </form>
              )}

              {/* Close Modal Button */}
              {!selectedTopic && (
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-2xl font-bold text-gray-600"
                >
                  ✕
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .modal-content {
          height: 100vh;
          overflow-y: auto;
        }

        @media (max-width: 640px) {
          .bg-white {
            height: 100%;
            max-height: 100vh;
            overflow-y: auto;
          }
          .fixed {
            position: fixed;
          }
          .p-6 {
            padding: 16px;
          }
          .sm\\:w-96 {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default RequestConsultation;
