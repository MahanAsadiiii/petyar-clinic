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
      <div className={`flex items-end h-3/4 justify-evenly relative ${modal && 'blur-md opacity-50'}`}>
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
        <div className="flex absolute top-1/4 justify-center w-full">
          <div className="flex justify-around border-2 border-[--second-primary-color] rounded-md w-1/2 p-3 ">
            <div className="flex flex-col items-end gap-5 bg-[--third-primary-color] rounded-md p-5">
              <CloseSquare onClick={() => closeHandler()} size="26" color="#ffffff" className='cursor-pointer' />
              <p className=' text-justify cursor-default'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
              <a className='flex items-center gap-5 mt-5 w-full' href="Tel: 2222222">
                <h3>شماره تماس : 0212222222</h3>
                <Call size="32" color="#ffffff" />
              </a>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export { VideoCall }