'use client'

import { Navlinks } from '@/data/NavLinks'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

type Props = {
    setMblMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const MblMenu = ({ setMblMenu }: Props) => {

    const [openMenu, setOpenMenu] = useState<number | null>(null)

    return (

        <div className='fixed h-full overflow-y-auto w-full z-50 left-0 right-0 flex flex-col gap-y-10 bg-primary top-0 duration-300 py-20 px-6'>

            <button
                onClick={() => setMblMenu(false)}
                className="text-white text-3xl absolute right-6 top-6"
            >
                <MdClose />
            </button>

            <ul className='flex flex-col text-white'>

                {Navlinks?.map((item, index) => {

                    const isOpen = openMenu === index

                    return (

                        <li
                            key={index}
                            className='border-b border-white/20 py-4'
                        >

                            {/* Normal Link */}
                            {item.type === 'link' && (

                                <Link
                                    href={item.href}
                                    onClick={() => setMblMenu(false)}
                                    className='cursor-pointer font-medium text-base whitespace-nowrap block'
                                >
                                    {item.label}
                                </Link>
                            )}

                            {/* Dropdown + Mega */}
                            {(item.type === 'dropdown' || item.type === 'mega') && (

                                <div>

                                    <button
                                        onClick={() =>
                                            setOpenMenu(isOpen ? null : index)
                                        }
                                        className='flex items-center justify-between w-full font-medium text-base'
                                    >

                                        <span>{item.label}</span>

                                        {isOpen ? (
                                            <FaChevronUp />
                                        ) : (
                                            <FaChevronDown />
                                        )}
                                    </button>

                                    {isOpen && (

                                        <div className='pl-4 pt-4 flex flex-col gap-3'>

                                            {/* Dropdown */}
                                            {item.type === 'dropdown' &&

                                                item.children.map((child, idx) => (

                                                    <Link
                                                        key={idx}
                                                        href={child.href}
                                                        onClick={() => setMblMenu(false)}
                                                        className='text-sm text-white/80'
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))
                                            }

                                            {/* Mega Menu */}
                                            {item.type === 'mega' &&

                                                item.children.map((group, idx) => (

                                                    <div key={idx}>

                                                        <h4 className='text-sm font-semibold mb-3 text-white'>
                                                            {group.group}
                                                        </h4>

                                                        <div className='flex flex-col gap-3'>

                                                            {group.items.map((subItem, subIdx) => (

                                                                <Link
                                                                    key={subIdx}
                                                                    href={subItem.href}
                                                                    onClick={() => setMblMenu(false)}
                                                                    className='text-sm text-white/80'
                                                                >
                                                                    {subItem.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )}
                                </div>
                            )}
                        </li>
                    )
                })}
            </ul>

            <div className='flex flex-col gap-3 items-center'>

                <Link
                    href="/request-sample-pack"
                    className='text-xs font-semibold bg-white text-primary py-3 w-full text-center rounded'
                >
                    Request a Sample Pack
                </Link>

                <Link
                    href="/request-quote"
                    className='text-xs font-semibold bg-white text-primary py-3 w-full text-center rounded'
                >
                    Request a quote
                </Link>
            </div>
        </div>
    )
}