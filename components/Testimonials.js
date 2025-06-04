function Testimonials() {
  try {
    const testimonials = [
      {
        name: 'Ana Flores',
        role: 'Terapeuta',
        text: 'Hoje venho aqui agradecer ao seu trabalho de gestão em marketing, em menos de 1 mês já estou vendo resultados',
        rating: 5,
        avatar: '/img/3.png'
      },
      {
        name: 'Just Açai Rodeiro',
        role: 'Loja de Açais',
        text: 'Desde que começamos a trabalhar com a Designer Louise, nossa identidade visual ficou tão deliciosa quanto nossos açaís! Ela entendeu perfeitamente o clima jovem, vibrante e refrescante que queríamos transmitir. Simplesmente impecável!.',
        rating: 5,
        avatar: '1.png'
      },
      {
        name: 'Making Of',
        role: 'Centro de Beleza em Barbacena',
        text: 'A Louise trouxe elegância e sofisticação para nossa marca. O cuidado que ela tem com cada detalhe faz toda a diferença, e isso reflete exatamente oque oferecemos no nosso espaço. Somos fãs do trabalho dela!',
        rating: 5,
        avatar: 'Teste-5/2.png'
      }
    ];

    return (
      <section data-name="testimonials" data-file="components/Testimonials.js" id="testimonials" className="section-padding bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="netflix-red-text">Feedbacks</span> dos Clientes
            </h2>
            <p className="text-xl text-gray-300">
              Veja o que nossos clientes falam sobre nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/60 rounded-lg p-6 card-hover">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star netflix-red-text mr-1"></i>
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    reportError(error);
  }
}
