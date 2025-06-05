window.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo-anim');
  const intro = document.getElementById('intro');
  const header = document.getElementById('header');
  const main = document.getElementById('main-content');

  // Fase 1: Fade-in da letra L
  setTimeout(() => {
    logo.style.opacity = '1';
  }, 200);

  // Fase 2: Transforma o L em LOUISEFLIX com leve zoom out
  setTimeout(() => {
    logo.textContent = 'LOUISEFLIX';
    logo.style.transition = 'transform 1s ease, font-size 1s ease, letter-spacing 0.6s ease';
    logo.style.fontSize = '4rem';
    logo.style.transform = 'scale(0.9)';
    logo.style.letterSpacing = '0.2rem';
  }, 1500);

  // Fase 3: Move para o canto superior esquerdo com zoom out
  setTimeout(() => {
    logo.style.animation = 'toCorner 1.2s ease-in-out forwards';
  }, 2700);

  // Fase 4: Finaliza a transição — esconde a intro e mostra o site
  setTimeout(() => {
    intro.style.display = 'none';
    header.classList.remove('hidden');
    main.style.opacity = '1';
  }, 4000);
});
