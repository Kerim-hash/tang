import { DictionaryInterface } from "@/shared/types/dictionary";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Рекомендуется использовать usePathname вместо useRouter
import { FC } from "react";

const Anchor: FC<DictionaryInterface> = ({ dictionary }) => {
    const currentPath = usePathname(); // Получаем текущий путь без необходимости использования useRouter

    const tabs = [
        { name: dictionary.becomeSurrogateMother.anchor, href: "#section1" },
        { name: dictionary.becomeSurrogateMother.anchor, href: "#section1" },
        { name: dictionary.becomeSurrogateMother.anchor, href: "#section3" },
        { name: dictionary.becomeSurrogateMother.anchor, href: "#section4" },
        { name: dictionary.becomeSurrogateMother.anchor, href: "#section4" },
    ];

    return (
        <div className="container mt-[60px] md:mt-[100px] space-x-4 hidden lg:flex">
            {tabs.map((tab, index) => {
                const tabHref = `${currentPath}/${tab.href}`; // Build the full href path

                const isActive = currentPath === tabHref; // Compare current path with tab href
                return <Link
                    key={index}
                    href={tabHref} // Set the href to navigate to each section
                    className={`px-4 flex-1 py-2 text-base font-medium transition-all duration-300 ${isActive ? "text-primary border-b-2 border-primary" : "text-secondary hover:text-primary"
                        }`}
                >
                    {tab.name[index]}
                </Link>
            })}
        </div>
    );
};

export default Anchor;
