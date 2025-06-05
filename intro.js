window.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo-anim');
  const intro = document.getElementById('intro');
  const header = document.getElementById('header');
  const main = document.getElementById('main-content');

  // Inicia a animação após 1 segundo
  setTimeout(() => {
    logo.textContent = 'LOUISEFLIX';
    logo.classList.add('animate-logo');
  }, 1000);

  // Após 3 segundos, esconde a intro e revela o conteúdo
  setTimeout(() => {
    intro.style.display = 'none';
    header.classList.remove('hidden');
    main.classList.add('opacity-100');
  }, 3000);
});
