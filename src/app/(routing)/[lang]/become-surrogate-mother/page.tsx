import { BecomeSurrogateMotherPage } from '@/_pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title:
	  "Суррогатное материнство | Как стать суррогатной матерью",
	description:
	  "Центр Motherhood предлагает безопасные и качественные услуги суррогатного материнства для семей по всему миру. Узнайте больше о наших услугах!",
  };

const page = () => {
	return <BecomeSurrogateMotherPage />;
};

export default page;
