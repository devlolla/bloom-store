// src/features/counter/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

//Slice = Onde ficam as regras 


const initialState = {
  value: 0,
};

// Reducer

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

// Actions

export const { 
  increment, 
  decrement, 
  incrementByAmount 
} = counterSlice.actions;

export default counterSlice.reducer;
