"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { MdClose, MdOutlinePhoneInTalk } from "react-icons/md";
import { MblMenu } from "./MblMenu";
import { NavigationItem, Navlinks } from "@/data/NavLinks";
import SearchForm from "./SearchForm";
import { IoSearch } from "react-icons/io5";

const links: NavigationItem[] = Navlinks;

const Header = () => {
  const [mblMenu, setMblMenu] = useState(false);
  const [searchPopUp, setSearchPopUp] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    document.addEventListener("mousedown", handler);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? "py-0 " : "py-2"} bg-primary sticky top-0 z-[9999] `}>
      <div className={`${isScrolled ? "md:hidden " : "flex"} container mx-auto flex items-center justify-between relative`}>
        <div>
          <Link href="/" className="inline-flex">
            <Image
              src="/images/logowhite.png"
              alt="logo"
              width={170}
              height={90}
            />
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-5">
          <Link href="tel:+1(332)2529988" className="text-white text-2xl">
            <MdOutlinePhoneInTalk />
          </Link>
          <button
            onClick={() => setMblMenu(!mblMenu)}
            className="text-white text-2xl"
          >
            {!mblMenu ? <FaBars /> : <MdClose />}
          </button>
        </div>
        {mblMenu && <MblMenu setMblMenu={setMblMenu} />}
        <div className={`md:block hidden w-80 xl:w-96`}>
          <SearchForm />
        </div>
        <div className="hidden items-start gap-x-10 md:flex lg:mb-0 lg:gap-x-24 xl:gap-x-40">
          <div className="flex flex-col items-center gap-y-2">
            <p className="whitespace-nowrap text-white text-sm">
              Talk to our packaging expert
            </p>
            <Link href="tel:+1(332)2529988" className="text-white text-sm">
              +1(332) 252 9988
            </Link>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <p className="whitespace-nowrap text-white text-sm">Email Us</p>
            <Link
              href="mailto:sales@customfitboxes.com"
              target="_blank"
              className="text-white text-sm"
            >
              sales@customfitboxes.com
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:flex hidden items-center justify-between mt-3">
        <nav>
          <ul
            ref={navRef}
            className="flex md:flex-row gap-x-6 lg:gap-x-10 items-center justify-start"
          >
            <li className={`${isScrolled ? "md:block" : "hidden"} xl:border-r-2 xl:border-white -mt-1 xl:border-opacity-50 xl:pr-5`}>
              <Link href="/">
                <Image src="/images/home.svg" alt="home" width={22} height={22} />
              </Link>
            </li>
            {links.map((item) => (
              <li key={item.label}>
                {/* LINK */}
                {item.type === "link" && (
                  <Link
                    href={item.href || "#"}
                    className="text-xs xl:text-base text-white flex items-center gap-3 hover:scale-95 duration-300"
                  >
                    {item.label}
                  </Link>
                )}

                {/* DROPDOWN */}
                {item.type === "dropdown" && (
                  <>
                    <button
                      onMouseEnter={() => setActiveMenu(item.label)}
                      className="text-xs xl:text-base text-white flex items-center gap-2 cursor-pointer hover:opacity-80"
                    >
                      {item.label} <HiChevronDown />
                    </button>

                    {activeMenu === item.label && (
                      <div
                        onMouseLeave={() => setActiveMenu(null)}
                        className="absolute w-60 top-full bg-white rounded-lg shadow-lg flex flex-col divide-y divide-title/20 z-[999]"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href || "#"}
                            className="flex items-center gap-x-3 cursor-pointer hover:font-bold text-title/80 hover:text-title py-3 px-3"
                            onClick={() => setActiveMenu(null)}
                          >
                            <span className="text-xs md:text-sm font-medium">
                              {child.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* MEGA MENU */}
                {item.type === "mega" && (
                  <>
                    <button
                      onMouseEnter={() => setActiveMenu(item.label)}
                      className="text-xs xl:text-base text-white flex items-center gap-2 cursor-pointer hover:opacity-80"
                    >
                      {item.label} <HiChevronDown />
                    </button>

                    {activeMenu === item.label && (
                      <div
                        onMouseLeave={() => setActiveMenu(null)}
                        className="absolute w-full top-full -mt-4 pt-4 left-0 right-0 z-[999]"
                      >
                        <div className="container mx-auto bg-white text-title rounded-lg shadow-lg px-3 md:px-10 pb-10 pt-5">
                          {item.children?.map((group) => (
                            <div key={group.group}>
                              <h2 className="text-title text-lg font-semibold">
                                {group.group}
                              </h2>
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-10">
                                {group.items.map((i) => (
                                  <Link
                                    key={i.label}
                                    href={i.href || "#"}
                                    className="flex items-center gap-x-3 hover:!border-none cursor-pointer hover:font-bold hover:text-title text-gray-700 h-12 md:h-14 md:h-16"
                                    onClick={() => setActiveMenu(null)}
                                  >
                                    <Image
                                      src={i.icon}
                                      alt={i.label}
                                      width={48}
                                      height={48}
                                    />
                                    <span className="text-xs md:text-sm md:text-base font-normal">
                                      {i.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}

                          {item.footer && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                              <Link
                                href={item.footer.href || "#"}
                                className="flex items-center gap-x-3 cursor-pointer text-title rounded-lg justify-center px-2 h-12 md:h-14 md:h-16 bg-zinc-100 hover:scale-95 duration-300"
                                onClick={() => setActiveMenu(null)}
                              >
                                <span className="text-xs md:text-sm md:text-base font-semibold text-title">
                                  {item.footer.label}
                                </span>
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
            <li className={`${isScrolled ? "md:block" : "hidden"} `}>
              <button onClick={() => setSearchPopUp(!searchPopUp)}>
                <IoSearch size={24} className="text-white" />
              </button>
            </li>
          </ul>
        </nav>
        <div className="hidden items-center gap-x-4 lg:flex lg:gap-x-4 md:pb-3">
          <Link
            href="/request-sample-pack"
            className="text-xs text-center text-white bg-transparent border border-white rounded-md py-2 w-36 lg:w-40"
          >
            Request a Sample Pack
          </Link>
          <Link
            href="/request-quote"
            className="text-xs text-center text-white bg-transparent border border-white rounded-md py-2 w-36 lg:w-40"
          >
            Request a quote
          </Link>
        </div>
      </div>
      <div className={`${searchPopUp === true && isScrolled ? "md:absolute top-full right-10 md:mt-4 md:block" : "md:hidden"}  w-80 xl:w-96 md:px-0 px-4`}>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
