import React from 'react'
import { Call, CloseSquare } from 'iconsax-react'


interface propType {
  closeHandler: () => void
}


const Modal = ({closeHandler}: propType) => {



    return (
        <div className=' w-screen fixed top-0 left-0 h-screen flex items-center z-10 bg-[#bdbdbdc9]' onClick={closeHandler}>
            <div className="flex justify-center w-full">
                <div className="flex justify-around bg-[--primary-color] border-2 border-[--second-primary-color] rounded-md lg:w-1/2 p-3 shadow-2xl shadow-black" onClick={(e) => { e.stopPropagation() }}>
                    <div className="flex flex-col items-end gap-2 ">
                        <div className="bg-[--third-primary-color] rounded-md p-3 flex w-full justify-end">
                            <CloseSquare onClick={closeHandler} size="38" color="#ffffff" className='cursor-pointer' />
                        </div>
                        <div className="flex flex-col gap-5 bg-[--third-primary-color] rounded-md px-7 py-9">
                            <p className=' text-justify cursor-default'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                            <a className='flex justify-end items-center gap-5 mt-5 w-full' href="Tel: 2222222">
                                <h3>شماره تماس : 0212222222</h3>
                                <Call size="32" color="#ffffff" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Modal }