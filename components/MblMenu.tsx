import Link from 'next/link';
import React from 'react'
import { MdClose } from 'react-icons/md'

type Props = {
    setMblMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MblMenu = ({ setMblMenu }: Props) => {
    return (
        <div className='fixed h-full w-full z-50 left-0 right-0 flex flex-col gap-y-14 items-center justify-center bg-primary bg-opacity-40 top-0 duration-300'>
            <button
                onClick={() => setMblMenu(false)}
                className="text-white text-2xl absolute right-6 top-6"
            >
                <MdClose />
            </button>
            <ul className='flex flex-col items-center gap-y-10 text-white'>
                <li>
                    <Link href="#" className='cursor-pointer font-medium text-sm whitespace-nowrap'>
                        Products
                    </Link>
                </li>
                <li>
                    <Link href="#" className='cursor-pointer font-medium text-sm whitespace-nowrap'>
                        Industries
                    </Link>
                </li>
                <li>
                    <Link href="#" className='cursor-pointer font-medium text-sm whitespace-nowrap'>
                        Box by Material
                    </Link>
                </li>
                <li>
                    <Link href="#" className='cursor-pointer font-medium text-sm whitespace-nowrap'>
                        Shapes & Styles
                    </Link>
                </li>
                <li>
                    <Link href="#" className='cursor-pointer font-medium text-sm whitespace-nowrap'>
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link href="#" className='cursor-pointer font-medium text-sm whitespace-nowrap'>
                        Blog
                    </Link>
                </li>
            </ul>
            <div className='flex flex-col gap-3 items-center gap-x-2 sm:gap-x-8'>
                <Link href="#" className='text-xs font-semibold bg-white text-primary py-2 w-48 mx-auto text-center rounded'>
                    Request a Sample Pack
                </Link>
                <Link href="#" className='text-xs font-semibold bg-white text-primary py-2 w-48 mx-auto text-center rounded'>
                    Request a Sample Pack
                </Link>
            </div>
        </div>
    )
}