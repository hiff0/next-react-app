import { State } from "../store";

const selectCartModule = (state: State) => state.cart;

export const selectProductAmount = (state: State,) => selectCartModule(state).count || 0;