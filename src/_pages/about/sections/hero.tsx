import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImage from '@/assets/About/hero.webp';
import ArrowDown from '@/assets/arrow-down.svg';
import { DictionaryType } from '@/shared/config/i18n';

const Hero: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
	const arrowVariants = {
		initial: { opacity: 0, y: 0 },
		animate: {
		  opacity: 1,
		  y: 10,
		  transition: {
			repeat: Infinity,
			repeatType: "reverse" as const, // Corrected type
			duration: 1.5,
			ease: "easeInOut",
		  },
		},
	  };
	  
	return (
		<motion.div
			className="h-screen-minus-74 md:h-screen-minus-127 bg-background"
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 0 },
				visible: { opacity: 1, transition: { duration: 0.8 } },
			}}
		>
			<div className="container flex flex-col md:flex-row items-center justify-between h-full relative">
				<motion.div
					className="info md:w-1/2 h-1/2 mt-5"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					<motion.h1
						className="mb-4 title"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						{dictionary.about.hero.title}
					</motion.h1>
					<motion.p
						className="desc1 tracking-wide"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
					>
						{dictionary.about.hero.desc}
					</motion.p>
					<motion.button
						className="btn btn-primary btn-lg mt-8"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.2 }}
					>
						{dictionary.common.GetAConsultation}
					</motion.button>
				</motion.div>

				<motion.div
					className="flex-1 bottom-0 right-0 md:absolute"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
				>
					<Image
						src={heroImage}
						className="mx-auto"
						alt="Hero Image"
						width={630}
						height={575}
					/>
				</motion.div>

				<motion.div
					className="hidden absolute bottom-14 w-full md:flex justify-center cursor-pointer z-10"
					variants={arrowVariants}
					initial="initial"
					animate="animate"
				>
					<Image src={ArrowDown} alt="arrow-down" />
				</motion.div>
			</div>
		</motion.div>
	)
};

export default Hero;
