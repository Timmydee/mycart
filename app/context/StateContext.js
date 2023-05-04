"use client";

import { createContext, useContext, useState } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showcart, setshowcart] = useState();
  const [cartItems, setCartItems] = useState();

  const [totalPrice, settotalPrice] = useState();
  const [totalQuantity, settotalQuantity] = useState();

  const [quantity, setquantity] = useState();

  const incQty = () => {
    setquantity((prev) => prev + 1);
  };

  const decQty = () => {
    setquantity((prev) => prev + 1);
    setquantity((prev) => {
      if (prev - 1 < 1) return 1;
      prev - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showcart,
        cartItems,
        quantity,
        totalPrice,
        totalQuantity,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  return useContext(Context);
};
