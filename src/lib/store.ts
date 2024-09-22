import { configureStore } from "@reduxjs/toolkit";
import bestsellersReducer from '@/lib/features/bestsellers/bestsellersSlice';
import categoriesReducer from '@/lib/features/categories/categoriesSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            bestsellersReducer,
            categoriesReducer,
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];