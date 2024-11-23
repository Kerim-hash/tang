import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import { Open_Sans, Lato, Oxygen} from 'next/font/google';
import Script from 'next/script';

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });
const oxygen = Oxygen({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });



export const metadata: Metadata = {
	title: 'Surrogacy Centermotherhood',
	description: 'high quality, comfortable and safe',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<Script
					id="structured-data"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Surrogacy Center Motherhood",
							url: "https://yourdomain.com",
							logo: "https://yourdomain.com/logo.png",
							description: "Providing safe and professional surrogacy services for families worldwide.",
							address: {
								"@type": "PostalAddress",
								streetAddress: "123 Example St",
								addressLocality: "City",
								addressRegion: "State",
								postalCode: "12345",
								addressCountry: "US",
							},
							contactPoint: {
								"@type": "ContactPoint",
								telephone: "+1-800-123-4567",
								contactType: "customer service",
							},
						}),
					}}
				/>
			</head>
			<body >{children}</body>
		</html>
	);
}
