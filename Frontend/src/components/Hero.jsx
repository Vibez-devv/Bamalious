import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-small"> NATURAL • FRESH • HOMEMADE</p>

        <h1>
          Taste The <span>Goodness</span>
        </h1>

        <p className="hero-text">
          Refreshing Nigerian drinks made with natural ingredients,
          traditional recipes and a touch of love.
        </p>

        <div className="hero-buttons">
          <a href="#drinks" className="primary-btn">
            Explore Our Drinks
          </a>

          <a href="#how-to" className="secondary-btn">
             Learn How To Make
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="drink-circle">
          🥤
        </div>
      </div>
    </section>
  );
}

export default Hero;