function Services() {
  try {
    const services = [
      {
        icon: 'fas fa-video',
        title: 'Gestão de Redes Sociais',
        description: 'O objetivo é aumentar o engajamento, atrair novos seguidores e converter esses seguidores em clientes.',
        category: 'ORIGINAL'
      },
      {
        icon: 'fas fa-film',
        title: 'Social Media Viral',
        description: 'Ideal para quem deseja aumentar rapidamente a visibilidade nas redes sociais.',
        category: 'SÉRIE'
      },
      {
        icon: 'fas fa-bullhorn',
        title: 'Estruturação de Perfil',
        description: 'O objetivo é causar uma excelente primeira impressão e transmitir profissionalismo.',
        category: 'FILME'
        },
    {
      icon: 'fas fa-pen-nib',
      title: 'Consultoria Estratégica de Conteúdo',
      description: 'Ideal para quem busca direcionamento estratégico para suas redes sociais.',
      category: 'CONSULTORIA'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Produçao Especializada para Midias Sociais',
      description: 'Ideial para marcas que desejam se destacar com conteúdos profissionais e envolventes.',
      category: 'CONTEÚDO'
    },
    {
      icon: 'fas fa-search-dollar',
      title: 'Pack de Conteúdo',
      description: 'Perfeito para quem busca agilidade na produção de conteúdo sem abrir mão da qualidade.',
      category: 'PACK'
    },
    {
      icon: 'fas fa-magic',
      title: 'Gestão de Tráfego',
      description: 'Campanhas publicitárias que geram audiência como os maiores sucessos da plataforma.',
      category: 'TRÁFEGO'
    },
    {
      icon: 'fas fa-users',
      title: 'Muito mais',
      description: 'Diversas Soluções para te posicionar estratégica e profissionalmente no digital.',
      category: 'VARIEDADE'
      }
    ];

    return (
    <section id="serviços" className="section-padding bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soluções <span className="text-red-600">Estratégicas</span>
          </h2>
          <p className="text-xl text-gray-300">
            Conteúdo premium que transforma sua marca em fenômeno viral
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => document.getElementById('carousel').scrollBy({ left: -300, behavior: 'smooth' })}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/70 p-2 rounded-full z-10"
          >
            <i className="fas fa-chevron-left text-white"></i>
          </button>

          <div
            id="carousel"
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-1"
          >
            {servicos.map((servico, index) => (
              <div key={index} className="min-w-[280px] bg-black/60 rounded-lg overflow-hidden card-hover">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
                      {servico.category}
                    </span>
                  </div>
                  <div className="text-red-600 text-3xl mb-4">
                    <i className={servico.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{servico.title}</h3>
                  <p className="text-gray-300">{servico.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => document.getElementById('carousel').scrollBy({ left: 300, behavior: 'smooth' })}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/70 p-2 rounded-full z-10"
          >
            <i className="fas fa-chevron-right text-white"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Serviços;
