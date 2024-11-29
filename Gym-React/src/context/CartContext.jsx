import { createContext, useReducer } from "react";


export const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? {
                              ...item,
                              quantity: item.quantity + action.payload.quantity,
                          }
                        : item
                );
            }
            return [
                ...state,
                { ...action.payload, quantity: action.payload.quantity },
            ];
        case "REMOVE_FROM_CART":
            return state.filter((item) => item.id !== action.payload.id);
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
