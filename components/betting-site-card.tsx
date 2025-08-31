"use client"

import { Button } from "@/components/ui/button"
import { Star, ExternalLink } from "lucide-react"
import type { BettingSite } from "@/lib/betting-sites-data"

interface BettingSiteCardProps {
  site: BettingSite
  position: number
}

export function BettingSiteCard({ site, position }: BettingSiteCardProps) {
  const renderStars = (stars: number) => {
    const starElements = []
    for (let i = 0; i < 5; i++) {
      starElements.push(
        <Star key={i} className={`w-4 h-4 ${i < stars ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`} />,
      )
    }
    return starElements
  }

  const formatReviews = (reviews: number) => {
    if (reviews >= 1000) {
      return `${(reviews / 1000).toFixed(1)}k`
    }
    return reviews.toString()
  }

  return (
    <a href={site.url} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
      <div className="relative bg-white rounded-lg shadow-md p-6 border border-gray-200">
        {position <= 4 && site.badges.length > 0 && (
          <div className="absolute top-0 left-0 flex flex-wrap gap-1">
            {site.badges.map((badge, index) => (
              <span key={index} className="bg-red-600 text-white text-xs px-2 py-1 rounded-br-lg font-bold">
                {badge}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mb-4 pt-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-24 h-12 object-contain" />
            <h3 className="text-xl font-bold text-gray-900">{site.name}</h3>
          </div>

          {/* Rating */}
          <div className="text-right">
            <div className="text-2xl font-bold text-green-700">{site.rating}</div>
          </div>
        </div>

        {/* Bonus */}
        <div className="mb-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="text-lg font-bold text-green-700">{site.bonus}</div>
          </div>
        </div>

        {/* Stars and Reviews */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">{renderStars(site.stars)}</div>
          <span className="text-sm text-gray-600">
            {site.rating} ({formatReviews(site.reviews)} відгуків)
          </span>
        </div>

        {/* CTA Button */}
        <Button
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3"
          onClick={(e) => {
            e.preventDefault()
            window.open(site.url, "_blank", "noopener,noreferrer")
          }}
        >
          ОТРИМАТИ БОНУС <ExternalLink className="w-4 h-4 ml-2" />
        </Button>

        <div className="mt-3 text-center text-xs text-gray-500">18+ | Грайте відповідально | Застосовуються Т&У</div>
      </div>
    </a>
  )
}
