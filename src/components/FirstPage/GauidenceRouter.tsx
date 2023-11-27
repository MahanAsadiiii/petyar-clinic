import Image from 'next/image'
import Link from 'next/link'
import { icon7, icon8 } from "@/utilities/Index"

const GauidenceRouter = () => {
    return (
        <div id='guiddence' className="w-full flex justify-center lg:mb-20">
            <div className="border-2 border-[--second-primary-color] lg:w-4/5 p-3 rounded-md">
                <div className='flex flex-col gap-10 bg-[--third-primary-color] py-6 px-3 lg:px-8 rounded-md'>
                    <div className="flex flex-col gap-3 bg-[--sixth-primary-color] p-5 rounded-md border-2 border-[--second-primary-color] ">
                        <h3 className='text-center lg:text-right text-2xl '>توجه:</h3>
                        <p className='leading-7 text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 justify-evenly w-full">
                        <Link href={'/guidance'} className="flex p-2 items-center mx-auto border-2 border-[--second-primary-color] rounded-md h-full hover:scale-90 ease-in-out duration-500">
                            <div className="flex flex-col gap-2 w-full ">
                                <h2 className="bg-[--fifth-primary-color] px-4 py-2 w-full mx-auto rounded-md text-xl flex justify-center">راهنمای تغذیه</h2>
                                <div className="bg-[--fifth-primary-color] p-5 rounded-md">
                                    <Image alt='icons' src={icon8} width={170} />
                                </div>
                            </div>
                        </Link>
                        <Link href={'/guidance'} className="flex p-2 items-center mx-auto border-2 border-[--second-primary-color] rounded-md h-full hover:scale-90 ease-in-out duration-500">
                            <div className="flex flex-col gap-2 w-full ">
                                <h2 className="bg-[--fifth-primary-color] px-4 py-2 w-full mx-auto rounded-md text-xl flex justify-center">راهنمای مراقبتی</h2>
                                <div className="bg-[--fifth-primary-color] px-4 py-5 rounded-md">
                                    <Image alt='icons' src={icon7 } width={180} />
                                </div>
                            </div>
                        </Link>
                        <Link href={'/guidance'} className="flex p-2 items-center mx-auto border-2 border-[--second-primary-color] rounded-md h-full hover:scale-90 ease-in-out duration-500">
                            <div className="flex flex-col gap-2 w-full ">
                                <h2 className="bg-[--fifth-primary-color] px-4 py-2 w-full mx-auto rounded-md text-xl flex justify-center">راهنمای پزشکی</h2>
                                <div className="bg-[--fifth-primary-color] px-4 py-5 rounded-md">
                                    <Image alt='icons' src={icon7} width={180} />
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