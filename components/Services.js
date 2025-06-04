function Services() {
  try {
    const services = [
      {
        icon: 'fas fa-video',
        title: 'Design Digital',
        description: 'Criamos identidades visuais cinematográficas que capturam a atenção como um trailer de sucesso.',
        category: 'ORIGINAL'
      },
      {
        icon: 'fas fa-film',
        title: 'Social Media',
        description: 'Produzimos conteúdo visual para redes sociais com a qualidade de uma produção Netflix.',
        category: 'SÉRIE'
      },
      {
        icon: 'fas fa-bullhorn',
        title: 'Tráfego Pago',
        description: 'Campanhas publicitárias que geram audiência como os maiores sucessos da plataforma.',
        category: 'FILME'
      }
    ];

    return (
      <section data-name="services" data-file="components/Services.js" id="services" className="section-padding bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Soluções <span className="netflix-red-text">Estratégicas</span>
            </h2>
            <p className="text-xl text-gray-300">
              Conteúdo premium que transforma sua marca em fenômeno viral
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-black/60 rounded-lg overflow-hidden card-hover">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
                      {service.category}
                    </span>
                  </div>
                  <div className="netflix-red-text text-3xl mb-4">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    reportError(error);
  }
}
