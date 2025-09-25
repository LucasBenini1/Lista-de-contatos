import { configureStore } from "@reduxjs/toolkit";
import filtroReducer from "./reducers/filtro.ts";
import contatosReducer from "./reducers/contato.ts";

export const store = configureStore({
  reducer: {
    filtro: filtroReducer,
    contatos: contatosReducer,
  },
});

export default store;
export type RootReducer = ReturnType<typeof store.getState>;
