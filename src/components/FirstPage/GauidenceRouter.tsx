import Image from 'next/image'
import Link from 'next/link'
import { icon7, icon8 } from "@/utilities/Index"

const GauidenceRouter = () => {
    return (
        <div className="w-full flex justify-center my-20">
            <div className="border-2 border-[--second-primary-color] w-4/5 p-3 rounded-md">
                <div className='flex flex-col gap-10 bg-[--third-primary-color] py-6 px-8 rounded-md'>
                    <div className="flex flex-col gap-3 bg-[--sixth-primary-color] p-5 rounded-md border-2 border-[--second-primary-color] ">
                        <h3 className='text-2xl '>توجه:</h3>
                        <p className=''>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    </div>
                    <div className="flex justify-evenly w-full">
                        <Link href={'/guidance'} className="flex p-2 items-center mx-auto border-2 border-[--second-primary-color] rounded-md h-full hover:scale-90 ease-in-out duration-500">
                            <div className="flex flex-col gap-3 w-full ">
                                <h2 className="bg-[--fifth-primary-color] px-4 py-2 w-full mx-auto rounded-md text-2xl flex justify-center">راهنمای تغذیه</h2>
                                <div className="bg-[--fifth-primary-color] p-5 rounded-md">
                                    <Image alt='icons' src={icon8} width={200} height={200} />
                                </div>
                            </div>
                        </Link>
                        <Link href={'/guidance'} className="flex p-2 items-center mx-auto border-2 border-[--second-primary-color] rounded-md h-full hover:scale-90 ease-in-out duration-500">
                            <div className="flex flex-col gap-3 w-full ">
                                <h2 className="bg-[--fifth-primary-color] px-4 py-2 w-full mx-auto rounded-md text-2xl flex justify-center">راهنمای مراقبتی</h2>
                                <div className="bg-[--fifth-primary-color] px-4 py-5 rounded-md">
                                    <Image alt='icons' src={icon7 } width={210} height={200} />
                                </div>
                            </div>
                        </Link>
                        <Link href={'/guidance'} className="flex p-2 items-center mx-auto border-2 border-[--second-primary-color] rounded-md h-full hover:scale-90 ease-in-out duration-500">
                            <div className="flex flex-col gap-3 w-full ">
                                <h2 className="bg-[--fifth-primary-color] px-4 py-2 w-full mx-auto rounded-md text-2xl flex justify-center">راهنمای پزشکی</h2>
                                <div className="bg-[--fifth-primary-color] px-4 py-5 rounded-md">
                                    <Image alt='icons' src={icon7} width={210} height={200} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { GauidenceRouter }