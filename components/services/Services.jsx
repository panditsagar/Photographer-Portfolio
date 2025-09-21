// app/services/page.jsx
"use client"
import Image from "next/image"

const services = [
  {
    title: "Weddings",
    duration: "6 hr",
    price: "Price Varies",
    image: "/portfolio4.png",
  },
  {
    title: "Engagement",
    duration: "1 hr",
    price: "Price Varies",
    image: "/portfolio5.png",
  },
  {
    title: "Family",
    duration: "3 hr",
    price: "Price Varies",
    image: "/portfolio1.png",
  },
  {
    title: "Maternity",
    duration: "1 hr 30 min",
    price: "Price Varies",
    image: "/portfolio2.png",
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center py-10 md:py-16 px-4 md:px-20 space-y-12 md:space-y-20">
      <h1 className="text-black text-[32px] md:text-[55px] font-extrabold max-w-[100%] md:max-w-[60%] leading-[38px] md:leading-[55px] text-center py-6 md:py-10">
        “CHOOSE THE PERFECT SESSION TAILORED FOR YOU AND YOUR LOVED ONES”
      </h1>

      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-center w-full"
        >
          {/* Image */}
          <div className="w-full md:w-[500px] h-[250px] md:h-[450px] relative">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Card */}
          <div className=" bg-black w-full md:w-[450px] p-8 md:p-16 text-center md:text-left shadow md:ml-[-60px] mt-[-20px] md:mt-0 z-20">
            <h2 className=" text-white font-semibold text-[24px] md:text-[34px]">
              {service.title}
            </h2>
            <hr className="my-4 md:my-8 border-t  border-white" />
            <p className="mb-1  text-white font-medium text-[16px] md:text-[18px]">
              {service.duration}
            </p>
            <p className="mb-6   text-white font-medium text-[16px] md:text-[18px]">
              {service.price}
            </p>
            <button className="border  border-white  text-white font-medium px-4 py-2 text-[14px] md:text-[16px] hover:bg-black md:hover:bg-white hover:text-white md:hover:text-black transition">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
