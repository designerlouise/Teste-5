function About() {
  try {
    return (
      <section data-name="about" data-file="components/About.js" id="about" className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                Sou Louise, designer apaixonada por criar conteúdos visuais que não apenas impressionam, 
                mas que realmente convertem. Com mais de 5 anos de experiência no mercado digital.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Especializada em transformar ideias em campanhas visuais de sucesso, 
                combinando criatividade com estratégia para gerar resultados reais para meus clientes.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-800 px-4 py-2 rounded">
                  <span className="netflix-red-text font-bold">500+</span> Projetos
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded">
                  <span className="netflix-red-text font-bold">200+</span> Clientes
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded">
                  <span className="netflix-red-text font-bold">5</span> Anos
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-500/20 to-black rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-user-circle text-8xl text-red-500 mb-4"></i>
                  <p className="text-gray-300 text-lg">Louise Designer</p>
                </div>
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
