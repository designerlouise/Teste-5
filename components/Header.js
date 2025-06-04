function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <header data-name="header" data-file="components/Header.js" className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-3xl font-bold netflix-logo">
              LOUISEFLIX
            </div>
            
            <nav className="hidden lg:flex space-x-6">
              <a href="#home" className="text-white hover:text-red-500 transition-colors font-medium">Início</a>
              <a href="#Who am I?" className="text-white hover:text-red-500 transition-colors font-medium">Quem Sou</a>
              <a href="#services" className="text-white hover:text-red-500 transition-colors font-medium">Soluções</a>
              <a href="#Commercial Presentation" className="text-white hover:text-red-500 transition-colors font-medium">Portfolio</a>
              <a href="#downloads" className="text-white hover:text-red-500 transition-colors font-medium">Downloads</a>
              <a href="#testimonials" className="text-white hover:text-red-500 transition-colors font-medium">Feedbacks</a>
              <a href="#contact" className="text-white hover:text-red-500 transition-colors font-medium">Contato</a>
            </nav>

            <button 
              className="lg:hidden text-white text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden pb-4 bg-black/95">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-white hover:text-red-500 transition-colors">Início</a>
                <a href="#about" className="text-white hover:text-red-500 transition-colors">Quem Sou</a>
                <a href="#services" className="text-white hover:text-red-500 transition-colors">Soluções</a>
                <a href="#portfolio" className="text-white hover:text-red-500 transition-colors">Portfolio</a>
                <a href="#downloads" className="text-white hover:text-red-500 transition-colors">Downloads</a>
                <a href="#testimonials" className="text-white hover:text-red-500 transition-colors">Feedbacks</a>
                <a href="#contact" className="text-white hover:text-red-500 transition-colors">Contato</a>
              </div>
            </nav>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    reportError(error);
  }
}
