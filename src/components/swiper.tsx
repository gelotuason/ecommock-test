'use client';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import '../app/swiper.css';

import Slide1 from '../../public/slides-img-1.jpg';
import Slide2 from '../../public/slides-img-2.jpg';
import Slide3 from '../../public/slides-img-3.jpg';
import Link from 'next/link';

type SlidesProps = {
    imgSrc: string
    text: string
    credit: string
}

const slides: SlidesProps[] = [
    { imgSrc: Slide1.src, text: 'Slide 1', credit: 'Joel Muniz' },
    { imgSrc: Slide2.src, text: 'Slide 2', credit: 'Jacob Vega' },
    { imgSrc: Slide3.src, text: 'Slide 3', credit: 'Kelly Sikkema' },
]

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
            {slides.map((slide, index) => (
                <SwiperSlide
                    key={index}
                    style={{
                        backgroundImage: `url('${slide.imgSrc}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top 0 left -100px',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'start',
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                        gap: '2rem'
                    }}
                >
                    <h1 className='text-5xl font-bold text-white/60'>Lorem ipsum dolor sit amet.</h1>
                    <Link href='/' className='text-white/80 text-xl border-2 border-white/80 px-6 py-2 hover:bg-black hover:border-black transition-all duration-300'>Shop now</Link>
                    <small className='text-white/60 font-light bottom-1 right-1 absolute'>Photo by {slide.credit} on Unsplash.</small>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}