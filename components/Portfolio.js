function Portfolio() {
  try {
    const projects = [
      {
        title: 'Making Of - Centro de Beleza',
        category: 'Design Gráfico',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop',
        rating: '98% Match'
      },
      {
        title: 'Just Açaí - Rodeiro',
        category: 'Design Gráfico',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
        rating: '95% Match'
      },
      {
        title: 'Dr. Iphone - Assistência Técnica',
        category: 'Social Media',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
        rating: '92% Match'
      },
      {
        title: 'Você pode ser o Próximo...',
        category: 'Design, Social Media, Tráfego Pago',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
        rating: '89% Match'
      }
    ];

    return (
      <section data-name="portfolio" data-file="components/Portfolio.js" id="portfolio" className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Alguns Projetos</h2>
            <p className="text-gray-400">Alguns dos meus projetos, Marcas que ja fazem parte da Designer Louise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="relative group card-hover">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="netflix-red-text text-sm font-bold">{project.rating}</span>
                      <button className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                        <i className="fas fa-play text-xs"></i>
                      </button>
                    </div>
                    <h3 className="font-bold text-sm">{project.title}</h3>
                    <p className="text-gray-300 text-xs">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Portfolio component error:', error);
    reportError(error);
  }
}
