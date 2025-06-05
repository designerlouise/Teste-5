window.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo-anim');
    const intro = document.getElementById('intro');
    const header = document.getElementById('header');
    const main = document.getElementById('main-content');

    // Fase 1: Mostrar o L com fade-in
    setTimeout(() => {
      logo.style.opacity = '1';
    }, 300); // Aparece rapidamente

    // Fase 2: Espera um pouco mais antes de virar LOUISEFLIX
    setTimeout(() => {
      logo.textContent = 'LOUISEFLIX';
      logo.style.transition = 'transform 1.2s ease, font-size 1.2s ease, letter-spacing 1s ease';
      logo.style.fontSize = '4rem';
      logo.style.transform = 'scale(0.9)';
      logo.style.letterSpacing = '0.2rem';
    }, 2500); // Espera 2.5 segundos antes de mostrar "LOUISEFLIX"

    // Fase 3: Move o logo para o canto
    setTimeout(() => {
      logo.style.animation = 'toCorner 1.2s ease-in-out forwards';
    }, 4200); // Move após a transição de texto

    // Fase 4: Mostrar o site
    setTimeout(() => {
      intro.style.display = 'none';
      header.classList.remove('hidden');
      main.style.opacity = '1';
    }, 5500); // Site aparece logo após a logo ir para o topo
  });
</script>
