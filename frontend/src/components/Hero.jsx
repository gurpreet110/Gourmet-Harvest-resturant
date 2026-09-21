function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">WELCOME TO</p>

        <h1>Gourmet Harvest</h1>

        <p className="hero-description">
          Delicious food, fresh ingredients and unforgettable flavors.
        </p>

        <div className="hero-buttons">
          <a href="#menu" className="btn primary-btn">
            Explore Menu
          </a>

          <a href="#reservation" className="btn secondary-btn">
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;