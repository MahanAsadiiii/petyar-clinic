"use client"
import { FirstSecBg, icon1 } from '@/utilities/Image'
import Image from 'next/image'
import React from 'react'
import { Link } from "react-scroll"

const Hero = () => {
    return (
        <section className='relative flex flex-col gap-14 lg:items-center lg:h-screen' id='heroSec' >
            <Image alt='background' src={FirstSecBg} className='hidden md:block absolute -z-10 object-cover w-full h-full' />
            {/* <Image alt='background' height={300} src={icon1} className='absolute left-5 -z-20 opacity-50' /> */}
            <div className="flex flex-col gap-20 lg:h-[45%] lg:justify-end z-10">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h1 className='text-2xl lg:text-4xl text-[--second-primary-color] font-extrabold cursor-default'>سریعترین مرکز مشاوره امدادی حیوانات خانگی</h1>
                    <h2 className='text-xl lg:text-3xl text-[--primary-color] font-extrabold font-outline-2 cursor-default'>معرفی مناسبترین مراکز درمانی و خدماتی</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-10 justify-around items-center lg:h-32 px-4 lg:px-10">
                    <Link to={'callSec'} spy={true} smooth={true} offset={-150} duration={600} className="hover:p-2 border-2 border-[--second-primary-color] rounded-md my-auto cursor-pointer ease-in-out duration-500">
                        <div className="rounded-md bg-[--third-primary-color] py-4 px-5 lg:px-7 lg:py-8 ">
                            <h2 className='text-[--second-primary-color] text-lg lg:text-2xl'>تماس سریع با مشاور دامپزشک</h2>
                        </div>
                    </Link>
                    <Link to={'guiddence'} spy={true} smooth={true} offset={-150} duration={600} className="hover:p-2 border-2 border-[--second-primary-color] rounded-md my-auto cursor-pointer ease-in-out duration-500">
                        <div className="rounded-md bg-[--third-primary-color] py-4 px-5 lg:px-7 lg:py-8 ">
                            <h2 className='text-[--second-primary-color] text-lg lg:text-2xl'>تشخیص با کمک هوش مصنوعی</h2>
                        </div>
                    </Link>
                    <Link to={'videoSec'} spy={true} smooth={true} offset={-150} duration={600} className="hover:p-2 border-2 border-[--second-primary-color] rounded-md my-auto cursor-pointer ease-in-out duration-500">
                        <div className="rounded-md bg-[--third-primary-color] py-4 px-5 lg:px-7 lg:py-8 ">
                            <h2 className='text-[--second-primary-color] text-lg lg:text-2xl'>تماس تصویری با مشاور دامپزشک</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export { Hero }