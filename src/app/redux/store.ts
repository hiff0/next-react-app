import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cart";
import { CartInterface } from "./features/cart";

export interface State {
    cart: CartInterface;
}

export const store = configureStore<State>({
    reducer: {
        cart: cartSlice.reducer
    }
});
