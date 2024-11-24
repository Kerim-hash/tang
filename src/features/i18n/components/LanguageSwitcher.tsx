'use client';

import { defaultLocale, locales } from '@/shared/config/i18n';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';

const LanguageSwitcher = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  // Кэширование текущего языка
  const currentLocale = useMemo(() => pathname.split('/')[1], [pathname]);

  // Обработчик смены языка
  const handleLocaleChange = (newLocale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    push(newPathname);
  };

  return (
    <nav className="flex gap-4">
      {locales.map(({ code }) => (
        <button
          key={code}
          className={`uppercase text-base font-openSans hover:text-primary ${
            currentLocale === code ? 'text-primary' : 'text-secondary'
          }`}
          onClick={() => handleLocaleChange(code)} // Change language on button click
        >
          {code}
        </button>
      ))}
    </nav>
  );
};

export default LanguageSwitcher;
