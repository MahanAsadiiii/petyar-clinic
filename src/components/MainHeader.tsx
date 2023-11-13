import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Home2, CallCalling, Video, Location, Android, Profile } from 'iconsax-react'



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
                <Link href={'/'} className="flex items-center gap-2 group ease-in-out duration-500">
                <Home2 size="32" color="#ffefcd" className='cursor-pointer' />
                    <div className="type-container hidden group-hover:block ">
                        <h3 className={`typing-text cursor-pointer ${fix ? 'text-[--second-primary-color]' : 'text-[--fourth-primary-color]'} `}>ابتدای صفحه</h3>
                    </div>
                </Link>
            </div>
            <div className="flex gap-2  items-center">
                <h2 className='cursor-pointer text-[--second-primary-color] text-lg'>حساب کاربری</h2>
                <Profile size="32" color="#ffefcd" className='cursor-pointer' />
            </div>
        </nav>
    )
}

export { MainHeader }