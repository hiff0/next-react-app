"use client"

import { useSelector } from "react-redux";
import { selectProductAmount } from "../redux/features/selector";
import { State } from "../redux/store";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/features/cart";

const CART_COUNT = 'count';

const Product = () => {
    const productMount = useSelector((state: State) => selectProductAmount(state));
    return (
        <div>
            {productMount}
        </div>
    )
}

export default function Redux() {
    const dispatch = useDispatch();
    return (
    <div>
        <button onClick={() => dispatch(cartActions.increment(CART_COUNT))}>Плюс</button>
        <button onClick={() => dispatch(cartActions.decrement(CART_COUNT))}>Минус</button>
        <Product />
    </div>)
} 