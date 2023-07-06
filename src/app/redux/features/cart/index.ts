import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartInterface {
    count : number | undefined;
}

const initialState: CartInterface = {
    count: 0 
}

export const  cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, {payload}: PayloadAction<string>) => {
            const count = state[payload as keyof typeof state] as number | 0;
            state[payload as keyof typeof state] = count + 1;
        },
        decrement: (state, {payload}: PayloadAction<string>) => {
            const count = state[payload as keyof typeof state] as number;
            if (!count) { 
                return;
            }

            if (count === 1) {
                delete state[payload as keyof typeof state];
                return;
            }
            
            state[payload as keyof typeof state] = count - 1;
        },
        reset: () => initialState
    }, 
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;