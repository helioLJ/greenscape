import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/green.png'
import { BusinessPreview } from "./components/BusinessPreview";
import JsonData from './api/data.json'

export default function Home() {
  return (
    <main className="p-24 space-y-40">
      {/* Hero Section */}
      <section id="about" className="h-[70vh] flex">
        <div className="w-1/2 space-y-5 flex flex-col justify-center pb-[100px]">
          <h1 className="text-5xl">GreenScape</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eius incidunt laboriosam, ex inventore laborum ab quam voluptates suscipit optio corporis quis totam aliquid consectetur nihil veritatis ipsa veniam nesciunt?</p>
          <Link className="block text-white bg-blue-500 p-4 rounded w-48 text-center hover:bg-blue-600 transition-colors" href='#business'>Review Business</Link>
        </div>

        <div className="w-1/2 flex justify-center">
          <Image src={Logo} alt='Logo' height={400} width={400} />
        </div>
      </section>

      {/* Reviews Section */}
      <section id="business" className="">
        <div className="grid grid-cols-2 gap-4">
          {
            JsonData.map((data) => (
              <BusinessPreview key={data.id} id={data.id} address={data.address} name={data.name} imgUrl={data.imgUrl} openingTime={data.openingTime} rate={data.rate} />
            ))
          }
        </div>
      </section>
    </main>
  )
}
