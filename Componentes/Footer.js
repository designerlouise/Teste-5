function Footer() {
  try {
    return (
      <footer data-name="footer" data-file="components/Footer.js" className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold netflix-logo mb-4">
                LOUISEFLIX
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Sua plataforma premium de design digital, social media e tráfego pago. 
                Conteúdo que converte como os maiores sucessos do streaming.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <i className="fab fa-behance text-2xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Soluções Estratégicas</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Design Digital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tráfego Pago</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p><i className="fas fa-envelope mr-2 netflix-red-text"></i> contato@louiseflix.com</p>
                <p><i className="fas fa-phone mr-2 netflix-red-text"></i> (11) 99999-9999</p>
                <p><i className="fab fa-whatsapp mr-2 netflix-red-text"></i> (11) 99999-9999</p>
                <p><i className="fas fa-map-marker-alt mr-2 netflix-red-text"></i> São Paulo, SP</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Louiseflix. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    reportError(error);
  }
}
