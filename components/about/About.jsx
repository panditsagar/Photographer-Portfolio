// components/AboutSection.jsx
"use client"

import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="bg-[#FFFFFF] px-4 sm:px-6 pt-10 sm:pt-20 pb-12 sm:pb-16 flex flex-col items-center text-center">
      {/* Image */}
      <div className="mb-8 sm:mb-10 w-full max-w-5xl">
        <Image
          src="/about.png"
          alt="Suraj - Wedding Photographer"
          width={1000}
          height={400}
          className="object-cover w-full h-[300px] sm:h-[350px] md:h-[500px]"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-3xl space-y-6 text-[16px] sm:text-[18px] md:text-[20px] text-black font-[600] leading-relaxed sm:leading-7">
        <p>
          I'm a wedding photographer with a passion for capturing timeless
          moments and authentic emotions. His studio specializes in elegant
          wedding photography, creating visual stories that couples can cherish
          for a lifetime.
        </p>

        <p>
          Working with couples, families, and event planners, Suraj brings years
          of expertise and a unique artistic perspective to every project —
          whether it’s an intimate ceremony or a grand celebration.
        </p>

        <p>
          I'm currently accepting clients for 2025 weddings and special
          occasions.
        </p>

        <p>
          For inquiries:{" "}
          <a
            href="mailto:hello@smstudio.com"
            className="font-semibold underline hover:text-black"
          >
            hello@smstudio.com
          </a>
        </p>
      </div>
    </section>
  )
}
