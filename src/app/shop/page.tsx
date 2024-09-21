'use client';

import Link from "next/link";
import Image from "next/image";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/category-swiper.css';

export default function Shop() {
    return (
        <main>
            {/* breadcrumb */}
            <section
                className="bg-cover bg-no-repeat h-32 flex flex-col justify-center items-center text-white"
                style={{
                    backgroundImage: `url('/slides-img-1.jpg')`,
                }}
            >
                <h1 className="font-semibold text-3xl">Mens</h1>
                <Breadcrumb>
                    <BreadcrumbList className="text-white/60">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-white/100">Mens</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </section>
            {/* end of breadcrumb */}

            {/* categories */}
            <section className="p-4">
                {/* product listing */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation={{ enabled: true }}
                >
                    <SwiperSlide>
                        <div className="text-center">
                            {/* product image */}
                            <div className="relative h-[128px] mb-1">
                                <Link
                                    href='/'
                                >
                                    <Image
                                        src='/slides-img-3.jpg'
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
                                        src='/slides-img-3.jpg'
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
                                        src='/slides-img-3.jpg'
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
            </section>
            {/* end of categories */}
        </main>
    )
}