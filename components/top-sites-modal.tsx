"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { bettingSites } from "@/lib/betting-sites-data"
import Link from "next/link"

export function TopSitesModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if modal has been shown in this session
    const modalShown = sessionStorage.getItem("top-sites-modal-shown")

    if (!modalShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("top-sites-modal-shown", "true")
      }, 8000) // 8 seconds delay

      return () => clearTimeout(timer)
    }
  }, [])

  const topSite = bettingSites[0]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating / 2) // Convert 10-point to 5-star system
    const hasHalfStar = (rating / 2) % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <Star className="w-5 h-5 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            </div>
          </div>,
        )
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />)
      }
    }
    return stars
  }

  const formatReviews = (reviews: number) => {
    if (reviews >= 1000) {
      return `${(reviews / 1000).toFixed(1)}k`
    }
    return reviews.toString()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-sm p-0 border-0 bg-transparent shadow-none" showCloseButton={false}>
        <Link
          href={topSite.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onClick={() => setIsOpen(false)}
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-portugal-green hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="bg-portugal-green text-white text-center py-2 px-4">
              <span className="font-bold text-sm">MELHOR ESCOLHA #1</span>
            </div>

            <div className="p-6 text-center bg-gray-50">
              <img
                src={topSite.logo || "/placeholder.svg"}
                alt={topSite.name}
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{topSite.name}</h3>

              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex">{renderStars(topSite.rating)}</div>
                <span className="text-lg font-bold text-portugal-green">{topSite.rating}/10</span>
              </div>
              <p className="text-sm text-gray-600">({formatReviews(topSite.reviews)} avaliações)</p>
            </div>

            <div className="p-6 bg-gradient-to-r from-portugal-green/10 to-portugal-red/10">
              <div className="text-center mb-4 font-bold">
                <div className="mb-1 text-red-700 text-base">Bónus de Boas-Vindas</div>
                <div className="text-2xl font-bold text-portugal-green">{topSite.bonus}</div>
              </div>

              {topSite.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {topSite.badges.slice(0, 3).map((badge, index) => (
                    <span
                      key={index}
                      className="bg-portugal-yellow text-black text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              <Button className="w-full bg-portugal-red hover:bg-portugal-red/90 text-white font-bold py-3 text-lg rounded-xl shadow-lg">
                OBTER BÓNUS AGORA
              </Button>
            </div>

            <div className="p-4 bg-gray-100 text-center">
              <p className="text-xs text-gray-600">
                <strong>18+</strong> | Jogue com responsabilidade | T&C aplicam-se
              </p>
            </div>
          </div>
        </Link>
      </DialogContent>
    </Dialog>
  )
}
