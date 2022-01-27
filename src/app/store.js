import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/data/photosSlice';
import colorReducer from '../reducers/select/selectSlice';
import contentReducer from '../reducers/contentReducer';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    color:colorReducer,
    content:contentReducer

  },
});
