"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-black/50 border-b border-gray-200 sticky top-0 z-50">
      {/* Mobile Header - 32px height */}
      <div className="h-8 px-2 bg-black flex items-center justify-center md:hidden">
        <Link href="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
          <div className="w-5 h-5 flex items-center justify-center">
            <Image src="/favicon.ico" width={16} height={16} alt="logo" />
          </div>
          <div>
            <h1 className="text-sm font-bold leading-tight">
              <span className="text-portugal-green uppercase">Sites</span>{" "}
              <span className="text-portugal-red uppercase">Apostas Des</span>{" "}
              <span className="text-portugal-yellow text-white uppercase">Portivas Pt</span>
            </h1>
          </div>
        </Link>
      </div>  

      {/* Desktop Header - 60px height */}
      <div className="hidden md:flex h-15 px-4 lg:px-6 items-center justify-center bg-black">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8  flex items-center justify-center">
            <Image src="/favicon.ico" width={28} height={28} alt="logo" />
          </div>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold leading-tight">
              <span className="text-portugal-green uppercase">Sites</span>{" "}
              <span className="text-portugal-red uppercase">Apostas Des</span>{" "}
              <span className="text-portugal-yellow text-white uppercase">Portivas Pt</span>
            </h1>
          </div>
        </Link>
      </div>
    </header>
  )
}
