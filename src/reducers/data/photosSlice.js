import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from './photosAPI';

const initialState = {
  data:[]
};

export const incrementAsync = createAsyncThunk(
  'photos/fetchData',
  async (amount) => {
    const response = await fetchData(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'photos',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.value += action.payload;
        console.log(action);
        state.data=action.meta['arg']
      });
  },
});

export const dataState = (state) => state;


export default counterSlice.reducer;
