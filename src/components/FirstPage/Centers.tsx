import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { icon3, icon4 } from '@/utilities/Index'

const Centers = () => {
    return (
        <section className='flex justify-evenly items-center relative h-screen' id='centerSec'>
                <Link href={'/medical-centers'} className="flex flex-col w-3/12">
                    <Image alt='icon' src={icon3} width={400} height={400} className='top-0 opacity-50 basis-1/2 -z-20 absolute'/>
                    <div className="felx border-4 border-[--second-primary-color] hover:p-3 rounded-md cursor-pointer ease-in-out duration-500">
                        <button className='text-xl bg-[--third-primary-color] rounded-md py-8 w-full'>
                            مراکز درمانی
                        </button>
                    </div>
                </Link>
                <div className="flex flex-col w-3/12 ">
                    <Image alt='icon' src={icon4} className='absolute top-16'/>
                    <div className="flex border-4 border-[--second-primary-color] hover:p-3 rounded-md cursor-pointer ease-in-out duration-500">
                        <button className='text-xl bg-[--third-primary-color] rounded-md py-8 w-full'>
                            مراکز  خدماتی
                        </button>
                    </div>
                </div>
        </section>
    )
}

export { Centers }