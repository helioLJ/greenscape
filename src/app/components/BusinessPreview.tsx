import Image from "next/image"
import Link from "next/link"

interface BusinessPreviewProps {
    id: number
    name: string
    rate: number
    address: string
    openingTime: string
    imgUrl: string
}

export function BusinessPreview({ id, name, rate, address, openingTime, imgUrl }: BusinessPreviewProps) {
    return (
        <Link href={`/business/${id}`} className="border h-[250px] border-green-700 text-zinc-700 flex items-center justify-between rounded">
            <div className="space-y-3 p-4">
                <h3 className="font-semibold text-zinc-800">{name}</h3>
                <div className="flex gap-4">
                <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => {
                        const starClass =
                            index < rate
                            ? 'bg-blue-400'
                            : index - 0.5 < rate
                            ? 'bg-blue-400 bg-opacity-50'
                            : 'bg-gray-300';
                        return (
                                <div
                                key={index}
                                className={`w-5 h-5 ${starClass} rounded-full`}
                                ></div>
                            );
                        })}
                    </div>
                    <p className="">{rate}</p>
                </div>

                <p>{address}</p>

                <p>Open at {openingTime}</p>
            </div>

            <div style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '50%',
                height: '100%',
            }} >
                {/* <Image className="rounded" width={130} height={130} src={imgUrl} alt="Business Photo" /> */}
            </div>
        </Link>
    )
}