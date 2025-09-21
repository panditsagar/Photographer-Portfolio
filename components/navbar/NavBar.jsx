// components/Navbar.jsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import ContactModal from "../contact/Contact"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const links = [
    { name: "Portfolio", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "", align: "right" },
  ]

  return (
    <>
      <nav className="sticky top-0 z-60 flex items-center justify-between px-6 md:px-20 py-5 bg-[#ffffff]">
        {/* Logo */}
        <Link href="/">
          <div className="font-extrabold text-[28px] md:text-[36px]">SM STUDIO</div>
        </Link>

        {/* Desktop Center Links */}
        <div className="hidden md:flex gap-2 text-[20px] md:text-[34px] mx-auto">
          {links
            .filter((link) => link.align !== "right")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[600] transition hover:text-[#858080] ${pathname === link.href ? "text-black" : "text-[#B5B5B5]"
                  }`}
              >
                {link.name}
              </Link>
            ))}
        </div>

        {/* Desktop Right Link */}
        <div className="hidden md:block">
          {links
            .filter((link) => link.align === "right")
            .map((link) => (
              <button
                onClick={() => setIsContactOpen(true)}
                key={link.name}
                className={`text-[20px] md:text-[34px] hover:text-[#858080] font-[600] transition ${pathname === link.href ? "text-black" : "text-[#B5B5B5]"
                  }`}
              >
                {link.name}
              </button>
            ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black cursor-pointer"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          className="z-50 md:hidden fixed top-0 right-0 h-screen w-full bg-white flex flex-col items-center   gap-6 px-6 pt-50
               transform transition-transform duration-800 ease-in-out translate-x-0"
        >
          {links.map((link, index) =>
            link.align === "right" ? (
              <button
                key={link.name}
                onClick={() => {
                  setIsContactOpen(true)
                  setIsMobileOpen(false)
                }}
                className={`font-[700] text-[30px] transition hover:text-[#858080] ${pathname === link.href ? "text-black" : "text-[#B5B5B5]"
                  }`}
                style={{
                  transitionDelay: `${index * 100}ms`, // small stagger effect
                }}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`font-[700] text-[30px] transition hover:text-[#858080] ${pathname === link.href ? "text-black" : "text-[#B5B5B5]"
                  }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}


      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
