'use client';

import Image from "next/image";

import { ShoppingCart, Heart, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";

export default function Product({ params }: { params: { id: number } }) {
    return (
        <main className="px-4 py-8 space-y-8">
            <article>
                <Breadcrumb>
                    <BreadcrumbList className="text-base">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Mens</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-black">Slim Fit T-Shirt</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </article>

            {/* product section */}
            <section>
                <div>
                    {/* product image */}
                    <Image
                        src='/slides-img-3.jpg'
                        alt="Product"
                        width={500}
                        height={500}
                    />
                    {/* end of product image */}

                    {/* product details */}
                    <div className="mt-2">
                        <h1 className="text-xl">Product name</h1>
                        <p className="text-lg">$36.00</p>
                        <p className="text-accent">Product description</p>
                    </div>
                    {/* end of product details */}
                </div>
            </section>
            {/* end of product section */}

            {/* action section */}
            <section className="space-y-4">
                <div className="flex gap-1">
                    {/* set quantity */}
                    <div className='relative w-full'>
                        <Input type='number' className='text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' min={0} defaultValue={1} />
                        <Button variant='ghost' className='px-3 absolute inset-y-0 left-0'>
                            <Minus size={16} strokeWidth={1} />
                        </Button>
                        <Button variant='ghost' className='px-3 absolute inset-y-0 right-0'>
                            <Plus size={16} strokeWidth={1} />
                        </Button>
                    </div>
                    {/* end of set quantity */}

                    {/* add to cart */}
                    <Button size='icon' variant='ghost' className="px-2">
                        <ShoppingCart strokeWidth={1} />
                    </Button>
                    {/* end of add to cart */}

                    {/* add to wishlist */}
                    <Button size='icon' variant='ghost' className="px-2">
                        <Heart strokeWidth={1} />
                    </Button>
                    {/* end of add to wishlist */}
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Accept terms and conditions
                    </label>
                </div>

                <Button className="w-full">BUY NOW</Button>
            </section>
            {/* end of action section */}
        </main>
    )
}