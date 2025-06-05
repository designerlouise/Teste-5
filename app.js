function App() {
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
