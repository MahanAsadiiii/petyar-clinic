import React, { useEffect, useState } from 'react'
import { SearchNormal1, Location } from 'iconsax-react'
import { MedicalCenterModal } from '@/components/index'
import Image from 'next/image'


interface CenterDataType {
    medicalCenters: any
}

function ShowMedicalCenters({ medicalCenters }: CenterDataType) {

    const [search, setSearch] = useState<string>('');
    const [id, setId] = useState<number>()
    const [modal, setModal] = useState<boolean>(false);
    const [centerSelect, setCenterSelect] = useState<number>()

    useEffect(() => {
        setId(id)
    }, [id])


    function NavigatHandler(CenterID: number) {
        setCenterSelect(CenterID)
        setModal(true)
    }
    useEffect(() => {        
        document.addEventListener('keydown', closeHandler);

        return () => {
            document.removeEventListener('keydown', closeHandler);
        };
    }, []);

    function closeHandler() {
        setModal(false)
    }

    return (
        <>
            <section className={`flex flex-col mt-14 gap-2 ${modal && 'blur-md'}`}>
                <div className="flex border-2 border-[--second-primary-color] rounded-md w-2/5 p-1">
                    <div className="flex w-full gap-1">
                        <input onChange={(e) => { setSearch(e.target.value) }} type="text" className='w-full text-sm text-center bg-[--third-primary-color] py-1 rounded-md outline-none' placeholder='جست و جو مراکز درمانی و خدماتی' />
                        <div className="bg-[--third-primary-color] p-2 rounded-md">
                            <SearchNormal1 size="32" color="#ffefcd" />
                        </div>
                    </div>
                </div>
                <div className={`flex border-2 border-[--second-primary-color] rounded-md p-2 `}>
                    <div className="flex flex-col w-full gap-1 ">
                        <div className="bg-[--third-primary-color] px-4 py-2 rounded-md">
                            <h2 className="text-xl cursor-default text-[--second-primary-color]">لیست مراکز درمانی</h2>
                        </div>
                        <div className="grid gap-5 grid-cols-5 bg-[--third-primary-color] p-5 rounded-md relative">
                            {medicalCenters ?
                                medicalCenters
                                    .filter((center: any) => {
                                        return search.toLowerCase() === ''
                                            ? center
                                            : center.title.toLowerCase().includes(search.toLowerCase())
                                    })

                                    .map((center: any, key: number) => {
                                        return (
                                            <div key={key} onClick={() => NavigatHandler(center.medicalCenterId)} className="flex flex-col gap-2 border-2 border-[--second-primary-color] rounded-md p-2 cursor-pointer hover:-translate-y-3">
                                                <div className="hidden">{center.medicalCenterId}</div>
                                                <div className="w-full flex justify-center py-4 bg-[--fifth-primary-color] rounded-md min-h-[160px]">
                                                    {center.medicalCenterMeta.image?.sourceUrl ?
                                                        <Image src={center.medicalCenterMeta.image.sourceUrl} alt='image' decoding='async' width={120} height={100} quality={100} />
                                                        :
                                                        <Location size="120" color="#ffefcd" />}
                                                </div>
                                                <div className="w-full flex justify-center bg-[--fifth-primary-color] rounded-md py-2">
                                                    <h4 className='text-white text-lg'>{center.title}</h4>
                                                </div>
                                            </div>
                                        )
                                    })
                                : null
                            }
                        </div>
                    </div>
                </div>
            </section>
            {modal &&
                <div className={`${modal && ' w-4/5 block absolute top-28 left-32 bg-[--primary-color] rounded-md'}`}>
                    <MedicalCenterModal Id={centerSelect} onClose={closeHandler} />
                </div>
            }
        </>
    )
}

export { ShowMedicalCenters }



