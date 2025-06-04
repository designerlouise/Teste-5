function About() {
  try {
    return (
      <section data-name="about" data-file="components/About.js" id="about" className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto à esquerda */}
            <div>
              <div className="mb-4">
                <span className="bg-red-600 text-white text-sm px-3 py-1 rounded font-bold">
                  CRIADORA ORIGINAL
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Quem <span className="netflix-red-text">Sou Eu</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Sou Louise, sou uma especialista em mídia social apaixonada por ajudar empresas a alcançarem seu potencial online.
                Com uma vasta experiência em estratégias digitais, estou pronta para impulsionar sua presença nas redes sociais e criar conexões autênticas com seu público-alvo.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Compreendo a importância das redes sociais na era digital e como elas podem impactar diretamente os resultados de um negócio. Minha
                abordagem estratégica e criativa visa aumentar o engajamento,
                construir relacionamentos duradouros e gerar um impacto positivo na percepção da sua marca.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-800 px-4 py-2 rounded">
                  <span className="netflix-red-text font-bold">500+</span> Projetos
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded">
                  <span className="netflix-red-text font-bold">200+</span> Clientes
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded">
                  <span className="netflix-red-text font-bold">9</span> Anos
                </div>
              </div>
            </div>

            {/* Imagem à direita */}
            <div className="relative flex items-center justify-center">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
                <img
                  src="4.png" // Substitua pelo caminho correto da sua imagem
                  alt="Louise Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    reportError(error);
  }
}
