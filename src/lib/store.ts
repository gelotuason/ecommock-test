import { configureStore } from "@reduxjs/toolkit";
import bestsellersReducer from '@/lib/features/bestsellers/bestsellersSlice';
import categoryNamesReducer from '@/lib/features/categories/categoryNamesSlice';
import categoryModelsReducer from '@/lib/features/categories/categoryModelsSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            bestsellersReducer,
            categoryNamesReducer,
            categoryModelsReducer,
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];