import Link from 'next/link'

const BreadCrumb = ({ title }: any) => {
    return (
        <ul className='text-xs font-normal flex items-center gap-1'>
            <li>
                <Link href="/" className='text-primary'>
                    Home
                </Link>
            </li>
            <li>
                /
            </li>
            <li>
                <span className='text-desc'>
                    {title}
                </span>
            </li>
        </ul>
    )
}

export default BreadCrumb