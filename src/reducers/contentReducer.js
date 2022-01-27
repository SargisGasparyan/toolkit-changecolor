import {  createSlice } from '@reduxjs/toolkit';
const initialState = {
  content:null
};



export const contentReducer = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContent: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      console.log("aaaaaaaaaa",action);
      // immutable state based off those changes
      state.content=action.payload;
    },
  },

 
});
export const { setContent } = contentReducer.actions;


export const contentState = (state) => state;


export default contentReducer.reducer;
