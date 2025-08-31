export function SelectionCriteria() {
  return (
    <div className="section-container p-6 bg-black/40">
      <div className="max-w-4xl mx-auto text-center bg-black/50 py-4 px-4 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="text-portugal-green">Como Selecionamos</span>{" "}
          <span className="text-portugal-red">os Melhores</span> <span className="text-portugal-gold">Sites</span>
        </h2>

        <p className="text-gray-200 mb-6 text-lg leading-relaxed">
          Nossa equipe de especialistas avalia rigorosamente cada casa de apostas com base em critérios específicos para
          garantir que você tenha acesso apenas aos melhores sites licenciados em Portugal.
        </p>

        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div className="backdrop-blur-sm rounded-lg p-4 border border-portugal-green/20 bg-zinc-900">
            <div className="text-portugal-green font-semibold mb-2"> Licenciamento</div>
            <p className="text-gray-300">Verificamos todas as licenças SRIJ e conformidade legal</p>
          </div>

          <div className="backdrop-blur-sm rounded-lg p-4 border border-portugal-red/20 bg-zinc-900">
            <div className="text-portugal-red font-semibold mb-2"> Bónus &amp; Promoções</div>
            <p className="text-gray-300">Analisamos ofertas de boas-vindas e promoções regulares</p>
          </div>

          <div className="backdrop-blur-sm rounded-lg p-4 border border-portugal-gold/20 bg-zinc-900">
            <div className="text-portugal-gold font-semibold mb-2"> Velocidade</div>
            <p className="text-gray-300">Testamos rapidez de levantamentos e depósitos</p>
          </div>

          <div className="backdrop-blur-sm rounded-lg p-4 border border-portugal-green/20 bg-zinc-900">
            <div className="text-portugal-green font-semibold mb-2"> Experiência</div>
            <p className="text-gray-300">Avaliamos usabilidade em desktop e mobile</p>
          </div>
        </div>
      </div>
    </div>
  )
}
