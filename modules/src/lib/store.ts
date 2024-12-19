import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterReducer = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
  },
});

export const { increment } = counterReducer.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
