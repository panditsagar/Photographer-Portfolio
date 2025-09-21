"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
    {
        text: "“The photos exceeded our expectations — timeless, elegant, and full of emotion. Suraj has an incredible ability to capture candid moments without making us feel posed or pressured. He was patient, kind, and professional throughout, and the end result was a gallery that feels like a storybook of our special day. Our families are still raving about the pictures.”",
        name: "Rahul & Ananya",
    },
    {
        text: "“We couldn’t have asked for a better photographer. From the pre-wedding shoot to the final ceremony, Suraj brought creativity, warmth, and an artistic eye that elevated every frame. He went above and beyond to make us feel comfortable, and it truly shows in the photos. His work is not just photography, it’s storytelling — and he told ours with love and perfection.”",
        name: "Rohan & Priya",
    },
    {
        text: "“Suraj is a true artist. His ability to capture the essence of our wedding day was nothing short of magical. Every photo tells a story, and we are so grateful for the memories he has preserved for us. His professionalism, creativity, and genuine passion for his craft made the entire experience enjoyable and stress-free. We highly recommend him to anyone looking for a wedding photographer who goes above and beyond.”",
        name: "Karan & Sneha",
    },
    {
        text: "“Suraj captured our wedding beautifully. Every single detail — from the smallest glance to the grandest celebration — feels alive in the photos. We were amazed at how natural and effortless everything looked, as if he was invisible while shooting. Looking through our album feels like reliving the day all over again, and we couldn’t be happier.”",
        name: "Aarav & Meera",
    },
    {
        text: "“From the moment we met Suraj, we knew we were in good hands. His friendly demeanor and keen eye for detail made us feel at ease throughout the entire process. The photos he delivered were stunning — vibrant, emotional, and perfectly capturing the joy of our wedding day. We are beyond thrilled with the results and can’t thank him enough for his incredible work.”",
        name: "Vikram & Anjali",
    },
    {
        text: "“Suraj’s photography is simply exceptional. He has a unique talent for capturing the beauty and emotion of a wedding day in a way that feels authentic and timeless. His attention to detail and ability to find the perfect moments to photograph made all the difference. We are so grateful for the memories he has created for us and would recommend him to anyone looking for a wedding photographer who truly cares about his craft.”",
        name: "Aditya & Riya",
    },
]

export default function TestimonialSection() {
    const [index, setIndex] = useState(0)

    const prev = () => {
        setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
    }

    const next = () => {
        setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))
    }

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 3000)
        return () => clearInterval(interval)
    }, [index])

    return (
        <section className="text-black py-12 sm:py-16 md:py-20 px-4 sm:px-10 md:px-20 text-center relative overflow-hidden">
            {/* Heading */}
            <h2 className="uppercase tracking-widest text-[#B5B5B5] mb-10 sm:mb-14 md:mb-20 text-[28px] sm:text-[28px] md:text-[34px] font-[600]">
                What Clients Are Saying
            </h2>

            {/* Sliding container */}
            <div className="relative w-full mx-auto overflow-hidden">
                <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="w-full flex-shrink-0 px-2 sm:px-6 flex flex-col items-center text-center"
                        >
                            <blockquote className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] line-clamp-7 max-w-xl sm:max-w-2xl font-[600] leading-relaxed">
                                {t.text}
                            </blockquote>
                            <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-[500] text-[#B5B5B5]">
                                {t.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrows */}
            <button onClick={prev} className="absolute hidden sm:block left-20 top-1/2 -translate-y-1/2 text-[#B5B5B5] hover:text-black cursor-pointer" > <ChevronLeft size={50} /> </button>
            <button onClick={next} className="absolute hidden sm:block  right-20 top-1/2 -translate-y-1/2 text-[#B5B5B5] hover:text-black cursor-pointer" > <ChevronRight size={50} /> </button>
        </section>
    )
}
