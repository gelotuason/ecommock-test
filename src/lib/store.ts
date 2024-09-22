import { configureStore } from "@reduxjs/toolkit";
import bestsellersReducer from '@/lib/features/bestsellers/bestsellersSlice';

export const makeStore = () => {
    return configureStore({
        reducer: { bestsellersReducer },
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];