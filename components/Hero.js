function Hero() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section data-name="hero" data-file="components/Hero.js" id="home" className="relative min-h-screen flex items-center bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Design que <span className="netflix-red-text">Converte</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Na Designer Louise, criamos conteúdo visual épico para o seu negócio e campanhas de tráfego pago 
              que fazem sua marca se destacar no digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="btn-netflix px-8 py-4 rounded text-white font-bold text-lg"
              >
                <i className="fas fa-play mr-2"></i>
                Assistir Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition-all"
              >
                <i className="fas fa-info-circle mr-2"></i>
                Mais Informações
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    reportError(error);
  }
}
