'use client';

import { useEffect } from "react";
import Link from "next/link";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../app/css/category-swiper.css';

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchSingleProductInCategory } from "@/lib/features/categories/categoryModelsSlice";

export default function Categories() {
    const { categoryModels, status, error } = useAppSelector(state => state.categoryModelsReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchSingleProductInCategory());
        }
    });

    if (status === 'failed') {
        return (
            <section className="px-4 py-8 text-center">
                <h1 className="text-lg mb-3 font-medium">Our Collections</h1>
                <p>{error}</p>
            </section>
        )
    } else {
        return (
            <section className="px-4 py-8">
                <h1 className="text-lg mb-3 text-center font-medium">Our Collections</h1>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation={{ enabled: true }}
                >
                    {categoryModels && categoryModels.map(categoryModel => (
                        <SwiperSlide>
                            <div className="text-center">
                                <Link
                                    href='/'
                                    className="bg-white flex mb-1 p-2 rounded-full"
                                >
                                    <img src={categoryModel.image} alt={categoryModel.category} className="h-[100px] w-[60px] mx-auto" />
                                </Link>
                                <p className="text-lg">{categoryModel.category}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section >
        )
    }
}