import { HeroSection } from "@/components/hero-section"
import { BettingSitesList } from "@/components/betting-sites-list"
import { SelectionCriteria } from "@/components/selection-criteria"
import { InfoSections } from "@/components/info-sections"
import { CookieBanner } from "@/components/cookie-banner"
import { TopSitesModal } from "@/components/top-sites-modal"

export default function HomePage() {
  return (
    <div className="min-h-screen page-bg">
      <main className="space-y-2 my-0">
        <div className="section-container p-4 bg-black/50">
          <HeroSection />
        </div>

        <div className="max-w-[1200px] mx-auto ">
          <BettingSitesList />
        </div>

        <SelectionCriteria />

        <div className="section-container p-6 bg-black/50">
          <InfoSections />
        </div>
      </main>

      <CookieBanner />
      <TopSitesModal />
    </div>
  )
}
