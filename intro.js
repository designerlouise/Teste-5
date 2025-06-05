<script>
  window.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo-anim');
    const intro = document.getElementById('intro');
    const header = document.getElementById('header');
    const main = document.getElementById('main-content');

    // Passo 1 – Após fade-in, começa a animação de transição
    setTimeout(() => {
      logo.textContent = 'LOUISEFLIX';
      logo.style.animation = 'shrinkAndReveal 2s ease-in-out forwards';
    }, 1000);

    // Passo 2 – Esconde a intro e mostra o resto
    setTimeout(() => {
      intro.style.display = 'none';
      header.classList.remove('hidden');
      main.style.opacity = '1';
    }, 3200); // total 3.2s
  });
</script>
