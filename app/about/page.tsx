import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Sobre Nós | Melhores Sites de Apostas Portugal",
  description: "Conheça a nossa missão de fornecer análises independentes das melhores casas de apostas em Portugal.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen stadium-bg">
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-portugal-green mb-6">Sobre Nós</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Bem-vindos ao <strong>Sites Apostas Des Portivas Pt</strong>, o seu guia de confiança para
                encontrar as melhores casas de apostas licenciadas em Portugal.
              </p>

              <h2 className="text-2xl font-bold text-portugal-red mb-4">A Nossa Missão</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A nossa missão é fornecer análises independentes, imparciais e detalhadas das casas de apostas que
                operam legalmente em Portugal. Ajudamos os apostadores a tomar decisões informadas, comparando bónus,
                odds, funcionalidades e serviços de apoio ao cliente.
              </p>

              <h2 className="text-2xl font-bold text-portugal-yellow mb-4">Porque Confiar em Nós</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>
                  <strong>Independência:</strong> As nossas análises são completamente independentes e baseadas em
                  critérios objetivos
                </li>
                <li>
                  <strong>Experiência:</strong> A nossa equipa tem anos de experiência no setor das apostas desportivas
                </li>
                <li>
                  <strong>Transparência:</strong> Divulgamos sempre as nossas fontes de receita e parcerias
                </li>
                <li>
                  <strong>Atualização:</strong> Mantemos as nossas análises sempre atualizadas com as últimas ofertas
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-portugal-green mb-4">Jogo Responsável</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Promovemos sempre o jogo responsável e apoiamos apenas casas de apostas que cumprem rigorosamente as
                regulamentações portuguesas. Se precisar de ajuda, contacte a Linha SOS Jogador: 213 950 787.
              </p>

              <div className="bg-portugal-green/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-portugal-green mb-3">Contacto</h3>
                <p className="text-gray-600">
                  Para questões, sugestões ou parcerias, pode contactar-nos através do nosso formulário de contacto.
                  Respondemos a todas as mensagens no prazo de 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
