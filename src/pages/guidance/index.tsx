import { MainHeader } from '@/components'
import { icon9 } from '@/utilities/Image'
import Image from 'next/image'
import React from 'react'

function gaidance() {
    return (
        <main className='px-10'>
            <MainHeader />
            <div className='border-2 border-[--second-primary-color] p-3 rounded-md mx-10 mt-10'>
                <div className="flex flex-col gap-5 bg-[--third-primary-color] ">
                    <h1 className="bg-[--sixth-primary-color] text-xl p-4 rounded-md">راهنمایی بر اساس علائم بیماری</h1>
                    <form id='input-form' className="p-5 relative flex flex-col items-center gap-10 w-full">
                        {/* <Image alt='' src={icon9} width={600} className='absolute -z-10' /> */}
                        <div className="flex flex-col gap-4 w-full items-start">
                            <h2 className='text-lg'>علائم عمومی:</h2>
                            <div className="flex gap-10">
                                <div className="flex gap-3">
                                    <label htmlFor="d1" className='cursor-pointer text-lg' >کم آبی</label>
                                    <input type="checkbox" id='d1' className='scale-150' />
                                </div>
                                <div className="flex gap-3">
                                    <label htmlFor="d2" className='cursor-pointer text-lg' >کم آبی</label>
                                    <input type="checkbox" id='d2' className='scale-150' />
                                </div>
                                <div className="flex gap-3">
                                    <label htmlFor="d1" className='cursor-pointer text-lg' >کم آبی</label>
                                    <input type="checkbox" id='d1' className='scale-150' />
                                </div>
                                <div className="flex gap-3">
                                    <label htmlFor="d1" className='cursor-pointer text-lg' >کم آبی</label>
                                    <input type="checkbox" id='d1' className='scale-150' />
                                </div>
                                <div className="flex gap-3">
                                    <label htmlFor="d1" className='cursor-pointer text-lg' >کم آبی</label>
                                    <input type="checkbox" id='d1' className='scale-150' />
                                </div>
                            </div>
                        </div>
                        <div className="flex max-w-max group hover:p-2 border-2 border-[--second-primary-color] rounded-md cursor-pointer ease-in-out duration-500">
                            <button className='text-xl bg-[--sixth-primary-color] rounded-md w-full py-4 px-10'>تشخیص</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default gaidance