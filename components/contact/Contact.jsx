// components/ContactModal.jsx
"use client"
import { X } from "lucide-react"
import { useEffect, useState } from "react"

export default function ContactModal({ isOpen, onClose }) {
  const [show, setShow] = useState(false)

  // Trigger animation after mount/unmount
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10) // slight delay to allow transition
    } else {
      setShow(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div
        className={`bg-white rounded-lg flex flex-col items-center justify-center shadow-xl max-w-2xl h-[400px] w-full p-8 relative transform transition-all duration-700 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#B5B5B5] hover:text-black cursor-pointer"
        >
          <X size={28} />
        </button>

        <h2 className="text-[40px] font-bold text-center">SM STUDIO</h2>
        <p className="text-center text-[24px] font-[600] text-[#B5B5B5]">
          Weeding Photographer
        </p>
        <hr className="my-6 border-t-2 border-black w-full" />

        <div className="text-center text-black font-[600] space-y-2">
          <p className="font-semibold">+91 9568136701</p>
          <p>Anantdih, Jainagar Rd, Koderma, Jharkhand 825410</p>
          <p className="">hello@smstudio.com</p>
          <a
            href="https://www.instagram.com/joyco.studio"
            target="_blank"
            rel="noreferrer"
          >
            www.instagram.com/joyco.studio
          </a>
        </div>
      </div>
    </div>
  )
}
