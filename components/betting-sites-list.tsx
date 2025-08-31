"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { bettingSites, type BettingSite } from "@/lib/betting-sites-data"

export function BettingSitesList() {
  const [sites, setSites] = useState<BettingSite[]>([])
  const [expandedDisclaimer, setExpandedDisclaimer] = useState<string | null>(null)

  useEffect(() => {
    setSites(bettingSites)
  }, [])

  const renderStars = (rating: number, className = "w-4 h-4") => {
    return Array.from({ length: 5 }, (_, i) => {
      const starValue = i + 1
      const fillPercentage = Math.max(0, Math.min(100, (rating - i) * 100))

      if (fillPercentage >= 100) {
        // Full star
        return <Star key={i} className={`${className} fill-yellow-400 text-yellow-400`} />
      } else if (fillPercentage > 0) {
        // Partial star with improved rendering for 0.2 steps
        return (
          <div key={i} className={`relative ${className}`}>
            <Star className={`${className} text-gray-300 absolute`} />
            <div className="overflow-hidden absolute" style={{ width: `${fillPercentage}%` }}>
              <Star className={`${className} fill-yellow-400 text-yellow-400`} />
            </div>
          </div>
        )
      } else {
        // Empty star
        return <Star key={i} className={`${className} text-gray-300`} />
      }
    })
  }

  const getBadgeText = (index: number) => {
    const badges = ["Marca Top", "Oferta Exclusiva", "Altamente Avaliado", "Tendência"]
    return badges[index] || null
  }

  return (
    <section id="betting-rankings" className="py-4 sm:py-4 w-full md:py-0">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="px-2 sm:px-4">
          <div className="space-y-4 sm:space-y-6 gap-2.5">
            {sites.map((site, index) => (
              <Card
                key={site.id}
                className={`overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-fadeIn relative ${
                  index === 0
                    ? "shadow-green-600 bg-white border-4 border-green-600"
                    : "shadow-lg hover:shadow-xl bg-white border-4 border-gray-200 hover:border-green-600"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div
                    className="w-full h-full bg-repeat"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23006600' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: "60px 60px",
                    }}
                  />
                </div>

                {index < 4 && (
                  <div className="absolute top-0 left-0 z-10">
                    <div className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-br-lg">
                      {getBadgeText(index)}
                    </div>
                  </div>
                )}

                <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent className="p-0 h-full relative z-10">
                    {/* Mobile Layout */}
                    <div className="flex flex-col md:hidden">
                      <div className="grid grid-cols-2">
                        <div className="bg-gray-100 p-4 flex flex-col items-center justify-center space-y-3 py-4 px-4 relative">
                          <div className="absolute inset-0 opacity-10">
                            <div
                              className="w-full h-full"
                              style={{
                                backgroundImage: `linear-gradient(90deg, transparent 49%, #22c55e 49%, #22c55e 51%, transparent 51%)`,
                                backgroundSize: "20px 100%",
                              }}
                            />
                          </div>
                          <div className="p-3 rounded-lg shadow-md bg-black border border-gray-200 relative z-10">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={200}
                              height={100}
                              className="h-14 max-w-full object-contain"
                            />
                          </div>

                          <div className="text-center relative z-10">
                            <div className="text-xs text-gray-400 mb-1">{site.reviews} avaliações</div>
                            <div className="flex items-center justify-center gap-1">
                              {renderStars(site.stars, "w-3 h-3")}
                              <div className="ml-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <span className="text-sm font-bold text-gray-800">{site.rating.toFixed(1)}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-4 flex flex-col items-center justify-center space-y-3 relative">
                          <div className="absolute top-0 right-0 w-8 h-8 opacity-20">
                            <div className="w-full h-full bg-red-600 transform rotate-45 origin-top-right" />
                          </div>
                          <div className="text-center relative z-10">
                            <div className="text-red-600 mb-1 font-bold text-lg">Bónus</div>
                            <div className="font-bold text-gray-800 mb-1 text-lg">{site.bonus}</div>
                          </div>

                          <Button className="bg-green-600 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold relative z-10">
                            OBTER BÓNUS
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center h-full">
                      <div className="bg-white h-full flex items-center border-r border-gray-200 relative">
                        <div className="absolute inset-0 opacity-5">
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-16 h-12 border-2 border-green-600 border-b-0" />
                          </div>
                        </div>
                        <div className="bg-black p-4 rounded-lg shadow-md mx-6 border border-gray-200 relative z-10">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={160}
                            height={80}
                            className="max-h-24 max-w-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex-1 p-6 bg-white text-center relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-transparent to-red-600 opacity-30" />
                        <div className="flex items-center justify-between relative z-10">
                          <div className="flex-1">
                            <div className="text-red-600 mb-2 font-bold text-lg">Bónus de Boas-Vindas</div>
                            <div className="font-bold text-gray-800 mb-1 text-2xl">{site.bonus}</div>
                          </div>

                          <div className="text-center mx-8">
                            <div className="text-lg font-bold text-black mb-1">{site.name}</div>
                            <div className="text-xs text-gray-400">{site.reviews} avaliações</div>

                            <div className="flex items-center gap-1">
                              {renderStars(site.stars, "w-4 h-4")}
                              <div className="w-12 h-12 flex items-center justify-center ml-2">
                                <span className="text-xl font-extrabold text-green-600">{site.rating.toFixed(1)}</span>
                              </div>
                            </div>
                          </div>

                          <Button className="bg-green-600 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg">
                            OBTER BÓNUS
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Link>

                {/* Disclaimer at bottom */}
                <div className="bg-gray-50 p-2 border-t border-gray-200 relative z-10">
                  <div className="text-xs text-gray-500 text-center">
                    18+ | Jogue com responsabilidade | Aplicam-se termos e condições
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
