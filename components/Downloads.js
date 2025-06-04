function Downloads() {
  try {
    const materials = [
      {
        title: 'Checklist do Instagram Estratégico',
        description: 'E-book com estratégias para bombar nas redes sociais',
        icon: 'fas fa-book',
        size: '6.3 MB',
        format: 'PDF',
        url: 'https://drive.google.com/file/d/1CWn14LT02pMMaWCVaNDnHp9Xms5riejE/view?usp=drivesdk' // 👉 INSIRA AQUI o link para download do e-book
      },
      {
        title: 'Mini Guia da Bio Estratégica',
        description: 'Guia para você transformar a sua bio estratégicamente ',
        icon: 'fas fa-images',
        size: '147,5 KB',
        format: 'PDF',
        url: 'https://drive.google.com/file/d/1D5-d7rpPRtR_TUoO9dLov228jalwOijv/view?usp=drivesdk' // 👉 INSIRA AQUI o link para download do pack de templates
      },
      {
        title: 'Apresentação Comercial',
        description: 'Apresentação completa para conhecer a Designer Louise',
        icon: 'fas fa-list-check',
        size: '14.2 MB',
        format: 'PDF',
        url: 'https://drive.google.com/file/d/1Io4S5ToTSxRGPQy-0vEH69MylrbG12C2/view?usp=drivesdk' // 👉 INSIRA AQUI o link para download do checklist
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
                <a
                  href={material.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center btn-netflix px-4 py-3 rounded text-white font-bold"
                >
                  <i className="fas fa-download mr-2"></i>
                  Download Gratuito
                </a>
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
