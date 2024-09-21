'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ListFilter, ArrowDownUp, LayoutGrid, List, Star, Heart, Search, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/category-swiper.css';

type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function Shop() {
    const [showBestselling, setShowBestselling] = useState<Checked>(false);
    const [showAtoZ, setShowAtoZ] = useState<Checked>(false);
    const [showZtoA, setShowZtoA] = useState<Checked>(false);
    const [showPriceLowToHigh, setShowPriceLowToHigh] = useState<Checked>(false);
    const [showPriceHighToLow, setShowPriceHighToLow] = useState<Checked>(false);

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

            {/* product list */}
            <section className="px-4 py-10">
                {/* control bar */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center px-4 space-x-2 bg-primary text-white rounded py-1">
                                <ListFilter size={12} />
                                <small>FILTER</small>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="min-w-[12rem] pb-2">
                                <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="flex flex-col items-start gap-2">
                                    <p className="text-base">Price: $0.00 - $399.99</p>
                                    <Slider defaultValue={[0]} max={100} step={0.1} />
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex flex-col items-start gap-2">
                                    <p className="text-base">Rating: 0</p>
                                    <Slider defaultValue={[0]} max={5} step={1} />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center px-4 space-x-2 border text-primary rounded py-1">
                                <ArrowDownUp size={12} />
                                <small>SORT</small>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem
                                    checked={showBestselling}
                                    onCheckedChange={setShowBestselling}
                                >
                                    Best selling
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={showAtoZ}
                                    onCheckedChange={setShowAtoZ}
                                >
                                    Alphabetically, A-Z
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={showZtoA}
                                    onCheckedChange={setShowZtoA}
                                >
                                    Alphabetically, Z-A
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={showPriceLowToHigh}
                                    onCheckedChange={setShowPriceLowToHigh}
                                >
                                    Price, low to high
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={showPriceHighToLow}
                                    onCheckedChange={setShowPriceHighToLow}
                                >
                                    Price, high to low
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="flex">
                        <Button variant='ghost' size='icon'>
                            <LayoutGrid strokeWidth={1} size={20} />
                        </Button>
                        <Button variant='ghost' size='icon'>
                            <List strokeWidth={1} size={20} />
                        </Button>
                    </div>
                </div>
                {/* end of control bar */}

                {/* products */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-center">
                    {/* product 1 */}
                    <div>
                        {/* product image */}
                        <div className="relative h-[120px] mb-2 py-2">
                            <Link
                                href='/'
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
                        {/* end of product image */}

                        {/* product details */}
                        <div>
                            <p className="text-lg">title</p>
                            <div className="flex justify-center">
                                {Array.from({ length: 5 }).map(star => (
                                    <Star fill="black" size={16} />
                                ))}
                            </div>
                            <p className="text-lg">$36.00</p>
                        </div>
                        {/* end of product details */}
                    </div>
                    {/* end of product 1 */}

                    {/* product 2 */}
                    <div>
                        {/* product image */}
                        <div className="relative h-[120px] mb-2 py-2">
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
                        {/* end of product image */}

                        {/* product details */}
                        <div>
                            <p className="text-lg">title</p>
                            <div className="flex justify-center">
                                {Array.from({ length: 5 }).map(star => (
                                    <Star fill="black" size={16} />
                                ))}
                            </div>
                            <p className="text-lg">$36.00</p>
                        </div>
                        {/* end of product details */}
                    </div>
                    {/* end of product 2 */}

                    {/* product 3 */}
                    <div>
                        {/* product image */}
                        <div className="relative h-[120px] mb-2 py-2">
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
                        {/* end of product image */}

                        {/* product details */}
                        <div>
                            <p className="text-lg">title</p>
                            <div className="flex justify-center">
                                {Array.from({ length: 5 }).map(star => (
                                    <Star fill="black" size={16} />
                                ))}
                            </div>
                            <p className="text-lg">$36.00</p>
                        </div>
                        {/* end of product details */}
                    </div>
                    {/* end of product 3 */}

                    {/* product 4 */}
                    <div>
                        {/* product image */}
                        <div className="relative h-[120px] mb-2 py-2">
                            <Link
                                href='/'
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
                        {/* end of product image */}

                        {/* product details */}
                        <div>
                            <p className="text-lg">title</p>
                            <div className="flex justify-center">
                                {Array.from({ length: 5 }).map(star => (
                                    <Star fill="black" size={16} />
                                ))}
                            </div>
                            <p className="text-lg">$36.00</p>
                        </div>
                        {/* end of product details */}
                    </div>
                    {/* end of product 4 */}
                </div>
                {/* end of products */}
            </section>
            {/* end of product list */}
        </main >
    )
}