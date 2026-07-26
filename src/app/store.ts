import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../app/auth/authSlice";
import cartReducer from "../app/cart/cartSlice";
import { authApi } from "./auth/authApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "./storage";

// Persist only the auth slice
const authPersistConfig = {
  key: "auth",
  storage,
};

const cartPersistConfig = {
  key: "cart",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
  [authApi.reducerPath]: authApi.reducer,
});

// Create store
export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/FLUSH",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }).concat(authApi.middleware),
});

// Create persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;