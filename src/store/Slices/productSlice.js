import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import { productsAPI } from "../../Api/API";

const ProductAdapter = createEntityAdapter();

const initialState = ProductAdapter.getInitialState({
  error: null,
  status: "IDEAL",
  products: [],
  selectedProducts: {}
});

export const ProductSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setOnFailure(state, { payload }) {
      state.products = null;
      state.error = payload;
      state.status = "FAILURE";
    },
    setProducts(state, { payload }) {
      state.products = payload || null;
      state.status = "SUCCESS";
      state.error = null;
    },
    updateProducts(state, { payload }) {
      state.selectedProducts = payload;
    }
  }
});

export const {
  setOnFailure,
  setProducts,
  updateProducts
} = ProductSlice.actions;

export const fetchProducts = createAsyncThunk(
  "USER",
  async (arg, { dispatch }) => {
    try {
      const response = await productsAPI();
      dispatch(setProducts(response));
    } catch (err) {
      dispatch(setOnFailure(err.toString()));
    }
  }
);

export default ProductSlice.reducer;
