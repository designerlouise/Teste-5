// Animação de entrada
window.addEventListener("load", function () {
  setTimeout(() => {
    document.body.classList.add("loaded");
    const intro = document.getElementById("introAnimation");
    intro.style.display = "none";
  }, 4500); // Tempo total da intro
});

// React (Simples Exemplo)
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Bem-vindo à LouiseFlix!"),
    React.createElement("p", null, "Seu hub de design digital e social media!")
  );
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);
