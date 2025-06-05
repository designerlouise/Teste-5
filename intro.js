window.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo-text');
  const intro = document.getElementById('intro');
  const root = document.getElementById('root');

  // Cria o efeito de "L" separado do "OUISEFLIX"
  const letterL = document.createElement('span');
  letterL.classList.add('letter');
  letterL.textContent = 'L';

  const restText = document.createElement('span');
  restText.classList.add('rest');
  restText.textContent = 'OUISEFLIX';

  logo.textContent = '';
  logo.appendChild(letterL);
  logo.appendChild(restText);

  // Passo 1: Mostrar L
  setTimeout(() => {
    logo.classList.add('show-rest');
  }, 1000);

  // Passo 2: Encolher e ir para o canto
  setTimeout(() => {
    logo.classList.remove('show-rest');
    logo.classList.add('shrink');
  }, 3000);

  // Passo 3: Mostrar conteúdo
  setTimeout(() => {
    intro.style.display = 'none';
    root.classList.remove('hidden');
    root.classList.add('show');
  }, 4500);
});
