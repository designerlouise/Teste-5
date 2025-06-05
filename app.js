function App() {
  <script>
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.body.classList.add("loaded");
      const intro = document.getElementById("introAnimation");
      intro.style.display = "none";
    }, 5000); // Espera 5 segundos para completar a animação
  });
</script>
  try {
    return (
      <div data-name="app" data-file="app.js">
        <Header />
        <Hero />
        <About />
        <Services />
        <Downloads />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
