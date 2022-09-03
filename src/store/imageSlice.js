import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../const/const";

export const fetchImage = createAsyncThunk(
  "image/fetchImag",
  async (holiday) => {
    const response = await fetch(`${URL_API}image/${holiday}`);
    const data = await response.json();
    return data;
  }
);

const imageSlice = createSlice({
  name: "image",

  initialState: {
    urlImg: "", //приходит с сервера
    idImg: "",
    loading: "",
  },
  reducers: {},
  extraReducers: {
    [fetchImage.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchImage.fulfilled]: (state, action) => {
      state.loading = "success";
      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    },
    [fetchImage.rejected]: (state) => {
      state.loading = "failed";
      state.urlImg = "";
      state.idImg = "";
    },
  },
});

export default imageSlice.reducer;
