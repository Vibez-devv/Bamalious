import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="/images/about-drinks.jpg"
            alt="Fresh Bamalicious Kitchen drinks"
          />

          <div className="about-badge">
            <i className="fa-solid fa-leaf"></i>

            <div>
              <strong>Fresh & Natural</strong>
              <span>Made with care</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">
            ABOUT BAMALICIOUS
          </p>

          <h2>
            Made With Love,
            <span> Served Fresh.</span>
          </h2>

          <p>
            At Bamalicious Natural Drinks, we believe that a good
            drink should taste fresh, natural and memorable.
            We prepare delicious Nigerian drinks using
            carefully selected ingredients and traditional
            flavours.
          </p>

          <p>
            Whether you're ordering for yourself, your family,
            a birthday, wedding, meeting or a large celebration,
            we're here to make sure your drinks are ready when
            you need them.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <div className="feature-icon">
                <i className="fa-solid fa-seedling"></i>
              </div>

              <div>
                <h3>Natural Ingredients</h3>
                <p>
                  Carefully selected ingredients for
                  great taste.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                <i className="fa-solid fa-bottle-water"></i>
              </div>

              <div>
                <h3>Freshly Prepared</h3>
                <p>
                  Prepared fresh for your order.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                <i className="fa-solid fa-calendar-check"></i>
              </div>

              <div>
                <h3>Event Orders</h3>
                <p>
                  Order ahead for your special occasions.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                <i className="fa-solid fa-heart"></i>
              </div>

              <div>
                <h3>Made With Care</h3>
                <p>
                  Every order receives attention to detail.
                </p>
              </div>
            </div>

          </div>

          <a
            href="#drinks"
            className="about-btn"
          >
            Explore Our Drinks

            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;