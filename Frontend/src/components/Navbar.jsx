import "./Navbar.css";

function Navbar({ cartCount, onCartClick }) {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="#home" className="navbar-logo">
          Bamalicious
          <span>Kitchen</span>
        </a>

        {/* NAVIGATION */}
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#drinks">Drinks</a>
          <a href="#how-to-make">How We Make It</a>
          <a href="#checkout">Order</a>
        </nav>

        {/* ACTIONS */}
        <div className="navbar-actions">

          {/* CART */}
          <button
            type="button"
            className="navbar-cart"
            onClick={onCartClick}
            aria-label="Open your order"
          >
            <i className="fa-solid fa-basket-shopping"></i>

            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </button>

          {/* ORDER BUTTON */}
          <a
            href="#checkout"
            className="navbar-order-btn"
          >
            Order Now
          </a>

        </div>
      </div>
    </header>
  );
}

export default Navbar;