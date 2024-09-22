import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type CategoryNames = string[]

type CategoryNamesState = {
    categories: CategoryNames
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null,
}

const initialState = {
    categories: [],
    status: 'idle',
    error: null
} satisfies CategoryNamesState as CategoryNamesState

const categoryNamesSlice = createSlice({
    name: 'categoryNames',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoryNames.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategoryNames.fulfilled, (state, action: PayloadAction<CategoryNames>) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchCategoryNames.rejected, (state, action: PayloadAction<string | unknown>) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }
})

export const fetchCategoryNames = createAsyncThunk('categories/fetchCategoryNames', async (_, { rejectWithValue }) => {
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

export default categoryNamesSlice.reducer;