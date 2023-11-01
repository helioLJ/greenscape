
import Image from "next/image";
import JSONdata from '../../api/data.json'
import AddressIcon from '../../../../public/maps-and-flags.png'
import PhoneIcon from '../../../../public/phone-call.png'
import WebIcon from '../../../../public/web.png'
import TimeIcon from '../../../../public/time.png'
import { CommentForm } from "@/app/components/CommentForm";
import { Comments } from "@/app/components/Comments";

function getBusiness(id: number) {
    return JSONdata.find(item => item.id == id);
}

export default function Page({ params }: { params: { id: number } }) {
    const data = getBusiness(params.id)

    return (
        <main>
            <div className="w-full h-24" style={{
                backgroundImage: `url(${data?.imgUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                height: '400px',
            }}></div>

            <div className="py-8 px-48 flex">
                <div className="w-1/2">
                    <h1 className=" text-5xl font-normal text-green-600">{data?.name}</h1>

                    <div className="flex mt-4 gap-8 items-center">
                        <div className="flex">
                            {Array.from({ length: 5 }).map((_, index) => {
                                const starClass =
                                    index < (data?.rate ?? 1)
                                    ? 'bg-blue-400'
                                    : index - 0.5 < (data?.rate ?? 1)
                                    ? 'bg-blue-400 bg-opacity-50'
                                    : 'bg-gray-300';
                                return (
                                        <div
                                        key={index}
                                        className={`w-5 h-5 ${starClass} rounded-full`}
                                        ></div>
                                    );
                                })}
                            <p className="ml-4 text-zinc-800 font-bold">{data?.rate}</p>
                        </div>
                    </div>

                    <ul className="mt-6 space-y-5">
                        <li className="flex gap-4">
                            <Image src={AddressIcon} alt="Address Icon" width={24} height={24} />
                            <p>{data?.address}</p>
                        </li>
                        <li className="flex gap-4">
                            <Image src={PhoneIcon} alt="Phone Icon" width={24} height={24} />
                            <p>{data?.phone}</p>
                        </li>
                        <li className="flex gap-4">
                            <Image src={WebIcon} alt="Web Icon" width={24} height={24} />
                            <p>{data?.website}</p>
                        </li>
                        <li className="flex gap-4">
                            <Image src={TimeIcon} alt="Time Icon" width={24} height={24} />
                            <p>{data?.openingTime}</p>
                        </li>
                    </ul>
                </div>

                <Comments data={data?.reviews} />
            </div>
        </main>
    )
}