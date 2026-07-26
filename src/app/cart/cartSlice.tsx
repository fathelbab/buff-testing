import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
}

export interface CartState {
    items: CartItem[];
    isOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isOpen: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },

        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        },

        increaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(
                item => item.id === action.payload
            );

            if (item) {
                item.quantity++;
            }
        },

        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(
                item => item.id === action.payload
            );

            if (!item) return;

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                state.items = state.items.filter(
                    i => i.id !== action.payload
                );
            }
        },
        clearCart: state => {
            state.items = [];
        },
        openCart(state) {
            state.isOpen = true;
        },

        closeCart(state) {
            state.isOpen = false;
        },

        toggleCart(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

export const {
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;