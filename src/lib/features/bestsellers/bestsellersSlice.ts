import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type Products = {
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


const bestsellersSlice = createSlice({
    name: 'bestsellers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBestsellers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBestsellers.fulfilled, (state, action: PayloadAction<Products[]>) => {
                state.status = 'succeeded';
                const product = action.payload.filter(product => product.rating.count > 399);
                state.products = product;
            })
            .addCase(fetchBestsellers.rejected, (state, action: PayloadAction<string | unknown>) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
})

export const fetchBestsellers = createAsyncThunk('bestsellers/fetchBestsellers', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/');

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

export default bestsellersSlice.reducer;