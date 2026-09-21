function About() {
  return (
    <section id="about" className="about section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-subtitle">OUR STORY</p>
          <h2>About Gourmet Harvest</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="/images/burgerIMG.png"
              alt="Gourmet Harvest food"
            />
          </div>

          <div className="about-text">
            <h3>Good Food. Good Mood.</h3>

            <p>
              At Gourmet Harvest, we believe great food brings people
              together. Our kitchen focuses on fresh ingredients,
              authentic flavors and carefully prepared dishes.
            </p>

            <p>
              From comforting classics to delicious modern creations,
              every plate is prepared with care to give you a memorable
              dining experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;