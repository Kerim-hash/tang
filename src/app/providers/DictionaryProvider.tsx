'use client';

import { DictionaryType, getDictionary } from '@/shared/config/i18n';
import { DictionaryContext } from '@/shared/lib/context';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { FC, useEffect, useState } from 'react';

interface DictionaryProviderProps {
	lang: string;
	initialDictionary: DictionaryType;
	children: React.ReactNode;
}

export const DictionaryProvider: FC<DictionaryProviderProps> = ({
	lang,
	initialDictionary,
	children,
}) => {
	const [dictionary, setDictionary] = useState<DictionaryType>(initialDictionary);

	useEffect(() => {
		const fetchDictionary = async () => {
			const dict = await getDictionary(lang);
			setDictionary(dict);
		};

		if (!initialDictionary) {
			fetchDictionary();
		}
	}, [lang, initialDictionary]);

	return (
		<DictionaryContext.Provider value={{ dictionary, lang }}>
			<Header />
			{children}
			<Footer dictionary={dictionary} lang={lang} />
		</DictionaryContext.Provider>
	);
};
