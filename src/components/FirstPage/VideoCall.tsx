import React, { useState, useEffect } from 'react'
import { icon6 } from '@/utilities/Index'
import Image from 'next/image'
import { Call, CloseSquare } from 'iconsax-react'

interface rulesAndTermsType {
    videoCallRullesAndTerms: string
}

const VideoCall = ({videoCallRullesAndTerms}:rulesAndTermsType) => {

  const [modal, setModal] = useState(false)

  const rullAccept = () => {
    setModal(true)
  }
  const closeHandler = () => {
    setModal(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', closeHandler);

    return () => {
      document.removeEventListener('keydown', closeHandler);
    };
  }, []);


  return (
    // I get data from CMS and pass to this section to show the data

    <div className='mt-36 h-screen relative' id='videoSec'>
      <div className={`flex items-end h-3/4 justify-evenly relative`}>
        <div className="flex w-1/2 p-3 border-2 border-[--second-primary-color] rounded-md">
          <div className="bg-[--third-primary-color] rounded-md w-full">
            <p className='p-5 text-justify cursor-default '>
              {videoCallRullesAndTerms}
            </p>
          </div>
        </div>
        <div className="w-[15%] flex">
          <Image alt={'Icon6'} src={icon6} height={430} className='absolute top-0 left-36 opacity-40 -z-10'></Image>
          <div className="flex  w-full group hover:p-2 border-2 border-[--second-primary-color] p-0 rounded-md cursor-pointer ease-in-out duration-500">
            <button onClick={() => rullAccept()} className='text-lg bg-[--third-primary-color] rounded-md w-full py-5'>
              شرایط را قبول دارم
            </button>
          </div>
        </div>
      </div>
      {/* here I add modal */}
      
      {modal &&
        <div className=' w-screen fixed top-0 left-0 h-screen flex items-center z-10 bg-[#bdbdbdc9]' onClick={closeHandler}>
          <div className="flex justify-center w-full">
            <div className="flex justify-around bg-[--primary-color] border-2 border-[--second-primary-color] rounded-md w-1/2 p-3 shadow-2xl shadow-black" onClick={(e) => { e.stopPropagation() }}>
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
      }
    </div>
  )
}

export { VideoCall }