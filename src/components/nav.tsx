'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
    Search,
    User,
    Heart,
    ShoppingCart,
    Menu,
    ChevronRight,
    X,
    Star
} from 'lucide-react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";


export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    // search drawer
    // TODO: search functionality
    // TODO: display products limit
    // TODO: add more results button

    return (
        <nav className='flex justify-between items-center py-2 px-3'>
            <Drawer open={isOpen} onOpenChange={setIsOpen} direction='left'>
                <DrawerTrigger>
                    <Menu strokeWidth={1} />
                </DrawerTrigger>
                <DrawerContent className='h-screen md:w-1/4 border-none bg-secondary'>
                    <DrawerHeader className='flex justify-between items-center bg-primary text-secondary'>
                        <DrawerTitle>Menu</DrawerTitle>
                        <DrawerDescription className='sr-only' />
                        <DrawerClose>
                            <X strokeWidth={1} />
                        </DrawerClose>
                    </DrawerHeader>
                    <div className='flex flex-col gap-8 px-6'>
                        <div>
                            <Button asChild variant="ghost" className='w-full border-b rounded-none flex justify-between py-6'>
                                <Link href='/'>
                                    Home
                                    <ChevronRight strokeWidth={0.5} />
                                </Link>
                            </Button>
                            <Button asChild variant="ghost" className='w-full border-b rounded-none flex justify-between py-6'>
                                <Link href='/'>
                                    Shop
                                    <ChevronRight strokeWidth={0.5} />
                                </Link>
                            </Button>
                        </div>
                        <div>
                            <Button variant='ghost' asChild className='w-full border-b rounded-none flex justify-start gap-4 py-6'>
                                <Link href='/'>
                                    <Heart strokeWidth={1} size={20} />
                                    Wishlist
                                </Link>
                            </Button>
                            <Button variant='ghost' asChild className='w-full border-b rounded-none flex justify-start gap-4 py-6'>
                                <Link href='/'>
                                    <User strokeWidth={1} />
                                    Login
                                </Link>
                            </Button>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>

            <h1 className='text-xl'>ecommock.</h1>

            <div className='flex'>
                <Drawer direction='top'>
                    <DrawerTrigger>
                        <Search strokeWidth={1} />
                    </DrawerTrigger>
                    <DrawerContent className='mt-0 top-0 h-max border-none bg-secondary rounded-none'>
                        <DrawerHeader>
                            <div className='relative'>
                                <DrawerTitle className='text-2xl text-center'>Search</DrawerTitle>
                                <DrawerClose className='absolute top-0 right-0'>
                                    <X strokeWidth={1} />
                                </DrawerClose>
                            </div>
                            <DrawerDescription className='space-y-4'>
                                {/* search input */}
                                <div className='relative'>
                                    <Input type='text' className='border-accent p-5' placeholder='Search products' />
                                    <Search strokeWidth={1} className='absolute inset-y-0 right-2 h-full' />
                                </div>

                                {/* quick search categories */}
                                <div className='space-y-1'>
                                    <p className='text-lg'>Quick Search:</p>
                                    <div className='divide-x-2'>
                                        <Link href='/' className='px-2'>Mens</Link>
                                        <Link href='/' className='px-2'>Womens</Link>
                                        <Link href='/' className='px-2'>Jewelries</Link>
                                        <Link href='/' className='px-2'>Electronics</Link>
                                    </div>
                                </div>

                                {/* product listing */}
                                <div className='grid grid-cols-2 gap-x-2 gap-y-4'>
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
                                                    className="object-cover"
                                                />
                                            </Link>
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
                                                    className="object-cover"
                                                />
                                            </Link>
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
                                                    className="object-cover"
                                                />
                                            </Link>
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
                                                    className="object-cover"
                                                />
                                            </Link>
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
                                </div>
                            </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter className='sr-only'>
                            <Button>Submit</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

                <Button variant='ghost' size='icon'>
                    <ShoppingCart strokeWidth={1} />
                </Button>
            </div>
        </nav>
    )
}