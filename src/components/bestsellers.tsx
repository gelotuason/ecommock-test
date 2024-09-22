'use client';

import { useEffect } from "react";
import Link from "next/link";

import { ShoppingCart, Heart, Search, ChevronLeft, ChevronRight } from "lucide-react";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../app/css/bestsellers-swiper.css';

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchBestsellers } from "@/lib/features/bestsellers/bestsellersSlice";

export default function Bestsellers() {
    const { products, status, error } = useAppSelector(state => state.bestsellersReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBestsellers());
    }, [dispatch]);

    // TODO: swiper nav button disabled on last slide


    if (status === 'failed') {
        return (
            <section className="px-3 py-4">
                <h1 className="text-4xl text-center">Bestsellers</h1>
                <h2 className="text-lg text-center text-accent mb-4">Don&apos;t miss our bestsellers of the month!</h2>
                <p className="text-center">{error}</p>
            </section>
        )
    }

    if (status === 'succeeded') {
        return (
            <section className="px-3 py-4">
                <h1 className="text-4xl text-center">Bestsellers</h1>
                <h2 className="text-lg text-center text-accent mb-4">Don&apos;t miss our bestsellers of the month!</h2>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation={{ enabled: false }}
                    pagination={{ clickable: true }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Link
                                href='/'
                                className="bg-white shadow-sm flex bg-center bg-no-repeat h-32 bg-[length:80px_112px]"
                                style={{
                                    backgroundImage: `url('${product.image}')`,
                                }}
                            >
                                <div className="relative w-max mx-auto flex items-end h-full pb-2">
                                    <div className="bg-[#f5f5f5] rounded flex items-center divide-x shadow-lg">
                                        <button className="p-1 hover:bg-black hover:text-white hover:rounded-s transition-all duration-300">
                                            <ShoppingCart size={20} strokeWidth={1} />
                                        </button>
                                        <button className="p-1 hover:bg-black hover:text-white transition-all duration-300">
                                            <Heart size={20} strokeWidth={1} />
                                        </button>
                                        <button className="p-1 hover:bg-black hover:text-white hover:rounded-e transition-all duration-300">
                                            <Search size={20} strokeWidth={1} />
                                        </button>
                                    </div>
                                </div>
                            </Link>

                            <div className="px-2 space-y-1 mt-2">
                                <p className="font-medium">${product.price}</p>
                                <p className="text-accent">{product.category}</p>
                                <p className="font-semibold">{product.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div
                        slot="container-start"
                        className="flex justify-center gap-2 mb-4">
                        <SwiperNavButtons />
                    </div>
                </Swiper>
            </section>
        )
    }
}

function SwiperNavButtons() {
    const swiper = useSwiper();

    return (
        <>
            <button
                className="bg-white rounded-full p-2 hover:bg-black hover:text-white transition-all duration-300"
                onClick={() => swiper.slidePrev()}>
                <ChevronLeft strokeWidth={1} />
            </button>
            <button
                className="bg-white rounded-full p-2 hover:bg-black hover:text-white transition-all duration-300"
                onClick={() => swiper.slideNext()}>
                <ChevronRight strokeWidth={1} />
            </button>
        </>
    )
}