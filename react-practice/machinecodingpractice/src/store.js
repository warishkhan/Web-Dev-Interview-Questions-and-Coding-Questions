import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './redux/DataSlice'; // Create this slice later

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
