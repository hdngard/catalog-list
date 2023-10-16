import {configureStore} from '@reduxjs/toolkit'
import mainSlice from "./slices/main/mainSlice";
import {catalogApi} from "../services/CatalogService";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    main: mainSlice,
    [catalogApi.reducerPath]: catalogApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catalogApi.middleware)

})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch