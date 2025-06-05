janela.addEventListener('DOMContentLoaded', () => {
  const logotipo = document.getElementById('logo-texto');
  const intro = document.getElementById('intro');
  const root = document.getElementById('root');

  // Cria o efeito de "L" separado do "OUISEFLIX"
  const letraL = document.createElement('span');
  letterL.classList.add('letra');
  letraL.textContent = 'L';

  const restText = document.createElement('span');
  restText.classList.add('rest');
  restText.textContent = 'OUISEFLIX';

  logo.textContent = '';
  logo.appendChild(letraL);
  logo.appendChild(restText);

  // Passo 1: Mostrar L
  definirTempoLimite(() => {
    logo.classList.add('mostrar-rest');
  }, 1000);

  // Passo 2: Anima suavemente até o canto
  definirTempoLimite(() => {
    logo.classList.remove('show-rest');
    logo.classList.add('logo-animate-move');
  }, 3000);

  // Passo 3: Mostrar conteúdo
  definirTempoLimite(() => {
    intro.style.display = 'nenhum';
    root.classList.remove('oculto');
    root.classList.add('mostrar');
  }, 4500);
});
