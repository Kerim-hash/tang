import { AboutPage } from '@/_pages';
import Meta from '@/widgets/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
	
	icons: { icon:'/_next/static/media/favicon.ico',},
	title:
	  "Суррогатное материнство | О нас",
	description:
	  "Центр Motherhood предлагает безопасные и качественные услуги суррогатного материнства для семей по всему миру. Узнайте больше о наших услугах!",
  };

  
const page = () => {
	return <>
		<AboutPage />
	</>
};
export default page;
