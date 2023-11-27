"use client"
import React, { useEffect, useState } from 'react'
import { Home2, CallCalling, Video, Location, Android, Profile } from 'iconsax-react'
import {Link} from "react-scroll"


const Header = () => {
    const [fix, setfix] = useState(false)

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY >= 600 ? setfix(true) : setfix(false)
        }
        window.addEventListener('scroll', scrollHandler)
    }, [])


    return (
        <nav className={`${fix && 'fixed shadow-2xl right-0 bg-[#6c562c] py-4 top-0 z-10 rounded-b-lg'} px-10 w-full items-center flex justify-between `}>
            <div className=" hidden md:flex gap-3">
                <Link to={'heroSec'} spy={true} smooth={true} offset={-100} duration={600} className="flex items-center gap-2 group ease-in-out duration-500">
                    <Home2 size="32" color="#ffefcd" className='cursor-pointer' />
                    <div className="type-container hidden group-hover:block ">
                        <h3 className={`typing-text cursor-pointer ${fix ? 'text-[--second-primary-color]' : 'text-[--fourth-primary-color]'} `}>نخست</h3>
                    </div>
                </Link>
                <Link to={'callSec'} spy={true} smooth={true} offset={-100} duration={600} className="flex items-center gap-2 group ease-in-out duration-500">
                    <CallCalling size="32" color="#ffefcd" className='cursor-pointer' />
                    <div className="type-container hidden group-hover:block ">
                        <h3 className={`typing-text cursor-pointer ${fix ? 'text-[--second-primary-color]' : 'text-[--fourth-primary-color]'} `}>تماس تلفنی</h3>
                    </div>
                </Link>
                <Link to={'centerSec'} spy={true} smooth={true} offset={-100} duration={600} className="flex items-center gap-2 group ease-in-out duration-500">
                    <Location size="32" color="#ffefcd" className='cursor-pointer' />
                    <div className="type-container hidden group-hover:block ">
                        <h3 className={`typing-text cursor-pointer ${fix ? 'text-[--second-primary-color]' : 'text-[--fourth-primary-color]'} `}>مراکز</h3>
                    </div>
                </Link>
                <Link to={'videoSec'} spy={true} smooth={true} offset={-100} duration={600} className="flex items-center gap-2 group ease-in-out duration-500">
                    <Video size="32" color="#ffefcd" className='cursor-pointer' />
                    <div className="type-container hidden group-hover:block ">
                        <h3 className={`typing-text cursor-pointer ${fix ? 'text-[--second-primary-color]' : 'text-[--fourth-primary-color]'} `}>تماس تصویری</h3>
                    </div>
                </Link>
                <div className="flex items-center gap-2 group ease-in-out duration-500">
                    <Android size="32" color="#ffefcd" className='cursor-pointer' />
                    <div className="type-container hidden group-hover:block ">
                        <h3 className={`typing-text cursor-pointer ${fix ? 'text-[--second-primary-color]' : 'text-[--fourth-primary-color]'} `}>هوش مصنوعی</h3>
                    </div>
                </div>
            </div>
            <div className="flex gap-2  items-center">
                <h2 className='cursor-pointer text-[--second-primary-color] text-lg'>حساب کاربری</h2>
                <Profile size="32" color="#ffefcd" className='cursor-pointer' />
            </div>
        </nav>
    )
}

export { Header }