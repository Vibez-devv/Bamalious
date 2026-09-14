import { useState } from "react";
import "./Drinks.css";
import DrinkDetails from "./DrinkDetails";

const drinks = [
  {
    id: 1,
    name: "Zobo",
    image: "/images/zobo.jpg",

    description:
      "A refreshing Nigerian hibiscus drink infused with natural spices and ginger.",

    ingredients: [
      "Hibiscus leaves",
      "Fresh ginger",
      "Cloves",
      "Pineapple",
      "Water",
      "Cucumber",
      "Bitru",
    ],

    sizes: [
      {
        name: "50cl",
      },
    ],
  },

  {
    id: 2,
    name: "Fura",
    image: "/images/fura.jpg",

    description:
      "A traditional Nigerian millet-based drink with a rich and refreshing taste.",

    ingredients: [
      "Millet",
      "Fresh ginger",
      "Cloves",
      "Milk",
      "Water",
      "Coconut",
    ],

    sizes: [
      {
        name: "50cl",
      },
      {
        name: "500ml",
      },
      {
        name: "1 Liter",
      },
    ],
  },

  {
    id: 3,
    name: "Kunu Zaki",
    image: "/images/kunu-zaki.jpg",

    description:
      "A smooth and refreshing traditional drink made from grains and natural spices.",

    ingredients: [
      "Millet",
      "Ginger",
      "Cloves",
      "Sweetener",
      "Water",
    ],

    sizes: [
      {
        name: "350ml",
      },
      {
        name: "500ml",
      },
      {
        name: "1 Liter",
      },
    ],
  },

  {
    id: 4,
    name: "Ginger Drink",
    image: "/images/ginger-drink.jpg",

    description:
      "A naturally spicy and refreshing ginger drink made with fresh ingredients.",

    ingredients: [
      "Fresh ginger",
      "Lemon",
      "Pineapple",
      "Cloves",
      "Water",
    ],

    sizes: [
      {
        name: "350ml",
      },
      {
        name: "500ml",
      },
      {
        name: "1 Liter",
      },
    ],
  },
];

function Drinks({ onAddToOrder }) {
  const [selectedDrink, setSelectedDrink] =
    useState(null);

  return (
    <section
      className="drinks-section"
      id="drinks"
    >
      <div className="drinks-heading">

        <p className="section-label">
          OUR SPECIAL DRINKS
        </p>

        <h2>
          Taste The{" "}
          <span>Difference</span>
        </h2>

        <p>
          Freshly prepared Nigerian drinks made
          with carefully selected ingredients.
        </p>

      </div>

      <div className="drinks-grid">

        {drinks.map((drink) => (

          <article
            className="drink-card"
            key={drink.id}
          >

            <div className="drink-image">

              <img
                src={drink.image}
                alt={drink.name}
              />

            </div>

            <div className="drink-content">

              <h3>
                {drink.name}
              </h3>

              <p>
                {drink.description}
              </p>

              <div className="starting-price">
                Price discussed on WhatsApp
              </div>

              <button
                className="view-drink-btn"
                onClick={() =>
                  setSelectedDrink(drink)
                }
              >
                View Drink

                <i className="fa-solid fa-arrow-right"></i>
              </button>

            </div>

          </article>

        ))}

      </div>

      {selectedDrink && (

        <DrinkDetails
          drink={selectedDrink}
          onClose={() =>
            setSelectedDrink(null)
          }
          onAddToOrder={onAddToOrder}
        />

      )}

    </section>
  );
}

export default Drinks;