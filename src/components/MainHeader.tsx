import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Home2, HeartCircle, Building4, Profile } from 'iconsax-react'



const MainHeader = () => {

    const [fix, setfix] = useState(false)

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY >= 600 ? setfix(true) : setfix(false)
        }
        window.addEventListener('scroll', scrollHandler)
    }, [])


    return (
        <nav className={`${fix && 'fixed shadow-2xl right-0 bg-[#6c562c] py-4 top-0 z-10 rounded-b-lg'} w-full items-center flex justify-between `}>
            <div className="flex gap-3">
                <div className="">
                    <Link href={'/'} className="flex items-center gap-2 group ease-in-out duration-500 " shallow={true}>
                        <Home2 size="32" color="#ffefcd" className='cursor-pointer' />
                        <div className="type-container hidden group-hover:block ">
                            <h3 className={`typing-text cursor-pointer ${fix ? 'text-[--second-primary-color]' : 'text-[--fourth-primary-color]'} `}>ابتدای صفحه</h3>
                        </div>
                    </Link>
                </div>
                <div className="">
                    <Link href={'/medical-centers'} className="flex items-center gap-2 group ease-in-out duration-500 " shallow={true}>
                        <HeartCircle size="32" color="#ffefcd" className='cursor-pointer' />
                        <div className="type-container hidden group-hover:block ">
                            <h3 className={`typing-text cursor-pointer ${fix ? 'text-[--second-primary-color]' : 'text-[--fourth-primary-color]'} `}>مراکز درمانی</h3>
                        </div>
                    </Link>
                </div>
                <div className="">
                    <Link href={'/service-centers'} className="flex items-center gap-2 group ease-in-out duration-500 " shallow={true}>
                        <Building4 size="32" color="#ffefcd" className='cursor-pointer' />
                        <div className="type-container hidden group-hover:block ">
                            <h3 className={`typing-text cursor-pointer ${fix ? 'text-[--second-primary-color]' : 'text-[--fourth-primary-color]'} `}>مراکز خدماتی</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex gap-2  items-center">
                <h2 className='cursor-pointer text-[--second-primary-color] text-lg'>حساب کاربری</h2>
                <Profile size="32" color="#ffefcd" className='cursor-pointer' />
            </div>
        </nav>
    )
}

export { MainHeader }