import { useRouter } from 'next/router'
import { Location, CloseSquare } from 'iconsax-react'
import Image from 'next/image'

interface proptype {
    MedicalCenterData?: any
    ServiceCenterData?: any
}



const CenterModal = ({ MedicalCenterData, ServiceCenterData }: proptype) => {
    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }

    return (
        <div onClick={handleGoBack} className="w-screen fixed top-0 left-0 h-screen flex items-center z-10 bg-[#bdbdbdc9]">
            <div className="w-full flex justify-center">
                <div className="flex justify-around w-2/3 items-center border-2 border-[--second-primary-color] rounded-md p-3 bg-[--primary-color] shadow-2xl shadow-black" onClick={(e) => { e.stopPropagation() }}>
                    <div className="flex flex-col w-full gap-2 justify-evenly ">
                        <div className="flex gap-2">
                            <div className="w-full flex  items-center bg-[--third-primary-color] pr-5 rounded-md">
                                <h2 className='text-xl cursor-default'>{MedicalCenterData ? MedicalCenterData.title : ServiceCenterData.title}</h2>
                            </div>
                            <div onClick={handleGoBack} className="bg-[--third-primary-color] p-2 rounded-md">
                                <CloseSquare size="44" color="#ffefcd" className='cursor-pointer' />
                            </div>
                        </div>
                        <div className="flex gap-6 bg-[--third-primary-color] p-4 rounded-md min-h-[250px]">
                            <div className="max-w-[350px]">
                                <div className="flex flex-col gap-2 border-2 border-[--second-primary-color] rounded-md p-2">
                                    <div className="w-full flex justify-center py-5 bg-[--fifth-primary-color] rounded-md px-5 ">
                                        {MedicalCenterData ? (
                                            MedicalCenterData.medicalCenterMeta.image?.sourceUrl ?
                                                <Image src={MedicalCenterData.medicalCenterMeta.image.sourceUrl} alt='image' decoding='async' width={300} height={50} quality={100} />
                                                :
                                                <Location size="150" color="#ffefcd" />
                                        ) :
                                        ServiceCenterData.serviceCenterMeta.image?.sourceUrl ?
                                            <Image src={ServiceCenterData.serviceCenterMeta.image.sourceUrl} alt='image' decoding='async' width={300} height={50} quality={100} />
                                            :
                                            <Location size="150" color="#ffefcd" />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-4 cursor-default">
                                <div className="flex gap-3 items-baseline">
                                    <h3 className='text-xl'>آدرس:</h3>
                                    <h4 className='text-base'>
                                        {MedicalCenterData ? MedicalCenterData.medicalCenterMeta.address : ServiceCenterData.serviceCenterMeta.address}
                                    </h4>
                                </div>
                                <div className="flex gap-3 items-baseline">
                                    <h3 className='text-xl'>شماره تماس مرکز:</h3>
                                    <h4 className='text-base'>
                                        {MedicalCenterData ? MedicalCenterData.medicalCenterMeta.phoneNumber : ServiceCenterData.serviceCenterMeta.phoneNumber}
                                    </h4>
                                </div>
                                <div className="flex gap-3 items-baseline">
                                    <h3 className='text-xl'>توضیحات:</h3>
                                    <h4 className='text-base text-justify pl-2 leading-8'>
                                        {MedicalCenterData ? MedicalCenterData.medicalCenterMeta.desc : ServiceCenterData.serviceCenterMeta.desc}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CenterModal }