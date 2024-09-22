import { configureStore } from "@reduxjs/toolkit";
import bestsellersReducer from '@/lib/features/bestsellers/bestsellersSlice';
import categoryNamesReducer from '@/lib/features/categories/categoryNamesSlice';
import categoryModelsReducer from '@/lib/features/categories/categoryModelsSlice';
import productsByCategoryReducer from '@/lib/features/products/productsByCategorySlices';

export const makeStore = () => {
    return configureStore({
        reducer: {
            bestsellersReducer,
            categoryNamesReducer,
            categoryModelsReducer,
            productsByCategoryReducer,
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];