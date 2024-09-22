import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type CategoryModel = {
    category: string
    image: string
}

type CategoryModelsState = {
    categoryModels: CategoryModel[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null,
}

const initialState = {
    categoryModels: [],
    status: 'idle',
    error: null,
} satisfies CategoryModelsState as CategoryModelsState

const categoryModelsSlice = createSlice({
    name: 'categoryModels',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProductInCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSingleProductInCategory.fulfilled, (state, action: PayloadAction<CategoryModel[]>) => {
                state.status = 'succeeded';
                console.log(action.payload);
                state.categoryModels = action.payload;
            })
            .addCase(fetchSingleProductInCategory.rejected, (state, action: PayloadAction<string | unknown>) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }

})

export const fetchSingleProductInCategory = createAsyncThunk('categories/fetchSingleProductInCategory', async (_, { rejectWithValue }) => {
    try {
        const categories: CategoryModel[] = [];

        const [electronics, jewelery, mens, womens] = await Promise.all([
            axios.get('https://fakestoreapi.com/products/category/electronics?limit=1'),
            axios.get('https://fakestoreapi.com/products/category/jewelery?limit=1'),
            axios.get(`https://fakestoreapi.com/products/category/men's%20clothing?limit=1`),
            axios.get(`https://fakestoreapi.com/products/category/women's%20clothing?limit=1`)
        ]);

        categories.push(
            ...electronics.data,
            ...jewelery.data,
            ...mens.data,
            ...womens.data,
        )

        if (categories.length === 0) return rejectWithValue('Data is currently unavailable.');

        return categories;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue(error);
        }
    }
}
)

export default categoryModelsSlice.reducer;