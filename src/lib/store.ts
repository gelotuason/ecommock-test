import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '@/lib/features/categoriesSlice';

export const makeStore = () => {
    return configureStore({
        reducer: { categoriesReducer },
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];