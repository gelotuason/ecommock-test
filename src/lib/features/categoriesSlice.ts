import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type CategoriesState = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: object
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [] as CategoriesState[],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.fulfilled, (state, action: PayloadAction<CategoriesState[]>) => {
            state.categories = action.payload;
        });
    },
})

export const fetchCategory = createAsyncThunk(
    'categories/fetchCategory',
    async () => {
        try {
            const categories: CategoriesState[] = []

            const [jewelry, electronics, mensClothing, womensClothing] = await Promise.all([
                axios.get('https://fakestoreapi.com/products/category/jewelery?limit=1'),
                axios.get('https://fakestoreapi.com/products/category/electronics?limit=1'),
                axios.get(`https://fakestoreapi.com/products/category/men's%20clothing?limit=1`),
                axios.get(`https://fakestoreapi.com/products/category/women's%20clothing?limit=1`)
            ]);

            categories.push(
                jewelry.data[0],
                electronics.data[0],
                mensClothing.data[0],
                womensClothing.data[0],
            );

            return categories;
        } catch (err) {
            console.error(err);
            return [];
        }
    }
)

export default categoriesSlice.reducer;