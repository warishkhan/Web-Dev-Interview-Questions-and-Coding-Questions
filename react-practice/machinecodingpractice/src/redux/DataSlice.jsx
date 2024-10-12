import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Dummy API that supports pagination
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}?_page=${page}&_limit=10`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    currentPage: 1,
    status: 'idle',
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setPage } = dataSlice.actions;

export default dataSlice.reducer;
