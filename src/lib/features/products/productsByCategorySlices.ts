import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Products = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}

type Rating = {
    rate: number
    count: number
}

type ProductsState = {
    products: Products[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null,
}

const initialState = {
    products: [],
    status: 'idle',
    error: null,
} satisfies ProductsState as ProductsState

const productsByCategorySlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action: PayloadAction<Products[]>) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action: PayloadAction<string | unknown>) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
})

export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchProductsByCategory',
    async (categoryName: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);

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

export default productsByCategorySlice.reducer;