import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const STORAGE_KEY = "cartState";


const readFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && Array.isArray(parsed.cart) && typeof parsed.totalPrice === "number") {
      return parsed;
    }
  } catch (_) {}
  return { cart: [], totalPrice: 0 };
};

const calcTotal = (cart) =>
  cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//  Initial State 
const initialState = {
  cart: [],
  totalPrice: 0,
};

//  Reducer 
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const p = action.payload;
      const unitPrice =
        typeof p.discountedPrice === "number" ? p.discountedPrice :
        typeof p.price === "number" ? p.price : 0;

      const idx = state.cart.findIndex((it) => it.id === p.id);
      let newCart;

      if (idx >= 0) {
        // increase qty
        newCart = state.cart.map((it, i) =>
          i === idx ? { ...it, qty: it.qty + 1 } : it
        );
      } else {
        // create new cart object
        const cartobj = {
          id: p.id,
          name: p.name,
          image: p.image,
          price: unitPrice,
          qty: 1,
        };
        newCart = [...state.cart, cartobj];
      }
      return { cart: newCart, totalPrice: calcTotal(newCart) };
    }

    case "REMOVE_FROM_CART": {
      const id = action.payload; // product id
      const newCart = state.cart.filter((it) => it.id !== id);
      return { cart: newCart, totalPrice: calcTotal(newCart) };
    }

    case "EMPTY_CART":
      return { cart: [], totalPrice: 0 };

    default:
      return state;
  }
}

// provider 
export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, readFromStorage() || initialState);

  // 
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
