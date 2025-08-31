import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Política de Privacidade | Melhores Sites de Apostas Portugal",
  description: "Política de privacidade e proteção de dados do nosso site de análise de casas de apostas.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen stadium-bg">

      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-portugal-green mb-6">Política de Privacidade</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-500 mb-6">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>

              <h2 className="text-2xl font-bold text-portugal-red mb-4">1. Informações que Recolhemos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Recolhemos informações quando visita o nosso site, incluindo:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Dados de navegação (páginas visitadas, tempo de permanência, dispositivo utilizado)</li>
                <li>Endereço IP e localização geográfica aproximada</li>
                <li>Informações sobre o navegador e sistema operativo</li>
                <li>Dados fornecidos voluntariamente através de formulários de contacto</li>
              </ul>

              <h2 className="text-2xl font-bold text-portugal-yellow mb-4">2. Como Utilizamos as Informações</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Utilizamos as informações recolhidas para:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Melhorar a experiência do utilizador no nosso site</li>
                <li>Analisar padrões de tráfego e comportamento dos visitantes</li>
                <li>Responder a questões e pedidos de contacto</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>

              <h2 className="text-2xl font-bold text-portugal-green mb-4">3. Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Utilizamos cookies para melhorar a funcionalidade do site e analisar o tráfego. Pode gerir as suas
                preferências de cookies nas definições do seu navegador. Para mais informações, consulte a nossa{" "}
                <a href="/cookie-policy" className="text-portugal-green hover:underline">
                  Política de Cookies
                </a>
                .
              </p>

              <h2 className="text-2xl font-bold text-portugal-red mb-4">4. Partilha de Dados</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Não vendemos, alugamos ou partilhamos os seus dados pessoais com terceiros, exceto quando exigido por
                lei ou para cumprir obrigações regulamentares.
              </p>

              <h2 className="text-2xl font-bold text-portugal-yellow mb-4">5. Segurança dos Dados</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Implementamos medidas de segurança adequadas para proteger as suas informações contra acesso não
                autorizado, alteração, divulgação ou destruição.
              </p>

              <h2 className="text-2xl font-bold text-portugal-green mb-4">6. Os Seus Direitos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">De acordo com o RGPD, tem o direito de:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Aceder aos seus dados pessoais</li>
                <li>Retificar dados incorretos ou incompletos</li>
                <li>Solicitar a eliminação dos seus dados</li>
                <li>Opor-se ao processamento dos seus dados</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>

              <div className="bg-portugal-green/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-portugal-green mb-3">Contacto</h3>
                <p className="text-gray-600">
                  Para exercer os seus direitos ou esclarecer dúvidas sobre esta política, contacte-nos através do nosso
                  formulário de contacto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
