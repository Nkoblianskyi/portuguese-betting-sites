"use client"
import Image from "next/image"
import {Smartphone, Clock } from "lucide-react"

export function HeroSection() {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleDateString("pt-PT", { month: "long" }).toUpperCase()
  const currentYear = currentDate.getFullYear()

  return (
    <section className="relative overflow-hidden">
      <div className="min-h-[280px] max-h-[350px] bg-black/40 rounded-lg flex items-center justify-center  py-4 md:py-8">
        <div className="text-center px-4 md:px-8 max-w-5xl w-full">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4 tracking-tight">
            <span className="text-portugal-green">TOP CASAS DE</span> <span className="text-portugal-red">APOSTAS</span>{" "}
            <span className="text-portugal-gold">PORTUGUESAS</span>
          </h1>

          <div className="text-white/90 text-sm md:text-base lg:text-lg mb-6 space-y-1">
            <p className="font-medium">Análises independentes das melhores casas de apostas licenciadas em Portugal</p>
            <p className="text-white/70">Comparamos bónus, odds e funcionalidades para ajudar na sua escolha</p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-6">
            <div className="border border-portugal-green/40 text-portugal-green px-3 py-2 rounded-lg font-medium text-xs md:text-sm flex items-center gap-2 backdrop-blur-sm bg-transparent">
              <Image src="/flag.png" width={16} height={16} alt="shield" />
              Licença Legal
            </div>
            <div className="border border-portugal-red/40 text-portugal-red px-3 py-2 rounded-lg font-medium text-xs md:text-sm flex items-center gap-2 backdrop-blur-sm bg-transparent">
              <Smartphone className="w-3 h-3 md:w-4 md:h-4" />
              App Móvel
            </div>
            <div className="border border-portugal-gold/40 text-portugal-gold px-3 py-2 rounded-lg font-medium text-xs md:text-sm flex items-center gap-2 backdrop-blur-sm bg-transparent">
              <Clock className="w-3 h-3 md:w-4 md:h-4" />
              Levantamentos Rápidos
            </div>
          </div>

          <div className="text-white/60 text-xs md:text-sm mb-4 font-medium">
            Última atualização: {currentMonth} {currentYear}
          </div>

          
        </div>
      </div>
    </section>
  )
}
