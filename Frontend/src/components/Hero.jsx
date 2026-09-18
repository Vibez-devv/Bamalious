import "./Hero.css";
import gdrink from "../asset/images/g drink.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">
          NATURAL • FRESH • NIGERIAN
        </p>

        <h1>
          Taste The
          <span> Goodness</span>
        </h1>

        <p className="hero-description">
          Refreshing natural drinks made with
          carefully selected ingredients and
          traditional Nigerian flavours.
        </p>

        <div className="hero-buttons">
          <a href="#drinks" className="hero-primary-btn">
            Explore Our Drinks
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          <a href="#how-to-make" className="hero-secondary-btn">
            How We Make It
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-image-circle">
          <img
            src={gdrink}
            alt="Bamalicious Natural Drink"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;