"use client"
import { NavigationItem, Navlinks } from "@/data/NavLinks";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa"
import { HiChevronDown } from "react-icons/hi"

const links: NavigationItem[] = Navlinks;

const Header = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const toggleMenu = (label: string) => {
        setActiveMenu(prev => (prev === label ? null : label));
    };
    const navRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveMenu(null);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);
    return (
        <header className="bg-primary py-2 relative">
            <div className='container mx-auto md:px-6 px-4 flex items-center justify-between'>
                <div>
                    <Link href="/" className="inline-flex">
                        <Image src="/images/logowhite.png" alt="logo" width={170} height={90} />
                    </Link>
                </div>
                <div className="w-full md:block hidden w-80 xl:w-96">
                    <form className="rounded-md border border-black/20 bg-white flex items-center gap-x-3 pr-3 pl-4 h-10 shadow-[0_0_20px_-3px_rgb(211,211,211)] ">
                        <input
                            id="search"
                            name="search"
                            placeholder="Search by product, categories..."
                            className="w-full outline-none" />
                        <button className="text-title/50">
                            <FaSearch />
                        </button>
                    </form>
                </div>
                <div className="hidden items-start gap-x-10 md:flex lg:mb-0 lg:gap-x-24 xl:gap-x-40">
                    <div className="flex flex-col items-center gap-y-2">
                        <p className="whitespace-nowrap text-white text-sm">Talk to our packaging expert</p>
                        <Link href="tel:+1(332)2529988" className="text-white text-sm">
                            +1(332) 252 9988
                        </Link>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <p className="whitespace-nowrap text-white text-sm">Email Us</p>
                        <Link href="mailto:sales@customfitboxes.com" target="_blank" className="text-white text-sm">
                            sales@customfitboxes.com
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto md:px-6 px-4 flex items-center justify-between mt-3">
                <nav>
                    <ul ref={navRef} className="flex md:flex-row gap-x-6 lg:gap-x-10 items-center justify-start">

                        {links.map((item) => (
                            <li key={item.label}>

                                {/* LINK */}
                                {item.type === "link" && (
                                    <Link
                                        href={item.href}
                                        className="text-xs xl:text-base text-white flex items-center gap-3 hover:scale-95 duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {/* DROPDOWN */}
                                {item.type === "dropdown" && (
                                    <>
                                        <Link href={item.href}
                                            onMouseEnter={() => setActiveMenu(item.label)}
                                            className="text-xs xl:text-base text-white flex items-center gap-2"
                                        >
                                            {item.label} <HiChevronDown />
                                        </Link>

                                        {activeMenu === item.label && (
                                            <div className="absolute w-60 top-full bg-white z-50 rounded-lg shadow-lg flex flex-col divide-y divide-title/20">
                                                {item.children?.map((child) => (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        className="flex items-center gap-x-3 cursor-pointer hover:font-bold text-title/80 hover:text-title py-3 px-3"
                                                        onClick={() => setActiveMenu(null)}
                                                    >
                                                        <span className="text-xs sm:text-sm font-medium"> {child.label}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}

                                {item.type === "mega" && (
                                    <>
                                        <Link href={item.href}
                                            onMouseEnter={() => setActiveMenu(item.label)}
                                            className="text-xs xl:text-base text-white flex items-center gap-2"
                                        >
                                            {item.label} <HiChevronDown />
                                        </Link>

                                        {activeMenu === item.label && (
                                            <div className="absolute w-full top-full -mt-4 pt-4 left-0 right-0">
                                                <div className="container mx-auto bg-white text-title z-30 rounded-lg shadow-lg px-3 sm:px-10 pb-10 pt-5">
                                                    {item.children?.map((group) => (
                                                        <div key={group.group}>
                                                            <h2 className="text-title text-lg font-semibold">{group.group}</h2>

                                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-10">
                                                                {group.items.map((i) => (
                                                                    <Link
                                                                        key={i.label}
                                                                        href={i.href}
                                                                        className="flex items-center gap-x-3 hover:!border-none cursor-pointer hover:font-bold hover:text-title text-gray-700 h-12 sm:h-14 md:h-16"
                                                                        onClick={() => setActiveMenu(null)}
                                                                    >
                                                                        <Image src={i.icon} alt="icon" width={48} height={48} />
                                                                        <span className="text-xs sm:text-sm md:text-base font-normal">{i.label}</span>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {item.footer && (
                                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                                            <Link
                                                                href={item.footer.href}
                                                                className="flex items-center gap-x-3 cursor-pointer text-title rounded-lg justify-center px-2 h-12 sm:h-14 md:h-16 bg-zinc-100 hover:scale-95 duration-300"
                                                                onClick={() => setActiveMenu(null)}
                                                            >
                                                                <span className="text-xs sm:text-sm md:text-base font-semibold text-title"> {item.footer.label}</span>
                                                                <FaChevronRight />
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="hidden items-center gap-x-4 lg:flex lg:gap-x-4 md:pb-3">
                    <Link href="#" className="text-xs text-center text-white bg-transparent border border-white rounded-md py-2 w-36 lg:w-40">
                        Request a Sample Pack
                    </Link>
                    <Link href="#" className="text-xs text-center text-white bg-transparent border border-white rounded-md py-2 w-36 lg:w-40">
                        Request a Sample Pack
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header