import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <span>Bama</span>licious
          </div>

          <p>
            Fresh, natural Nigerian drinks made with
            carefully selected ingredients for your
            everyday moments and special occasions.
          </p>

          <div className="social-links">
            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="#"
              aria-label="TikTok"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>

            <a
              href="#"
              aria-label="X"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#drinks">Our Drinks</a>
          <a href="#how-to">How To Make</a>
          <a href="#checkout">Order Ahead</a>
          <a href="#about">About Us</a>
        </div>

        {/* Drinks */}
        <div className="footer-column">
          <h3>Our Drinks</h3>

          <a href="#drinks">Zobo</a>
          <a href="#drinks">Fura</a>
          <a href="#drinks">Kunu Zaki</a>
          <a href="#drinks">Ginger Drink</a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <a href="tel:+2348131574678">
            <i className="fa-solid fa-phone"></i>

            <span>08131574678</span>
          </a>

          <a href="mailto:hello@bamaliciouskitchen.com">
            <i className="fa-solid fa-envelope"></i>

            <span>
              hello@bamaliciouskitchen.com
            </span>
          </a>

          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>

            <span>
              Lagos, Nigeria
            </span>
          </div>

          <a
            className="footer-order-btn"
            href="#checkout"
          >
            Order For Your Event

            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Bamalicious Natural Drinks.
          All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;