'use client';

import Link from "next/link";
import Image from "next/image";

// ui component imports
import SwiperSlides from "@/components/hero";
import Footer from "@/components/footer";

// icon imports
import {
  Truck,
  Undo2,
  CreditCard,
  PhoneCall,
  Star,
  ShoppingCart,
  Heart,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// swiper imports
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../app/css/bestsellers-swiper.css';

export default function Home() {

  return (
    <main className="bg-[#f5f5f5] min-h-screenfont-[family-name:var(--font-geist-sans)]">
      {/* hero section */}
      <section>
        <SwiperSlides />
      </section>

      {/* services section */}
      <section className="flex flex-col gap-10 justify-center items-center py-12">
        <div className="flex flex-col items-center">
          <Truck size={40} strokeWidth={1} />
          <h1 className="font-semibold text-lg">Free Shipping</h1>
          <p className="text-accent">For all orders over $100</p>
        </div>
        <div className="flex flex-col items-center">
          <Undo2 size={40} strokeWidth={1} />
          <h1 className="font-semibold text-lg">30 days returns</h1>
          <p className="text-accent">For an Exchange Product</p>
        </div>
        <div className="flex flex-col items-center">
          <CreditCard size={40} strokeWidth={1} />
          <h1 className="font-semibold text-lg">Secured Payment</h1>
          <p className="text-accent">Payment Cards Accepted</p>
        </div>
        <div className="flex flex-col items-center">
          <PhoneCall size={40} strokeWidth={1} />
          <h1 className="font-semibold text-lg">Support 24/7</h1>
          <p className="text-accent">Contact us Anytime</p>
        </div>
      </section>

      {/* bestsellers section */}
      <section className="px-3 py-4">
        <h1 className="text-4xl text-center">Bestsellers</h1>
        <h2 className="text-lg text-center text-accent mb-4">Collect your loves with our newest arrivals.</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{ enabled: false }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="text-center space-y-1">
              <div className="relative h-[120px] mb-4 py-2">
                <Link
                  href='/'
                  className=""
                >
                  <Image
                    src='/slides-img-3.jpg'
                    fill
                    alt="Best Seller 1"
                    className="object-contain"
                  />

                  <div className="relative w-max mx-auto flex items-end h-full">
                    <div className="bg-[#f5f5f5] rounded flex items-center divide-x">
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
                {/* <button className="hidden md:block text-sm font-bold bg-white w-max px-4 py-1 mt-4">SHOP MORE</button> */}
              </div>

              {/* product name */}
              <p className="text-lg">title</p>

              {/* ratings */}
              <div className="flex justify-center">
                {Array.from({ length: 5 }).map(star => (
                  <Star fill="black" size={16} />
                ))}
              </div>

              {/* price */}
              <p className="text-lg">$36.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center space-y-1">
              <div className="relative h-[120px] mb-4 py-2">
                <Link
                  href='/'
                  className=""
                >
                  <Image
                    src='/slides-img-3.jpg'
                    fill
                    alt="Best Seller 1"
                    className="object-contain"
                  />

                  <div className="relative w-max mx-auto flex items-end h-full">
                    <div className="bg-[#f5f5f5] rounded flex items-center divide-x">
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
                {/* <button className="hidden md:block text-sm font-bold bg-white w-max px-4 py-1 mt-4">SHOP MORE</button> */}
              </div>

              {/* product name */}
              <p className="text-lg">title</p>

              {/* ratings */}
              <div className="flex justify-center">
                {Array.from({ length: 5 }).map(star => (
                  <Star fill="black" size={16} />
                ))}
              </div>

              {/* price */}
              <p className="text-lg">$36.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center space-y-1">
              <div className="relative h-[120px] mb-4 py-2">
                <Link
                  href='/'
                  className=""
                >
                  <Image
                    src='/slides-img-3.jpg'
                    fill
                    alt="Best Seller 1"
                    className="object-contain"
                  />

                  <div className="relative w-max mx-auto flex items-end h-full">
                    <div className="bg-[#f5f5f5] rounded flex items-center divide-x">
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
                {/* <button className="hidden md:block text-sm font-bold bg-white w-max px-4 py-1 mt-4">SHOP MORE</button> */}
              </div>

              {/* product name */}
              <p className="text-lg">title</p>

              {/* ratings */}
              <div className="flex justify-center">
                {Array.from({ length: 5 }).map(star => (
                  <Star fill="black" size={16} />
                ))}
              </div>

              {/* price */}
              <p className="text-lg">$36.00</p>
            </div>
          </SwiperSlide>
          <div
            slot="container-start"
            className="flex justify-center gap-2 mb-4">
            <SwiperNavButtons />
          </div>
        </Swiper>
      </section>

      <Footer />

    </main>
  );
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
