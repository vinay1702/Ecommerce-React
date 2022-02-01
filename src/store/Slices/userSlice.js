import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import { loginAPI } from "../../Api/API";

const UserAdapter = createEntityAdapter();

const initialState = UserAdapter.getInitialState({
  error: null,
  status: "IDEAL",
  user: null
});

export const UserSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    logout(state, { payload }) {
      state.user = null;
      state.status = "IDEAL";
      state.error = null;
    },
    setOnFailure(state, { payload }) {
      state.user = null;
      state.error = payload;
      state.status = "FAILURE";
    },
    updateUser(state, { payload }) {
      state.user = payload || null;
      state.status = "SUCCESS";
      state.error = null;
    }
  }
});

export const { setOnFailure, updateUser, logout } = UserSlice.actions;

export const fetchUser = createAsyncThunk("USER", async (arg, { dispatch }) => {
  try {
    const response = await loginAPI(arg);

    dispatch(updateUser(response));
  } catch (err) {
    dispatch(setOnFailure(err.toString()));
  }
});

export default UserSlice.reducer;
