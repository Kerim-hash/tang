import { AboutPage } from '@/_pages';
import Meta from '@/widgets/Meta';
import Head from 'next/head';

const page = () => {
	return <>
	   	<Meta title='o nas' description='2' />
		<AboutPage />
	</>
};
export default page;
