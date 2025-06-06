function Contact() {
try {
const [formData, setFormData] = React.useState({
name: '',
email: '',
whatsapp: '',
message: ''
});

const handleSubmit = (e) => {  
  e.preventDefault();  
  console.log('Form submitted:', formData);  
  alert('Mensagem enviada! Nossa equipe entrará em contato em breve.');  
  setFormData({ name: '', email: '', whatsapp: '', message: '' });  
};  

const handleChange = (e) => {  
  setFormData({  
    ...formData,  
    [e.target.name]: e.target.value  
  });  
};  

return (  
  <section data-name="contact" data-file="components/Contact.js" id="contact" className="section-padding bg-gray-900">  
    <div className="container mx-auto px-4">  
      <div className="max-w-2xl mx-auto text-center mb-12">  
        <h2 className="text-4xl font-bold mb-4">  
          Pronto para o <span className="netflix-red-text">Próximo Episódio?</span>  
        </h2>  
        <p className="text-xl text-gray-300">  
          Entre em contato e comece sua jornada para o sucesso digital  
        </p>  
      </div>  

      <div className="max-w-xl mx-auto">  
        <form onSubmit={handleSubmit} className="space-y-6">  
          <div>  
            <input  
              type="text"  
              name="name"  
              placeholder="Seu nome"  
              value={formData.name}  
              onChange={handleChange}  
              required  
              className="w-full px-4 py-3 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-red-500"  
            />  
          </div>  
          <div>  
            <input  
              type="email"  
              name="email"  
              placeholder="Seu email"  
              value={formData.email}  
              onChange={handleChange}  
              required  
              className="w-full px-4 py-3 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-red-500"  
            />  
          </div>  
          <div>  
            <input  
              type="tel"  
              name="whatsapp"  
              placeholder="Seu WhatsApp (11) 99999-9999"  
              value={formData.whatsapp}  
              onChange={handleChange}  
              required  
              className="w-full px-4 py-3 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-red-500"  
            />  
          </div>  
          <div>  
            <textarea  
              name="message"  
              placeholder="Conte-nos sobre seu projeto"  
              rows="4"  
              value={formData.message}  
              onChange={handleChange}  
              required  
              className="w-full px-4 py-3 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-red-500"  
            ></textarea>  
          </div>  
          <button  
            type="submit"  
            className="w-full btn-netflix px-8 py-4 rounded text-white font-bold text-lg"  
          >  
            <i className="fas fa-paper-plane mr-2"></i>  
            Enviar Mensagem  
          </button>  
        </form>  
      </div>  
    </div>  
  </section>  
);

} catch (error) {
console.error('Contact component error:', error);
reportError(error);
}
}

