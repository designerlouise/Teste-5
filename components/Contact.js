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

  const message = `Olá! Novo vim pelo site:
  
📌 Nome: ${formData.name}
📧 Email: ${formData.email}
📱 WhatsApp: ${formData.whatsapp}
📝 Projeto: ${formData.message}`;

  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "5532991102463"; // Ex: 5511999999999 (sem + e sem espaços)

  // Abre o WhatsApp
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

  setFormData({ name: '', email: '', whatsapp: '', message: '' });
};
