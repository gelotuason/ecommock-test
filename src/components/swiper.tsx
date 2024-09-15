'use client';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import '../app/swiper.css';

export default function SwiperSlides() {

    return (
        <Swiper
            modules={[EffectFade, Navigation, Pagination]}
            effect={'fade'}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            style={{ height: 500 }}
            breakpoints={{
                0: { navigation: { enabled: false } },
                768: { navigation: { enabled: true } },
            }}
        >
            {Array.from({ length: 3 }).map((_, index) => (
                <SwiperSlide
                    key={index}
                    style={{
                        // backgroundImage: `url('${slide.bgPath}')`,
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'top 0 left -280px',
                        // backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'start',
                        paddingLeft: '24px'
                    }}
                >
                    <p>Slide {index + 1}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}