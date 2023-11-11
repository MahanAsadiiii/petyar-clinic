import React, { useState, useEffect } from 'react'
import { Location, CloseSquare } from 'iconsax-react'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { ThreeDots } from "react-loader-spinner"
import Image from 'next/image'


interface MedicalCenterMetaType {
    address: string;
    desc: string;
    phoneNumber: string;
    image: {
        sourceUrl: string;
    };
}

interface MedicalCenterType {
    title: string;
    medicalCenterMeta: MedicalCenterMetaType;
}

interface detailtype {
    Id: number | undefined
    onClose: any
}


const Modal = ({ Id, onClose }: detailtype) => {

    const [data, setData] = useState<MedicalCenterType>();

    useEffect(() => {
        const fetchData = async () => {
            if (!Id) return; // Ensure Id is available

            const Get_CenterDetail = gql`
          query medicalCenterBy($medicalCenterId: Int!) {
            medicalCenterBy(medicalCenterId: $medicalCenterId) {
            title
              medicalCenterMeta {
                address
                desc
                phoneNumber
                image {
                  sourceUrl
                }
            }
            }
          }
        `;
            try {
                const { data } = await client.query({
                    query: Get_CenterDetail,
                    variables: {
                        medicalCenterId: Id,
                    },
                });

                setData(data.medicalCenterBy);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [Id]); // Run the effect when Id changes


    return (
        <div className="flex border-4 border-[--second-primary-color] rounded-md p-3">
            {data ?
                <div className="flex flex-col w-full gap-2 justify-evenly ">
                    <div className="flex gap-2">
                        <div className="w-full flex  items-center bg-[--third-primary-color] pr-5 rounded-md">
                            <h2 className='text-xl cursor-default'>{data.title}</h2>
                        </div>
                        <div className="bg-[--third-primary-color] p-2 rounded-md">
                            <CloseSquare onClick={onClose} size="44" color="#ffefcd" className='cursor-pointer' />
                        </div>
                    </div>
                    <div className="flex gap-6 bg-[--third-primary-color] p-4 rounded-md min-h-[250px]">
                        <div className="max-w-[350px]">
                            <div className="flex flex-col gap-2 border-4 border-[--second-primary-color] rounded-md p-2">
                                <div className="w-full flex justify-center py-5 bg-[--fifth-primary-color] rounded-md px-5 ">
                                    {data.medicalCenterMeta.image?.sourceUrl ?
                                        <Image src={data.medicalCenterMeta.image.sourceUrl} alt='image' decoding='async' width={300} height={50} quality={100} />
                                        :
                                        <Location size="150" color="#ffefcd" />}
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4 cursor-default">
                            <div className="flex gap-3 items-baseline">
                                <h3 className='text-xl'>آدرس:</h3>
                                <h4 className='text-base'>
                                    {data.medicalCenterMeta.address}
                                </h4>
                            </div>
                            <div className="flex gap-3 items-baseline">
                                <h3 className='text-xl'>شماره تماس مرکز:</h3>
                                <h4 className='text-base'>
                                    {data.medicalCenterMeta.phoneNumber}
                                </h4>
                            </div>
                            <div className="flex gap-3 items-baseline">
                                <h3 className='text-xl'>توضیحات:</h3>
                                <h4 className='text-base'>
                                    {data.medicalCenterMeta.desc}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="mx-auto">
                    <ThreeDots
                        height="100"
                        width="100"
                        radius="9"
                        color="#eea040"
                        ariaLabel="three-dots-loading"
                        visible={true}
                    />
                </div>
            }
        </div>
    )
}

export { Modal }
