import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: number;
  catagory: string;
}

const initialState: IProduct = {
  _id: "",
  imgSrc: "",
  fileKey: "",
  name: "",
  price: 0,
  catagory: "",
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct>) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
