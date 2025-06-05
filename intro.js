window.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo-text');
  const intro = document.getElementById('intro');
  const root = document.getElementById('root');

  // Passo 1: Mostrar apenas "L"
  setTimeout(() => {
    logo.textContent = 'LOUISEFLIX';
    logo.classList.add('expand');
  }, 1000);

  // Passo 2: Encolher para o canto
  setTimeout(() => {
    logo.classList.remove('expand');
    logo.classList.add('shrink');
  }, 2500);

  // Passo 3: Mostrar conteúdo
  setTimeout(() => {
    intro.style.display = 'none';
    root.classList.remove('hidden');
    root.classList.add('show');
  }, 4000);
});
