import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import user from "./Slices/userSlice";

import products from "./Slices/productSlice";

const middleware = [...getDefaultMiddleware({ thunk: true })];
const reducer = combineReducers({ user, products });

const Store = configureStore({ reducer, middleware });

export default Store;
