// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter'

//Store = Onde fica o estado

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//  "Ei, o formato do meu estado global é igual ao que a 
//   função store.getState() retorna."

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
