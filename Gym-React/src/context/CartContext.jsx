import { createContext, useEffect, useReducer } from "react";


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
        case "UPDATE_QUANTITY":
            // Kiểm tra payload có chứa id và quantity
            if (
                action.payload &&
                action.payload.id &&
                action.payload.quantity >= 0
            ) {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                );
            }
            return state;
        case "REMOVE_FROM_CART":
            return state.filter((item) => item.id !== action.payload.id);
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], (initial) => {
        // Lấy giỏ hàng từ localStorage khi trang được tải lại
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : initial;
    });

    useEffect(() => {
        // Lưu giỏ hàng vào localStorage mỗi khi giỏ hàng thay đổi
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
