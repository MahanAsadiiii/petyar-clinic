import React, { useState, useEffect } from 'react'
import { icon6 } from '@/utilities/Index'
import Image from 'next/image'
import { Modal } from '@/components/index'



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
          <div className="flex w-full group hover:p-2 border-2 border-[--second-primary-color] p-0 rounded-md cursor-pointer ease-in-out duration-500">
            <button onClick={() => rullAccept()} className='text-lg bg-[--third-primary-color] rounded-md w-full py-5'>
              شرایط را قبول دارم
            </button>
          </div>
        </div>
      </div>
      {/* here I add modal */}
      
      {modal &&
        <Modal closeHandler={closeHandler}/>
      }
    </div>
  )
}

export { VideoCall }