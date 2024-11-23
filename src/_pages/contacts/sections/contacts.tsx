'use client';

import { DictionaryType } from "@/shared/config/i18n";
import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import telegram from "@/assets/telegram.svg";
import instagram from "@/assets/instagram.svg";
import facebook from "@/assets/facebook.svg";
import whatsapp from "@/assets/whatsapp.svg";

const ContactsSection: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
  const socialLinks = [
    { name: "Whatsapp", color: "#25D366", icon: whatsapp, href: "/" },
    { name: "Instagram", color: "#F00073", icon: instagram, href: "/" },
    { name: "Telegram", color: "#0088CC", icon: telegram, href: "/" },
    { name: "Facebook", color: "#1877F2", icon: facebook, href: "/" },
  ];

  return (
    <div className="container mt-[100px]">
      <motion.div
        className="title mb-[100px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {dictionary.contacts.supTitle}
      </motion.div>
      <div className="flex flex-wrap justify-between gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            className="rounded-4xl text-3xl font-bold py-6 px-6 flex items-center bg-background hover:shadow-xl transition-shadow w-full md:w-auto justify-center md:justify-start "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            {link.name}
            <motion.div
              className="rounded-full p-4 ml-10"
              style={{ backgroundColor: link.color }}
              whileHover={{
                rotate: 15,
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                className="w-[32px] h-[32px]"
                width={32}
                height={32}
                src={link.icon}
                alt={link.name}
              />
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactsSection;
