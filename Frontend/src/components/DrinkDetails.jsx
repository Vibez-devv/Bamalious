import { useState } from "react";
import "./DrinkDetails.css";

function DrinkDetails({
  drink,
  onClose,
  onAddToOrder,
}) {
  const [selectedSize, setSelectedSize] =
    useState(drink.sizes[0]);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) =>
      previous > 1 ? previous - 1 : 1
    );
  };

  const handleAddToOrder = () => {
    onAddToOrder({
      name: drink.name,
      size: selectedSize.name,
      quantity: quantity,
      image: drink.image,
    });

    onClose();
  };

  return (
    <div
      className="drink-modal"
      onClick={onClose}
    >
      <div
        className="drink-modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}

        <button
          className="drink-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>


        {/* IMAGE */}

        <div className="drink-details-image">

          <img
            src={drink.image}
            alt={drink.name}
          />

        </div>


        {/* INFORMATION */}

        <div className="drink-details-info">

          <p className="drink-details-label">
            BAMALICIOUS KITCHEN
          </p>

          <h2>
            {drink.name}
          </h2>

          <p className="drink-details-description">
            {drink.description}
          </p>


          {/* INGREDIENTS */}

          <div className="ingredients">

            <h3>
              Ingredients
            </h3>

            <ul>
              {drink.ingredients.map(
                (ingredient, index) => (

                  <li key={index}>

                    <i className="fa-solid fa-check"></i>

                    {ingredient}

                  </li>

                )
              )}
            </ul>

          </div>


          {/* SIZE */}

          <div className="size-selection">

            <h3>
              Select Size
            </h3>

            <div className="size-options">

              {drink.sizes.map(
                (size, index) => (

                  <button
                    key={index}
                    type="button"
                    className={`size-btn ${
                      selectedSize.name ===
                      size.name
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedSize(size)
                    }
                  >
                    {size.name}
                  </button>

                )
              )}

            </div>

          </div>


          {/* QUANTITY */}

          <div className="quantity-selection">

            <h3>
              Quantity
            </h3>

            <div className="quantity-control">

              <button
                type="button"
                onClick={decreaseQuantity}
                aria-label="Decrease quantity"
              >
                <i className="fa-solid fa-minus"></i>
              </button>

              <span>
                {quantity}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
                aria-label="Increase quantity"
              >
                <i className="fa-solid fa-plus"></i>
              </button>

            </div>

          </div>


          {/* PRICE INFORMATION */}

          <div className="price-discussion">

            <i className="fa-brands fa-whatsapp"></i>

            <div>

              <strong>
                Price discussed on WhatsApp
              </strong>

              <p>
                We'll confirm the price with you
                before your order is completed.
              </p>

            </div>

          </div>


          {/* ADD TO ORDER */}

          <button
            type="button"
            className="add-order-btn"
            onClick={handleAddToOrder}
          >
            <i className="fa-solid fa-basket-shopping"></i>

            Add to Order
          </button>

        </div>

      </div>
    </div>
  );
}

export default DrinkDetails;