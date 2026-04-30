"use client";

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "pasta-cart";

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.payload;
    case "add": {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            quantity: 1,
          },
        ],
      };
    }
    case "increase":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case "decrease":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0),
      };
    case "remove":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "clear":
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(STORAGE_KEY);
      if (storedCart) {
        dispatch({ type: "hydrate", payload: JSON.parse(storedCart) });
      }
    } catch {
      dispatch({ type: "hydrate", payload: initialState });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo(() => {
    const totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return {
      items: state.items,
      totalQuantity,
      totalPrice,
      addItem: (product) => dispatch({ type: "add", payload: product }),
      increaseItem: (id) => dispatch({ type: "increase", payload: id }),
      decreaseItem: (id) => dispatch({ type: "decrease", payload: id }),
      removeItem: (id) => dispatch({ type: "remove", payload: id }),
      clearCart: () => dispatch({ type: "clear" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
