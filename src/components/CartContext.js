import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    // if book.id is not present in cart then add else alert
    const isBookInCart = cartItems.some((item) => item.id === book.id);
    if (isBookInCart) {
      alert("Book is already add to cart");
    } else {
      setCartItems([...cartItems, book]);
    }
  };

  const removeFromCart = (bookId) => {
    setCartItems(cartItems.filter((item) => item.id !== bookId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
