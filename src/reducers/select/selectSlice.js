import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../data/photosAPI';
const initialState = {
  color:null
};

export const incrementAsync = createAsyncThunk(
  'color/fetchData',
  async (amount) => {
    const response = await fetchData(amount);
    return response.data;
  }
);

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeColor: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.color=action.payload;
    },
  },

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
export const { changeColor } = colorSlice.actions;


export const dataState = (state) => state;


export default colorSlice.reducer;
