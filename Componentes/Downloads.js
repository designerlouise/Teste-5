function Downloads() {
  try {
    const materials = [
      {
        title: 'Guia Completo de Social Media',
        description: 'E-book com estratégias para bombar nas redes sociais',
        icon: 'fas fa-book',
        size: '2.5 MB',
        format: 'PDF'
      },
      {
        title: 'Templates para Stories',
        description: 'Pack com 50 templates editáveis para Instagram Stories',
        icon: 'fas fa-images',
        size: '15 MB',
        format: 'PSD'
      },
      {
        title: 'Checklist de Tráfego Pago',
        description: 'Lista completa para otimizar suas campanhas',
        icon: 'fas fa-list-check',
        size: '1.2 MB',
        format: 'PDF'
      }
    ];

    return (
      <section data-name="downloads" data-file="components/Downloads.js" id="downloads" className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Materiais para <span className="netflix-red-text">Download</span>
            </h2>
            <p className="text-xl text-gray-300">
              Conteúdos exclusivos para turbinar seus resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 card-hover">
                <div className="netflix-red-text text-4xl mb-4">
                  <i className={material.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{material.title}</h3>
                <p className="text-gray-300 mb-4">{material.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">{material.format}</span>
                  <span className="text-sm text-gray-400">{material.size}</span>
                </div>
                <button className="w-full btn-netflix px-4 py-3 rounded text-white font-bold">
                  <i className="fas fa-download mr-2"></i>
                  Download Gratuito
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Downloads component error:', error);
    reportError(error);
  }
}
