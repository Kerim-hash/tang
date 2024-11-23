import { FC, useState } from 'react';
import VideoButton from '@/features/VideoBlock/ui';
import YouTubeModal from '@/widgets/YoutubeModal/YouTubeModal';
import VideoPreview1 from '@/assets/Home/video-preview.webp';
import VideoPreview2 from '@/assets/Home/video-preview-2.webp';
import Image from 'next/image';
import { DictionaryType } from '@/shared/config/i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Video: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);

  // Хук для отслеживания видимости
  const { ref, inView } = useInView({
    triggerOnce: true, // Запускаем анимацию один раз
    threshold: 0.2, // Анимация срабатывает, когда видно 20% блока
  });

  const handleLikeClick = (id: string) => {
    setVideoId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoId(null);
  };

  // Анимации
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="container mt-[110px] px-4 md:px-8">
      <motion.div
        className="flex flex-col md:flex-row gap-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Управляем анимацией через видимость
        variants={containerVariants}
      >
        {/* Первый блок видео */}
        <motion.div className="flex-1" variants={itemVariants}>
          <h3 className="mb-10 tracking-[-.8px] font-oxygen text-3xl md:text-6xl text-textPrimary leading-10 md:leading-70p4 font-normal">
            {dictionary.family.video.firstBlock}
          </h3>
          <div className="relative group">
            <Image
              className="max-h-[250px] md:max-h-[307px] w-full object-cover rounded-4xl"
              src={VideoPreview1}
              alt="preview"
            />
            {/* Анимация кнопки */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
            >
              <VideoButton onLike={() => handleLikeClick('OM4s4HSmYAc')} />
            </motion.div>
          </div>
        </motion.div>

        {/* Второй блок видео */}
        <motion.div className="flex-1" variants={itemVariants}>
          <h3 className="mb-10 tracking-[-.8px] font-oxygen text-3xl md:text-6xl text-textPrimary leading-10 md:leading-70p4 font-normal">
            {dictionary.family.video.secondBlock}
          </h3>
          <div className="relative group">
            <Image
              className="max-h-[250px] md:max-h-[307px] w-full object-cover rounded-4xl"
              src={VideoPreview2}
              alt="preview"
            />
            {/* Анимация кнопки */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
            >
              <VideoButton onLike={() => handleLikeClick('HFlgEttftn8')} />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Модальное окно YouTube */}
      <YouTubeModal isOpen={isModalOpen} onClose={closeModal} videoId={videoId} />
    </div>
  );
};

export default Video;
