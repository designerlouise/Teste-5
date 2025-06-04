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
                <a 
                  href="https://www.instagram.com/designer.louise/profilecard/?igsh=MWgydHBpbTV0NDJicw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a 
                  href="mailto:designlouisegrafico@gmail.com" 
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <i className="fas fa-envelope text-2xl"></i>
                </a>
                <a 
                  href="https://wa.me/5532991102463?text=Ol%C3%A1!%20Vim%20pelo%20site...%20Gostaria%20de%20uma%20Solu%C3%A7%C3%A3o%20Estrat%C3%A9gica%20para%20o%20meu%20Neg%C3%B3cio." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Soluções Estratégicas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a 
                    href="#solucoes-estrategicas" 
                    className="hover:text-white transition-colors"
                  >
                    Social Media
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p><i className="fas fa-envelope mr-2 netflix-red-text"></i> designlouisegrafico@gmail.com</p>
                <p><i className="fas fa-phone mr-2 netflix-red-text"></i> (32) 99110-2463</p>
                <p><i className="fab fa-whatsapp mr-2 netflix-red-text"></i> (32) 99110-2463</p>
                <p><i className="fas fa-map-marker-alt mr-2 netflix-red-text"></i> Rodeiro, MG</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Louiseflix _ Designer Louise. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    reportError(error);
  }
}
