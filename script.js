function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}
document.querySelector('form').addEventListener('submit', function(e) {
  const whatsapp = document.querySelector('input[name="whatsapp"]').value;
  const pattern = /^\(\d{2}\) \d{5}-\d{4}$/;
  if (!pattern.test(whatsapp)) {
    alert('Por favor, insira o WhatsApp no formato (99) 99999-9999');
    e.preventDefault();
  }
});