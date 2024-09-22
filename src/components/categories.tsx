'use client';

import Link from "next/link";
import Image from "next/image";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../app/css/category-swiper.css'

export default function Categories() {
    return (
        <section className="p-4">
            {/* product listing */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}
                navigation={{ enabled: true }
                }
            >
                <SwiperSlide>
                    <div className="text-center">
                        {/* product image */}
                        <div className="relative h-[128px] mb-1">
                            <Link
                                href='/'
                            >
                                <Image
                                    src='/slides-img-1.jpg'
                                    fill
                                    alt="Category Name"
                                    className="object-contain rounded-full"
                                />
                            </Link>
                        </div>
                        {/* end of product image */}

                        {/* category name */}
                        <Link href='/' className="text-lg">title</Link>
                        {/* category name */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        {/* product image */}
                        <div className="relative h-[128px] mb-1">
                            <Link
                                href='/'
                            >
                                <Image
                                    src='/slides-img-1.jpg'
                                    fill
                                    alt="Category Name"
                                    className="object-contain rounded-full"
                                />
                            </Link>
                        </div>
                        {/* end of product image */}

                        {/* category name */}
                        <Link href='/' className="text-lg">title</Link>
                        {/* category name */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        {/* product image */}
                        <div className="relative h-[128px] mb-1">
                            <Link
                                href='/'
                            >
                                <Image
                                    src='/slides-img-1.jpg'
                                    fill
                                    alt="Category Name"
                                    className="object-contain rounded-full"
                                />
                            </Link>
                        </div>
                        {/* end of product image */}

                        {/* category name */}
                        <Link href='/' className="text-lg">title</Link>
                        {/* category name */}
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* end of product listing */}
        </section >
    )
}