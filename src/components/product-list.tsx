'use client';

import { useEffect } from "react";
import Link from "next/link";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchProductsByCategory } from "@/lib/features/products/productsByCategorySlices";
import { ShoppingCart, Heart, Search } from "lucide-react";

export default function ProductList({ category }: { category: string }) {
    const { products, status, error } = useAppSelector(state => state.productsByCategoryReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProductsByCategory(category));
    }, [dispatch, category]);

    if (status === 'failed') {
        return <h1 className="text-center mt-10">{error}</h1>
    }

    if (status === 'succeeded') {
        return (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 py-8">
                {products.map((product) => (
                    <div key={product.id}>
                        <Link
                            href='/'
                            className="bg-white shadow-sm flex bg-center bg-no-repeat h-32 bg-contain"
                            style={{
                                backgroundImage: `url('${product.image}')`,
                            }}
                        >
                            <div className="relative w-max mx-auto flex items-end h-full pb-2">
                                <div className="bg-[#f5f5f5] rounded flex items-center divide-x shadow-lg">
                                    <button className="p-1 hover:bg-black hover:text-white transition-all duration-300">
                                        <ShoppingCart size={20} strokeWidth={1} />
                                    </button>
                                    <button className="p-1 hover:bg-black hover:text-white transition-all duration-300">
                                        <Heart size={20} strokeWidth={1} />
                                    </button>
                                    <button className="p-1 hover:bg-black hover:text-white transition-all duration-300">
                                        <Search size={20} strokeWidth={1} />
                                    </button>
                                </div>
                            </div>
                        </Link>

                        <div className="px-2 mt-2">
                            {/* <div className="flex justify-center">
                                            {Array.from({ length: 5 }).map(star => (
                                                <Star fill="black" size={16} />
                                                ))}
                                                </div> */}
                            <p className="font-medium">${product.price}</p>
                            <p>{product.rating.rate}</p>
                            <p className="font-medium">{product.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}