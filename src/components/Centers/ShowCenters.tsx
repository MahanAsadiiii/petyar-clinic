import React, { useEffect, useState, useMemo } from 'react'
import { SearchNormal1, Location, CloseSquare } from 'iconsax-react'
import { Modal } from '../index'
import Image from 'next/image'


interface CenterDataType {
    data: any
}

function ShowCenters({ data }: CenterDataType) {

    const [search, setSearch] = useState<string>('');
    const [id, setId] = useState<number>()
    const [modal, setModal] = useState<boolean>(false);
    const [centerSelect, setCenterSelect] = useState<number>()
    const centerDatas = useMemo(() => data?.medicalCenters?.nodes, [data]);


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
                <div className="flex border-4 border-[--second-primary-color] rounded-md w-2/5 p-1">
                    <div className="flex w-full gap-1">
                        <input onChange={(e) => { setSearch(e.target.value) }} type="text" className='w-full text-sm text-center bg-[--third-primary-color] py-1 rounded-md outline-none' placeholder='جست و جو مراکز درمانی و خدماتی' />
                        <div className="bg-[--third-primary-color] p-2 rounded-md">
                            <SearchNormal1 size="32" color="#ffefcd" />
                        </div>
                    </div>
                </div>
                <div className={`flex border-4 border-[--second-primary-color] rounded-md p-2 `}>
                    <div className="flex flex-col w-full gap-1 ">
                        <div className="bg-[--third-primary-color] px-4 py-2 rounded-md">
                            <h2 className="text-2xl cursor-default">لیست مراکز درمانی/ لیست مراکز خدماتی</h2>
                        </div>
                        <div className="grid gap-3 grid-cols-5 bg-[--third-primary-color] p-4 rounded-md relative">
                            {centerDatas ?
                                centerDatas
                                    .filter((center: any) => {
                                        return search.toLowerCase() === ''
                                            ? center
                                            : center.title.toLowerCase().includes(search.toLowerCase())
                                    })

                                    .map((center: any, key: number) => {
                                        return (
                                            <div key={key} onClick={() => NavigatHandler(center.medicalCenterId)} className="flex flex-col gap-2 border-4 border-[--second-primary-color] rounded-md p-2 cursor-pointer">
                                                <div className="hidden">{center.medicalCenterId}</div>
                                                <div className="w-full flex justify-center py-5 bg-[--fifth-primary-color] rounded-md min-h-[120px]">
                                                    {center.medicalCenterMeta.image?.sourceUrl ?
                                                        <Image src={center.medicalCenterMeta.image.sourceUrl} alt='image' decoding='async' width={120} height={100} quality={100} />
                                                        :
                                                        <Location size="120" color="#ffefcd" />}
                                                </div>
                                                <div className="w-full flex justify-center bg-[--fifth-primary-color] rounded-md py-2">
                                                    <h3 className='text-white text-xl'>{center.title}</h3>
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
                    <Modal Id={centerSelect} onClose={closeHandler} />
                </div>
            }
        </>
    )
}

export { ShowCenters }



