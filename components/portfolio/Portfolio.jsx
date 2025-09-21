"use client"

import { useState } from "react"
import Image from "next/image"

const categories = ["All", "Weddings", "Engagements", "Nature", "Events"]
     
const portfolioItems = [
  { id: 1, category: "Engagements", img: "/portfolio1.png" },
  { id: 2, category: "Engagements", img: "/portfolio2.png" },
  { id: 8, category: "Nature", img: "/portfolio10.jpg" },
  { id: 3, category: "Weddings", img: "/portfolio3.png" },
  { id: 9, category: "Nature", img: "/portfolio9.jpg" },
  { id: 4, category: "Events", img: "/portfolio4.png" },
  { id: 5, category: "Weddings", img: "/portfolio5.png" },
  { id: 6, category: "Events", img: "/portfolio6.png" },
  { id: 7, category: "Nature", img: "/portfolio7.jpg" },
  { id: 10, category: "Nature", img: "/portfolio8.jpg" },
]

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("All")

  const filteredItems =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab)

  return (
    <section className="px-4 sm:px-10 md:px-20 pb-16 py-8">
      {/* Tabs */}
      <div className="flex gap-4 sm:gap-6 justify-start mb-10 text-[20px] sm:text-[20px] md:text-[24px] font-semibold border-b-2 md:border-b-3 border-[#B5B5B5] overflow-x-auto whitespace-nowrap   no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`pb-1 transition cursor-pointer ${
              activeTab === cat
                ? "text-black"
                : "text-[#B5B5B5] hover:text-[#858080]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden group shadow-sm 
                       transition-all duration-500 ease-in-out hover:rounded-2xl"
          >
            <Image
              src={item.img}
              alt={`Portfolio item ${item.id}`}
              width={500}
              height={400}
              className="object-cover w-full h-[350px] sm:h-[300px] md:h-[400px] group-hover:scale-105 duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
