import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { icon3, icon4 } from '@/utilities/Index'

const CentersRoute = () => {
    return (
        <section className='flex flex-col gap-10 lg:flex-row lg:justify-evenly items-center relative lg:h-screen' id='centerSec'>
                <Link href={'/medical-centers'} className="flex flex-col w-full lg:w-3/12 lg:h-full justify-center" shallow={true}>
                    <Image alt='icon' src={icon3} width={400} height={400} className='hidden lg:block top-0 opacity-50 basis-1/2 -z-20 absolute'/>
                    <div className="felx border-2 border-[--second-primary-color] hover:p-3 rounded-md cursor-pointer ease-in-out duration-500 ">
                        <button className='lg:text-xl bg-[--third-primary-color] rounded-md py-8 w-full'>
                            مراکز درمانی
                        </button>
                    </div>
                </Link>
                <Link href={'/service-centers'} className="flex flex-col w-3/4 lg:w-3/12 lg:h-full justify-center" shallow={true}>
                    <Image alt='icon' src={icon4} className='hidden lg:block absolute opacity-50 -z-20 top-16'/>
                    <div className="flex border-2 border-[--second-primary-color] hover:p-3 rounded-md cursor-pointer ease-in-out duration-500 ">
                        <button className='lg:text-xl bg-[--third-primary-color] rounded-md py-8 w-full'>
                            مراکز  خدماتی
                        </button>
                    </div>
                </Link>
        </section>
    )
}

export { CentersRoute }