import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Drinks from "./components/Drinks";
import HowToMake from "./components/HowToMake";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  const [order, setOrder] = useState([]);
  const [submittedOrder, setSubmittedOrder] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // ==============================
  // ADD DRINK TO ORDER
  // ==============================

  const addToOrder = (newItem) => {
    setOrder((currentOrder) => {
      const existingItemIndex =
        currentOrder.findIndex(
          (item) =>
            item.name === newItem.name &&
            item.size === newItem.size
        );

      if (existingItemIndex !== -1) {
        return currentOrder.map((item, index) =>
          index === existingItemIndex
            ? {
                ...item,
                quantity:
                  item.quantity + newItem.quantity,
              }
            : item
        );
      }

      return [...currentOrder, newItem];
    });

    setShowCart(true);
  };

  // ==============================
  // UPDATE QUANTITY
  // ==============================

  const updateQuantity = (
    index,
    newQuantity
  ) => {
    if (newQuantity < 1) return;

    setOrder((currentOrder) =>
      currentOrder.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );
  };

  // ==============================
  // REMOVE DRINK
  // ==============================

  const removeDrink = (index) => {
    setOrder((currentOrder) =>
      currentOrder.filter(
        (_, itemIndex) => itemIndex !== index
      )
    );
  };

  // ==============================
  // CLEAR ORDER
  // ==============================

  const clearOrder = () => {
    setOrder([]);
  };

  // ==============================
  // ORDER COMPLETED
  // ==============================

  const handleOrderComplete = () => {
    setSubmittedOrder(order);

    // Keep the submitted order available
    // for OrderConfirmation.
    localStorage.setItem(
      "submittedOrder",
      JSON.stringify(order)
    );

    setOrder([]);

    setShowCart(false);

    setTimeout(() => {
      const confirmationSection =
        document.getElementById(
          "order-confirmation"
        );

      if (confirmationSection) {
        confirmationSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 300);
  };

  // ==============================
  // CART COUNT
  // ==============================

  const cartCount = order.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() =>
          setShowCart(true)
        }
      />

      <main>
        <Hero />

        <Drinks
          onAddToOrder={addToOrder}
        />

        <HowToMake />

        <Checkout
          order={order}
          onOrderComplete={
            handleOrderComplete
          }
        />

        <OrderConfirmation
          order={
            submittedOrder.length > 0
              ? submittedOrder
              : order
          }
        />
      </main>

      {/* CART */}

      {showCart && (
        <Cart
          order={order}
          onClose={() =>
            setShowCart(false)
          }
          onUpdateQuantity={
            updateQuantity
          }
          onRemove={removeDrink}
          onClear={clearOrder}
        />
      )}
    </>
  );
}

export default App;