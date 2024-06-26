import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../pages/HomePage";

export type CartItem = {
  product: Product;
  quantity: number;
};

interface CartState {
  cartItems: CartItem[];
}
const initialState: CartState = {
  cartItems: [] as CartItem[],
};
const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.cartItems.find(
        (cart) => cart.product?.id === action?.payload?.id!
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeItem: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.cartItems.find(
        (cart) => cart.product?.id === action.payload.id
      );

      const index = state.cartItems.indexOf(item!);
      state.cartItems.splice(index, 1);
    },
  },
});

export const { addToList, updateQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
