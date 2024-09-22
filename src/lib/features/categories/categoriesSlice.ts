import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type Categories = string[]

type CategoriesState = {
    categories: Categories
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null,
}

const initialState = {
    categories: [],
    status: 'idle',
    error: null
} satisfies CategoriesState as CategoriesState

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Categories>) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action: PayloadAction<string | unknown>) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }
})

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');

        if (response.data.length === 0) return rejectWithValue('Data is currently unavailable.');

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue(error);
        }
    }
}
)

export default categoriesSlice.reducer;