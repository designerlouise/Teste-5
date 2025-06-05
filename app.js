window.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo-text');
  const intro = document.getElementById('intro');
  const root = document.getElementById('root');

  // Etapa 1: Mostrar apenas o "L"
  setTimeout(() => {
    logo.textContent = 'LOUISEFLIX'; // Expande a palavra
    logo.classList.add('expand');
  }, 1000);

  // Etapa 2: Encolher para o canto
  setTimeout(() => {
    logo.classList.remove('expand');
    logo.classList.add('shrink');
  }, 2500);

  // Etapa 3: Esconde a tela de abertura e mostra o site
  setTimeout(() => {
    intro.style.display = 'none';
    root.classList.remove('hidden');
    root.classList.add('show');
  }, 4000);
});
