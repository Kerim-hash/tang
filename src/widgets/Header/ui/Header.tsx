import React, { FC, useEffect, useState, useRef } from "react";
import { usePathname } from 'next/navigation';
import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import { useDictionary } from "@/shared/lib/hooks";
import Link from "next/link";
import clsx from "clsx";
import { LanguageSwitcher } from "@/shared/ui";

const Header: FC = () => {
  const { dictionary, lang } = useDictionary();
  const [currentPath, setCurrentPath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для бургер-меню
  const menuRef = useRef<HTMLDivElement>(null); // Ссылка на мобильное меню

  // Флаг для проверки рендера на клиенте
  const [isClient, setIsClient] = useState(false);

  // Инициализация router только после рендера на клиенте
  useEffect(() => {
    setIsClient(true); // Устанавливаем флаг после рендера на клиенте
  }, []);

  // Только на клиенте доступен router
  const router = usePathname();
  const normalizedPath = router.replace(/\/$/, ""); // Убираем слэш в конце пути

  useEffect(() => {
    if (isClient) {
      setCurrentPath(normalizedPath); // Обновляем текущий путь на клиенте
    }
  }, [isClient, normalizedPath]);

  const navigation = [
    { name: dictionary.nav, link: "" },
    { name: dictionary.nav, link: "become-surrogate-mother" },
    { name: dictionary.nav, link: "egg-donation" },
    { name: dictionary.nav, link: "about" },
    { name: dictionary.nav, link: "contacts" },
  ];

  useEffect(() => {
    // Функция для проверки клика вне меню
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false); // Закрываем меню
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden"); // Убираем скролл
    } else {
      document.body.classList.remove("overflow-hidden"); // Возвращаем скролл
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  if (!isClient) {
    return null; // Пока компонент не отрендерен на клиенте, ничего не показываем
  }

  return (
    <header className="py-4 border-b border-[#DDDDDF] bg-background">
      <div className="wrapper container flex justify-between items-center">
        {/* Логотип и кнопка-бургер */}
        <div className="flex items-center gap-8 justify-around md:justify-between lg:justify-normal w-full lg:w-auto">
          <Link href={`/${lang}/`}><Image src={Logo} alt="logo" /></Link>
          <div className="hidden md:block">
          <LanguageSwitcher />
          </div>
          <button
            className="lg:hidden block p-2 text-primary"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {/* Иконка для бургер-меню */}
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-primary"></span>
              <span className="block w-6 h-0.5 bg-primary"></span>
              <span className="block w-6 h-0.5 bg-primary"></span>
            </div>
          </button>
        </div>
        {/* Телефон (для больших экранов) */}
        <a href="tel:+996556668989" className="text-primary text-xl font-lato hidden lg:block">
          +996 556 668 989
        </a>
      </div>

      {/* Выезжающее мобильное меню */}
      <div
        ref={menuRef}
        className={clsx(
          "fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-background shadow-lg z-50 transition-transform duration-300 lg:hidden",
          { "translate-x-0": isMenuOpen, "translate-x-full": !isMenuOpen }
        )}
      >
        <div className="flex flex-col h-full">
          {/* Кнопка закрытия */}
          <button
            className="self-end p-4 text-primary"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        
          {/* Навигация */}
          <nav className="flex flex-col gap-4 px-6">
            {navigation.map((item, index) => {
              const href = `/${lang}/${item.link}`.replace(/\/$/, "");
              const isActive = currentPath === href;
              return (
                <Link
                  key={index}
                  href={href}
                  className={clsx(
                    "text-secondary desc2 transition-colors duration-200",
                    { "!text-primary": isActive, "hover:text-primary": !isActive }
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name[index]}
                </Link>
              );
            })}
              <LanguageSwitcher />
          </nav>

          {/* Телефон и переключение языка */}
          <div className="mt-auto px-6 py-4 border-t">
            <a href="tel:+996556668989" className="block text-primary text-lg font-lato mb-4">
              +996 556 668 989
            </a>
           
          </div>
        </div>
      </div>

      {/* Навигация для больших экранов */}
      <div className="wrapper container flex justify-between mt-2 items-center hidden lg:flex">
        <nav className="flex gap-8">
          {navigation.map((item, index) => {
            const href = `/${lang}/${item.link}`.replace(/\/$/, "");
            const isActive = currentPath === href;
            return (
              <Link
                key={index}
                href={href}
                className={clsx(
                  "desc2 text-secondary transition-colors duration-200",
                  { "!text-primary": isActive, "hover:text-primary": !isActive }
                )}
              >
                {item.name[index]}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-8">
          <Link href="./" className="btn btn-primary">
            {dictionary.common.contact}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
