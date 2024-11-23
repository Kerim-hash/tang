import React, { FC, useEffect, useState } from "react";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import Rights from "@/assets/rights.png";
import { DictionaryType } from "@/shared/config/i18n";
import Link from "next/link";

const Footer: FC<{ dictionary: DictionaryType; lang: string }> = ({ dictionary, lang }) => {
  const navigation = dictionary.nav.map((name: string, index: number) => ({
    name,
    link: String(index),
  }));

  const Links = [
    { name: "WhatsApp", link: "" },
    { name: "Instagram", link: "1" },
    { name: "Telegram", link: "2" },
    { name: "Facebook", link: "3" },
  ];

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname.replace(/\/$/, ""));
    }
  }, []);

  const isActiveLink = (path: string) => currentPath === `/${lang}/${path}`.replace(/\/$/, "");

  return (
    <footer className="bg-white mt-[100px] pt-[80px]">
      <div className="container pb-[35px] flex flex-col lg:flex-row gap-10">
        {/* Навигация и логотип */}
        <div className="flex-1 flex flex-col justify-between">
          <nav className="flex gap-4 flex-col">
            {navigation.map(({ name, link }, index) => (
              <Link
                key={index}
                href={`/${lang}/${link}`}
                className={`desc1 text-secondary transition-colors duration-200 ${
                  isActiveLink(link) ? "!text-primary" : "hover:text-primary"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>
          <Image src={Logo} alt="logo" className="mt-6" />
        </div>

        {/* Контактная информация */}
        <div className="flex-1 flex flex-col justify-between gap-6">
          <div>
            <h4 className="subtitle mb-3">{dictionary.footer.subtitles[0]}</h4>
            <p className="desc2 max-w-[240px]">{dictionary.footer.office}</p>
          </div>
          <div>
            <h4 className="subtitle mb-2">{dictionary.footer.subtitles[1]}</h4>
            <p className="desc2">{dictionary.footer.schedule}</p>
            <p className="desc2 mt-2 max-w-[290px]">{dictionary.footer.scheduleInfo}</p>
          </div>
          <div>
            <h4 className="subtitle mb-2">{dictionary.footer.subtitles[2]}</h4>
            <div className="flex gap-3 md:gap-8 mt-4">
              {Links.map((link, index) => (
                <a key={index} className="desc2 underline" href={link.link}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Карта и контактные данные */}
        <div className="flex-1 flex flex-col items-end justify-between gap-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.720806136616!2d74.59064007631812!3d42.857628071150955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb62aa001c9df%3A0xa09bde56c77da871!2z0YPQuy4g0JPQvtGA0YzQutC-0LPQviAxMjksIDEyOSDQk9C-0YDRjNC60LjQuSDQutOp0YfTqdGB0q8sINCR0LjRiNC60LXQuiA3MjAwNTI!5e0!3m2!1sru!2skg!4v1731648914702!5m2!1sru!2skg"
            width="400"
            height="200"
            className="border-none rounded-3xl max-w-[100%]"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="text-end mt-14">
            <p>
              <a className="text-gray text-3xl font-bold" href="tel:+996556668989">
                +996 556 668 989
              </a>
            </p>
            <p>
              <a className="text-gray text-3xl font-bold" href="mailto:tang.ivf@gmail.com">
                tang.ivf@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="container !py-6 flex justify-between items-center">
        <div></div>
        <p className="text-sm">© Tang 2024</p>
        <Image src={Rights} alt="Rights" />
      </div>
    </footer>
  );
};

export default Footer;
