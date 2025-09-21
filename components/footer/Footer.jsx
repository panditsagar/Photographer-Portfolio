// components/Footer.jsx
"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 text-left md:text-left">
        {/* Left - Social Links */}
        <div className="flex flex-col gap-2 text-[#B5B5B5] font-[600] text-[22px] md:text-[34px]">
          <Link
            href="https://instagram.com"
            target="_blank"
            className="hover:text-black"
          >
            Instagram
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-black"
          >
            Linkedin
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="hover:text-black"
          >
            GitHub
          </Link>
        </div>

        {/* Center - Contact Info */}
        <div className="flex flex-col items-start md:items-start space-y-2">
          <div>
            <span className="text-[#B5B5B5] text-[22px] md:text-[33px] font-semibold block md:inline mr-0 md:mr-6">
              Email
            </span>
            <span className="font-extrabold text-[28px] md:text-[42px] block md:inline">
              hello@smstudio.com
            </span>
          </div>
          <div>
            <span className="text-[#B5B5B5] text-[22px] md:text-[30px] font-semibold block md:inline mr-0 md:mr-6">
              Phone
            </span>
            <span className="font-extrabold text-[28px] md:text-[42px] block md:inline">
              +91 9568136701
            </span>
          </div>

          <div className="mt-6 text-[#B5B5B5] text-[20px] md:text-[34px] font-[600] text-center md:text-left">
            © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
