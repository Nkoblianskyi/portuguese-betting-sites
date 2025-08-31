import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8  flex items-center justify-center">
                <Image src="/favicon.ico" width={28} height={28} alt="logo" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">
                  <span className="text-portugal-green uppercase">Sites</span>{" "}
                  <span className="text-portugal-red uppercase">Apostas Des</span>{" "}
                  <span className="text-portugal-yellow text-white uppercase">Portivas Pt</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A sua fonte confiável para comparar os melhores sites de apostas licenciados em Portugal. Análises
              detalhadas e informações atualizadas.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-portugal-green mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-portugal-green transition-colors flex items-center">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-portugal-green transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-portugal-green transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-portugal-green transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>

              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-portugal-green mb-4">Informações</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <strong className="text-white">Licenciamento:</strong>
                <br />
                Todos os sites são licenciados pelo SRIJ
              </p>
              <p>
                <strong className="text-white">Atualização:</strong>
                <br />
                {new Date().toLocaleDateString("pt-PT", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p>
                <strong className="text-white">Suporte:</strong>
                <br />
                Apenas para jogadores portugueses
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Image src='/flag.png' width={24} height={24} alt='flag' />
                <span className="text-xs">Portugal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-green-700">
          <h4 className="text-white font-bold mb-6 text-center text-sm md:text-base">Organizações</h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              className="bg-white hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/icad.png" alt="SICAD" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              className="bg-white hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              className="bg-white hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img
                src="/srij.svg"
                alt="SRIJ - Serviço de Regulação e Inspeção de Jogos"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </Link>

            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              className="bg-white hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              className="hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
            >
              <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 md:h-12 w-auto object-contain" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Sitesapostasdesportivaspt.com. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 text-center">
              18+ | Apenas jogadores portugueses | Jogue com responsabilidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
