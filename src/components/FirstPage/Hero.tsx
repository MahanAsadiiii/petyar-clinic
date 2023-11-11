"use client"
import { FirstSecBg, icon1 } from '@/utilities/Image'
import Image from 'next/image'
import React from 'react'
import {Link} from "react-scroll"

const Hero = () => {
    return (
        <section className='relative flex flex-col gap-14 items-center h-screen' id='HeroSec' >
            <Image alt='background' src={FirstSecBg} className='absolute -z-10' />
            <Image alt='background' height={300} src={icon1} className='absolute left-5 -z-20 opacity-50' />
            <div className="flex flex-col gap-4 mt-16 items-center">
                <h1 className='text-4xl text-[--second-primary-color] font-extrabold cursor-default'>سریعترین مرکز مشاوره امدادی حیوانات خانگی</h1>
                <h2 className='text-3xl text-[--primary-color] font-extrabold font-outline-2 cursor-default'>معرفی مناسبترین مراکز درمانی و خدماتی</h2>
            </div>
            <div className="flex gap-5 justify-between items-center ">
                <Link to={'callSec'} spy={true} smooth={true} offset={-100} duration={600} className="hover:p-2 border-4 border-[--second-primary-color] rounded-md my-auto cursor-pointer ease-in-out duration-500">
                    <div className="rounded-md bg-[--third-primary-color] px-7 py-8 ">
                        <h2 className='text-[--second-primary-color] text-2xl'>تماس سریع با مشاور دامپزشک</h2>
                    </div>
                </Link>
                <div className="hover:p-2 border-4 border-[--second-primary-color] rounded-md my-auto cursor-pointer ease-in-out duration-500">
                    <div className="rounded-md bg-[--third-primary-color] px-7 py-8 ">
                        <h2 className='text-[--second-primary-color] text-2xl'>تشخیص با کمک هوش مصنوعی</h2>
                    </div>
                </div>
                <div className="hover:p-2 border-4 border-[--second-primary-color] rounded-md my-auto cursor-pointer ease-in-out duration-500">
                    <div className="rounded-md bg-[--third-primary-color] px-7 py-8 ">
                        <h2 className='text-[--second-primary-color] text-2xl'>تماس تصویری با مشاور دامپزشک</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Hero }