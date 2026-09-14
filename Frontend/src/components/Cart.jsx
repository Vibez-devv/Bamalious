import "./Cart.css";

function Cart({
  order,
  onClose,
  onUpdateQuantity,
  onRemove,
  onClear,
}) {
  const totalItems = order.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleCheckout = () => {
    onClose();

    setTimeout(() => {
      const checkoutSection =
        document.getElementById("checkout");

      if (checkoutSection) {
        checkoutSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div
      className="cart-overlay"
      onClick={onClose}
    >
      <aside
        className="cart-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="cart-header">
          <div>
            <p className="cart-label">
              BAMALICIOUS KITCHEN
            </p>

            <h2>Your Order</h2>
          </div>

          <button
            type="button"
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* EMPTY CART */}
        {order.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <i className="fa-solid fa-basket-shopping"></i>
            </div>

            <h3>Your order is empty</h3>

            <p>
              Add your favourite drinks to your
              order and they will appear here.
            </p>

            <button
              type="button"
              className="continue-shopping-btn"
              onClick={onClose}
            >
              <i className="fa-solid fa-arrow-left"></i>
              Continue Browsing
            </button>
          </div>
        ) : (
          <>
            {/* ORDER ITEMS */}
            <div className="cart-items">
              {order.map((item, index) => (
                <div
                  className="cart-item"
                  key={`${item.name}-${item.size}-${index}`}
                >
                  {/* IMAGE */}
                  <div className="cart-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="cart-item-details">
                    <div className="cart-item-top">
                      <div>
                        <h3>{item.name}</h3>

                        <p className="cart-item-size">
                          Size: {item.size}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="remove-item-btn"
                        onClick={() =>
                          onRemove(index)
                        }
                        aria-label={`Remove ${item.name}`}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>

                    {/* QUANTITY */}
                    <div className="cart-item-bottom">
                      <div className="cart-quantity">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(
                              index,
                              item.quantity - 1
                            )
                          }
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(
                              index,
                              item.quantity + 1
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>

                      <span className="price-discussed">
                        Price on WhatsApp
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CART SUMMARY */}
            <div className="cart-summary">
              <div className="cart-total-row">
                <span>Total Drinks</span>

                <strong>{totalItems}</strong>
              </div>

              <div className="cart-price-notice">
                <i className="fa-brands fa-whatsapp"></i>

                <div>
                  <strong>
                    Price discussed on WhatsApp
                  </strong>

                  <p>
                    We will confirm the price with
                    you before your order is completed.
                  </p>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="cart-actions">
              <button
                type="button"
                className="checkout-btn"
                onClick={handleCheckout}
              >
                <i className="fa-solid fa-arrow-right"></i>
                Continue to Checkout
              </button>

              <button
                type="button"
                className="clear-order-btn"
                onClick={onClear}
              >
                <i className="fa-solid fa-trash-can"></i>
                Clear Order
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;