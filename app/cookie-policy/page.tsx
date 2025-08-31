import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Política de Cookies | Melhores Sites de Apostas Portugal",
  description: "Informações sobre a utilização de cookies no nosso site de análise de casas de apostas.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen stadium-bg">
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-portugal-green mb-6">Política de Cookies</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-500 mb-6">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>

              <h2 className="text-2xl font-bold text-portugal-red mb-4">O que são Cookies?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Os cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita um site.
                Estes ficheiros permitem que o site se lembre das suas ações e preferências durante um período de tempo.
              </p>

              <h2 className="text-2xl font-bold text-portugal-yellow mb-4">Tipos de Cookies que Utilizamos</h2>

              <h3 className="text-xl font-bold text-portugal-green mb-3">1. Cookies Essenciais</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Estes cookies são necessários para o funcionamento básico do site e não podem ser desativados:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Cookies de sessão para manter a sua navegação</li>
                <li>Cookies de segurança para proteger contra ataques</li>
                <li>Cookies de preferências de idioma</li>
              </ul>

              <h3 className="text-xl font-bold text-portugal-red mb-3">2. Cookies Analíticos</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizamos estes cookies para compreender como os visitantes utilizam o nosso site:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Google Analytics para análise de tráfego</li>
                <li>Cookies de performance para otimizar o site</li>
                <li>Cookies de comportamento do utilizador</li>
              </ul>

              <h3 className="text-xl font-bold text-portugal-yellow mb-3">3. Cookies de Marketing</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Estes cookies são utilizados para mostrar anúncios relevantes e medir a eficácia das campanhas
                publicitárias.
              </p>

              <h2 className="text-2xl font-bold text-portugal-green mb-4">Como Gerir os Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Pode controlar e gerir os cookies de várias formas:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Através das definições do seu navegador</li>
                <li>Utilizando o banner de cookies no nosso site</li>
                <li>Através de ferramentas de opt-out de terceiros</li>
              </ul>

              <h2 className="text-2xl font-bold text-portugal-red mb-4">Cookies de Terceiros</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                O nosso site pode conter cookies de terceiros, incluindo parceiros de análise e publicidade. Estes
                cookies são regidos pelas políticas de privacidade dos respetivos terceiros.
              </p>

              <div className="bg-portugal-yellow/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-portugal-yellow mb-3">Importante</h3>
                <p className="text-gray-600">
                  Ao continuar a utilizar o nosso site, concorda com a utilização de cookies de acordo com esta
                  política. Pode alterar as suas preferências a qualquer momento através das definições do seu
                  navegador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
