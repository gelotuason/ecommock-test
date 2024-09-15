'use client';

import SwiperSlides from "@/components/swiper";

import { Truck, Undo2, CreditCard, PhoneCall } from "lucide-react";
import Link from "next/link";

import { fetchCategory } from "@/lib/features/categoriesSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect, useRef } from "react";

export default function Home() {
  const categories = useAppSelector(state => state.categoriesReducer.categories);
  const dispatch = useAppDispatch();
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      dispatch(fetchCategory());
      return () => { effectRan.current = true }
    }
  }, [dispatch])

  return (
    <main className="bg-[#f5f5f5] min-h-screenfont-[family-name:var(--font-geist-sans)]">
      {/* hero */}
      <section>
        <SwiperSlides />
      </section>

      {/* services */}
      <section className="flex flex-col gap-10 justify-center items-center py-12">
        <div className="flex flex-col items-center">
          <Truck size={40} strokeWidth={1} />
          <p className="font-semibold text-lg">Free Shipping</p>
          <p>For all orders over $100</p>
        </div>
        <div className="flex flex-col items-center">
          <Undo2 size={40} strokeWidth={1} />
          <p className="font-semibold text-lg">30 days returns</p>
          <p>For an Exchange Product</p>
        </div>
        <div className="flex flex-col items-center">
          <CreditCard size={40} strokeWidth={1} />
          <p className="font-semibold text-lg">Secured Payment</p>
          <p>Payment Cards Accepted</p>
        </div>
        <div className="flex flex-col items-center">
          <PhoneCall size={40} strokeWidth={1} />
          <p className="font-semibold text-lg">Support 24/7</p>
          <p>Contact us Anytime</p>
        </div>
      </section>

      {/* collection */}
      <section className="px-3 space-y-4">
        {categories && categories.map((category, index) => (
          <Link
            key={index}
            href='/'
            className="bg-white shadow-sm flex flex-col justify-end items-start bg-center bg-no-repeat h-52 bg-[length:120px_168px]"
            style={{
              backgroundImage: `url('${category.image}')`,
            }}
          >
            <p className="text-[#585858] font-medium mb-2 px-4">{category.title}</p>
            {/* <button className="hidden md:block text-sm font-bold bg-white w-max px-4 py-1 mt-4">SHOP MORE</button> */}
          </Link>
        ))}
      </section>
    </main>
  );
}
