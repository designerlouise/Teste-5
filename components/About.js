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
                Quem <span className="text-red-600">Sou Eu</span>
              </h2>
              <p className="text-lg text-white mb-4 leading-relaxed">
                Sou Louise, designer apaixonada por criar conteúdos visuais que não apenas impressionam, mas que realmente convertem.
                Com mais de 5 anos de experiência no mercado digital.
              </p>
              <p className="text-md text-gray-400 mb-8 leading-relaxed">
                Especializada em transformar ideias em campanhas visuais de sucesso, combinando criatividade com estratégia para gerar resultados reais para meus clientes.
              </p>

              {/* Estatísticas */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-800 text-white px-4 py-2 rounded">
                  <span className="text-red-500 font-bold">500+</span> Projetos
                </div>
                <div className="bg-gray-800 text-white px-4 py-2 rounded">
                  <span className="text-red-500 font-bold">200+</span> Clientes
                </div>
                <div className="bg-gray-800 text-white px-4 py-2 rounded">
                  <span className="text-red-500 font-bold">9</span> Anos
                </div>
              </div>
            </div>

            {/* Card com imagem - retangular vertical */}
            <div className="w-full h-[400px] bg-gradient-to-b from-[#1b0000] to-[#300000] rounded-2xl shadow-xl flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-red-600 mb-4">
                <img
                  src="4.png" // Substitua pelo caminho correto
                  alt="Louise Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-lg font-medium">Louise Designer</p>
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
