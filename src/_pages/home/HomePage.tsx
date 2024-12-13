'use client';

import { useDictionary } from '@/shared/lib/hooks';
import { FC, useRef } from 'react';
import Hero from './section/hero';
import About from './section/about';
import Video from './section/video';
import Animation from './section/Animation';
import Info from './section/Info';
import RequestConsultation from '@/shared/ui/RequestConsultation';
import Law from './section/law';
import Data from './section/data';
import ProgramStages from './section/programStages';

const HomePage: FC = () => {
	const { dictionary } = useDictionary();

	const aboutSectionRef = useRef<HTMLDivElement>(null);
	const scrollToAbout = () => {
	  if (aboutSectionRef.current) {
		aboutSectionRef.current.scrollIntoView({
		  behavior: 'smooth',
		  block: 'start',
		});
	  }
	};
	return (
		<main>
			<Hero dictionary={dictionary} scrollToAbout={scrollToAbout} />
			<About dictionary={dictionary} ref={aboutSectionRef} />
			<Video dictionary={dictionary} />
			<Animation />
			<Info dictionary={dictionary} />
			<ProgramStages dictionary={dictionary} />
			<div className='container mt-[60px]  md:mt-[100px]'>
				<RequestConsultation dictionary={dictionary} />
			</div>
			<Data dictionary={dictionary} />
			<Law dictionary={dictionary} />
			<div className='container  mt-[60px]  md:mt-[100px]'>
				<RequestConsultation dictionary={dictionary} />
			</div> 
		</main>
	);
};

export default HomePage;
