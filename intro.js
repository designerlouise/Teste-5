window.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo-text');
  const intro = document.getElementById('intro');
  const root = document.getElementById('root');

  const letterL = document.createElement('span');
  letterL.classList.add('letter');
  letterL.textContent = 'L';

  const restText = document.createElement('span');
  restText.classList.add('rest');
  restText.textContent = 'OUISEFLIX';

  logo.textContent = '';
  logo.appendChild(letterL);
  logo.appendChild(restText);

  // Passo 1: Mostrar OUISEFLIX depois de 1s
  setTimeout(() => {
    logo.classList.add('show-rest');
  }, 1000);

  // Passo 2: Espera a transição terminar antes de animar ao canto
  setTimeout(() => {
    logo.classList.add('logo-animate-move');
  }, 2500); // Começa a mover antes da próxima etapa

  // Passo 3: Esconde intro e mostra o conteúdo
  setTimeout(() => {
    intro.style.display = 'none';
    root.classList.remove('hidden');
    root.classList.add('show');
  }, 4500);
});
