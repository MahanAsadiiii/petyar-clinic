// import React, { useState, useEffect } from 'react'
// import { Location, CloseSquare } from 'iconsax-react'
// import { gql, useQuery } from '@apollo/client'
// import { ThreeDots } from "react-loader-spinner"
// import Image from 'next/image'


// interface detailtype {
//     Id: number | undefined
//     onClose: any
// }


// const Get_CenterDetail = gql`
//   query medicalCenterBy($medicalCenterId: Int!) {
//     medicalCenterBy(medicalCenterId: $medicalCenterId) {
//     title
//       medicalCenterMeta {
//         address
//         desc
//         phoneNumber
//         image {
//           sourceUrl
//         }
//     }
//     }
//   }
// `;
// const MedicalCenterModal = ({ Id, onClose }: detailtype) => {

//     const { loading, error, data } = useQuery(Get_CenterDetail, {
//         variables: {
//             medicalCenterId: Id
//         }
//     })
//     if (loading) return (
//         <div className='flex justify-center items-center border-2 border-[--second-primary-color] rounded-md min-h-[400px]'>
//             <ThreeDots
//                 height="100"
//                 width="100"
//                 radius="9"
//                 color="#eea040"
//                 ariaLabel="three-dots-loading"
//                 visible={true}
//             />
//         </div>);
//     if (error) return <div>Error: {error.message}</div>;

//     const centerInfo = data.medicalCenterBy

//     return (
//         <div className="w-screen fixed top-0 left-0 h-screen flex items-center z-10 bg-[#bdbdbdc9]">
//             <div className="w-full flex justify-center">
//                 <div className="flex justify-around w-2/3 items-center border-2 border-[--second-primary-color] rounded-md p-3 bg-[--primary-color] shadow-2xl shadow-black">
//                     {centerInfo &&
//                         <div className="flex flex-col w-full gap-2 justify-evenly ">
//                             <div className="flex gap-2">
//                                 <div className="w-full flex  items-center bg-[--third-primary-color] pr-5 rounded-md">
//                                     <h2 className='text-xl cursor-default'>{centerInfo.title}</h2>
//                                 </div>
//                                 <div className="bg-[--third-primary-color] p-2 rounded-md">
//                                     <CloseSquare onClick={onClose} size="44" color="#ffefcd" className='cursor-pointer' />
//                                 </div>
//                             </div>
//                             <div className="flex gap-6 bg-[--third-primary-color] p-4 rounded-md min-h-[250px]">
//                                 <div className="max-w-[350px]">
//                                     <div className="flex flex-col gap-2 border-2 border-[--second-primary-color] rounded-md p-2">
//                                         <div className="w-full flex justify-center py-5 bg-[--fifth-primary-color] rounded-md px-5 ">
//                                             {centerInfo.medicalCenterMeta.image?.sourceUrl ?
//                                                 <Image src={centerInfo.medicalCenterMeta.image.sourceUrl} alt='image' decoding='async' width={300} height={50} quality={100} />
//                                                 :
//                                                 <Location size="150" color="#ffefcd" />}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="w-full flex flex-col gap-4 cursor-default">
//                                     <div className="flex gap-3 items-baseline">
//                                         <h3 className='text-xl'>آدرس:</h3>
//                                         <h4 className='text-base'>
//                                             {centerInfo.medicalCenterMeta.address}
//                                         </h4>
//                                     </div>
//                                     <div className="flex gap-3 items-baseline">
//                                         <h3 className='text-xl'>شماره تماس مرکز:</h3>
//                                         <h4 className='text-base'>
//                                             {centerInfo.medicalCenterMeta.phoneNumber}
//                                         </h4>
//                                     </div>
//                                     <div className="flex gap-3 items-baseline">
//                                         <h3 className='text-xl'>توضیحات:</h3>
//                                         <h4 className='text-base'>
//                                             {centerInfo.medicalCenterMeta.desc}
//                                         </h4>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export { MedicalCenterModal }
