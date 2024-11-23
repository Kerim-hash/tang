'use client';
import { useDictionary } from '@/shared/lib/hooks';
import { FC } from 'react';
import Hero from './sections/hero';
import About from './sections/about';
import RequestConsultation from '@/shared/ui/RequestConsultation';
import Director from './sections/director';
import Info from './sections/info';
import Head from 'next/head';
import License from '../becomeSurrogateMother/sections/license';

const AboutPage: FC = () => {
	const { dictionary } = useDictionary();

	return (
		<div className=''>
			<Hero dictionary={dictionary} />
			{/* <About dictionary={dictionary} /> */}
				<div className='container mt-[50px] md:mt-[160px]'>
				<RequestConsultation dictionary={dictionary} />
			</div>
			<Director dictionary={dictionary} />
			<Info dictionary={dictionary} />
			{/* <License dictionary={dictionary} /> */}
		</div>
	)
};

export default AboutPage;
