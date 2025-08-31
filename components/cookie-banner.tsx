"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-2">Utilizamos Cookies</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Este site utiliza cookies para melhorar a sua experiência de navegação e para fins analíticos. Ao
              continuar a navegar, concorda com a utilização de cookies. Pode gerir as suas preferências nas definições
              do seu navegador.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              Recusar
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-portugal-green hover:bg-portugal-green/90 text-white"
            >
              Aceitar Cookies
            </Button>
            <button
              onClick={handleClose}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
