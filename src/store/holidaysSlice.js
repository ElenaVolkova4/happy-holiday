import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../const/const";

// часто эту функцию выносят отдельно
export const fetchHolidays = createAsyncThunk(
  "holidays/fetchHolidays",
  async () => {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data;
  }
);

const holidaysSlice = createSlice({
  name: "holidays",
  initialState: {
    holidays: {}, //приходит с сервера
    holiday: "",
    loading: "",
    error: "",
  },
  reducers: {
    setHoliday(state, action) {
      state.holiday = action.payload;
    },
  },
  extraReducers: {
    [fetchHolidays.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchHolidays.fulfilled]: (state, action) => {
      state.loading = "success";
      state.holidays = action.payload;
    },
    [fetchHolidays.rejected]: (state) => {
      state.loading = "failed";
      // state.error = action.payload;
      state.holidays = {};
    },
  },
});

export const { setHoliday } = holidaysSlice.actions;

export default holidaysSlice.reducer;
