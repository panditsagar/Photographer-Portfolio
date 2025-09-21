import PortfolioSection from "@/components/portfolio/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center items-center   py-20 bg-[#FFFFFF]">
        <p className="text-[32px] sm:text-[60px] text-center px-2 sm:px-0  font-extrabold w-full sm:max-w-[55%] leading-[38px] sm:leading-[60px] text-black">
          “HI, I'M SURAJ PANDIT, A WEDDING PHOTOGRAPHER WHO TURNS MOMENTS INTO
          MEMORIES FOR COUPLES AND FAMILIES.”
        </p>
      </div>
      <PortfolioSection />
    </>
  );
}
