'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    Star,
    Minus,
    Plus,
    Trash2,
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

    // TODO: make reusable custom drawer

    // search drawer
    // TODO: search functionality
    // TODO: add more results button (when user searched)

    return (
        <nav className='flex justify-between items-center py-2 px-3'>
            <Drawer open={isOpen} onOpenChange={setIsOpen} direction='left'>
                <DrawerTrigger>
                    <Menu strokeWidth={1} />
                </DrawerTrigger>
                <DrawerContent className='h-screen md:w-1/4 rounded-none border-none bg-secondary'>
                    <DrawerHeader className='flex justify-between items-center bg-primary text-secondary'>
                        <DrawerTitle>Menu</DrawerTitle>
                        <DrawerDescription className='sr-only' />
                        <DrawerClose>
                            <X strokeWidth={1} />
                        </DrawerClose>
                    </DrawerHeader>
                    <DrawerDescription className='flex flex-col gap-8 px-6'>
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
                    </DrawerDescription>
                </DrawerContent>
            </Drawer>

            <Link href='/' className='text-xl'>ecommock.</Link>

            <div className='flex gap-2'>
                {/* search drawer */}
                <Drawer direction='top'>
                    <DrawerTrigger>
                        <Search strokeWidth={1} />
                    </DrawerTrigger>
                    <DrawerContent className='mt-0 top-0 border-none bg-secondary rounded-none overflow-auto'>
                        <DrawerHeader>
                            <div className='relative'>
                                <DrawerTitle className='text-2xl text-center'>Search</DrawerTitle>
                                <DrawerClose className='absolute top-0 right-0'>
                                    <X strokeWidth={1} />
                                </DrawerClose>
                            </div>
                        </DrawerHeader>
                        <DrawerDescription className='space-y-4 px-4 text-center py-2'>
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
                            {/* end of quick search categories */}

                            {/* product listing */}
                            <div className='grid grid-cols-2 gap-x-2 gap-y-4 py-4'>
                                {/* product 1 */}
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
                                {/* end of product 1 */}

                                {/* product 1 */}
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
                                {/* end of product 3 */}

                                {/* product 4 */}
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
                                {/* end of product 4 */}
                            </div>
                        </DrawerDescription>
                        <DrawerFooter className='sr-only'>
                            <Button>Submit</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                {/* end of search drawer */}

                {/* cart drawer */}
                <Drawer direction='right'>
                    <DrawerTrigger>
                        <ShoppingCart strokeWidth={1} />
                    </DrawerTrigger>
                    <DrawerContent className='h-screen border-none bg-secondary rounded-none'>
                        <DrawerHeader className='flex justify-between items-center'>
                            <DrawerTitle className='text-2xl'>Cart (0)</DrawerTitle>
                            <DrawerClose>
                                <X strokeWidth={1} />
                            </DrawerClose>
                        </DrawerHeader>

                        {/* product listing */}
                        <DrawerDescription className='divide-y px-4 overflow-auto'>
                            {/* product 1 */}
                            <div className='flex gap-2 py-2'>
                                {/* product image */}
                                <div className='relative h-24 w-24 my-auto'>
                                    <Image
                                        src='/slides-img-3.jpg'
                                        fill
                                        alt='Cart product'
                                    />
                                </div>
                                {/* end of product image */}

                                {/* cart product details */}
                                <div className='space-y-2'>
                                    <p className='text-lg text-black'>Title</p>
                                    <p className='text-base'>$36.00</p>
                                    <div className='relative w-3/4'>
                                        <Input type='number' className='text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' min={0} defaultValue={1} />
                                        {/* <div className='absolute inset-y-0 h-full'>test</div> */}
                                        <Button variant='ghost' className='px-3 absolute inset-y-0 left-0'>
                                            <Minus size={12} strokeWidth={1} />
                                        </Button>
                                        <Button variant='ghost' className='px-3 absolute inset-y-0 right-0'>
                                            <Plus size={12} strokeWidth={1} />
                                        </Button>
                                    </div>
                                </div>
                                {/* end of cart product details */}

                                {/* delete cart product button */}
                                <Button variant='ghost' size='icon' className='w-max h-max px-1 py-1'>
                                    <Trash2 size={16} strokeWidth={1} />
                                </Button>
                                {/* end of delete cart product button */}
                            </div>
                            {/* end of product 1 */}

                            {/* product 2 */}
                            <div className='flex gap-2 py-2'>
                                {/* product image */}
                                <div className='relative h-24 w-24 my-auto'>
                                    <Image
                                        src='/slides-img-3.jpg'
                                        fill
                                        alt='Cart product'
                                    />
                                </div>
                                {/* end of product image */}

                                {/* cart product details */}
                                <div className='space-y-2'>
                                    <p className='text-lg text-black'>Title</p>
                                    <p className='text-base'>$36.00</p>
                                    <div className='relative w-3/4'>
                                        <Input type='number' className='text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' min={0} defaultValue={1} />
                                        {/* <div className='absolute inset-y-0 h-full'>test</div> */}
                                        <Button variant='ghost' className='px-3 absolute inset-y-0 left-0'>
                                            <Minus size={12} strokeWidth={1} />
                                        </Button>
                                        <Button variant='ghost' className='px-3 absolute inset-y-0 right-0'>
                                            <Plus size={12} strokeWidth={1} />
                                        </Button>
                                    </div>
                                </div>
                                {/* end of cart product details */}

                                {/* delete cart product button */}
                                <Button variant='ghost' size='icon' className='w-max h-max px-1 py-1'>
                                    <Trash2 size={16} strokeWidth={1} />
                                </Button>
                                {/* end of delete cart product button */}
                            </div>
                            {/* end of product 2 */}

                            {/* product 2 */}
                            <div className='flex gap-2 py-2'>
                                {/* product image */}
                                <div className='relative h-24 w-24 my-auto'>
                                    <Image
                                        src='/slides-img-3.jpg'
                                        fill
                                        alt='Cart product'
                                    />
                                </div>
                                {/* end of product image */}

                                {/* cart product details */}
                                <div className='space-y-2'>
                                    <p className='text-lg text-black'>Title</p>
                                    <p className='text-base'>$36.00</p>
                                    <div className='relative w-3/4'>
                                        <Input type='number' className='text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' min={0} defaultValue={1} />
                                        {/* <div className='absolute inset-y-0 h-full'>test</div> */}
                                        <Button variant='ghost' className='px-3 absolute inset-y-0 left-0'>
                                            <Minus size={12} strokeWidth={1} />
                                        </Button>
                                        <Button variant='ghost' className='px-3 absolute inset-y-0 right-0'>
                                            <Plus size={12} strokeWidth={1} />
                                        </Button>
                                    </div>
                                </div>
                                {/* end of cart product details */}

                                {/* delete cart product button */}
                                <Button variant='ghost' size='icon' className='w-max h-max px-1 py-1'>
                                    <Trash2 size={16} strokeWidth={1} />
                                </Button>
                                {/* end of delete cart product button */}
                            </div>
                            {/* end of product 2 */}

                            {/* product 3 */}
                            <div className='flex gap-2 py-2'>
                                {/* product image */}
                                <div className='relative h-24 w-24 my-auto'>
                                    <Image
                                        src='/slides-img-3.jpg'
                                        fill
                                        alt='Cart product'
                                    />
                                </div>
                                {/* end of product image */}

                                {/* cart product details */}
                                <div className='space-y-2'>
                                    <p className='text-lg text-black'>Title</p>
                                    <p className='text-base'>$36.00</p>
                                    <div className='relative w-3/4'>
                                        <Input type='number' className='text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' min={0} defaultValue={1} />
                                        {/* <div className='absolute inset-y-0 h-full'>test</div> */}
                                        <Button variant='ghost' className='px-3 absolute inset-y-0 left-0'>
                                            <Minus size={12} strokeWidth={1} />
                                        </Button>
                                        <Button variant='ghost' className='px-3 absolute inset-y-0 right-0'>
                                            <Plus size={12} strokeWidth={1} />
                                        </Button>
                                    </div>
                                </div>
                                {/* end of cart product details */}

                                {/* delete cart product button */}
                                <Button variant='ghost' size='icon' className='w-max h-max px-1 py-1'>
                                    <Trash2 size={16} strokeWidth={1} />
                                </Button>
                                {/* end of delete cart product button */}
                            </div>
                            {/* end of product 3 */}

                            {/* product 3 */}
                            <div className='flex gap-2 py-2'>
                                {/* product image */}
                                <div className='relative h-24 w-24 my-auto'>
                                    <Image
                                        src='/slides-img-3.jpg'
                                        fill
                                        alt='Cart product'
                                    />
                                </div>
                                {/* end of product image */}

                                {/* cart product details */}
                                <div className='space-y-2'>
                                    <p className='text-lg text-black'>Title</p>
                                    <p className='text-base'>$36.00</p>
                                    <div className='relative w-3/4'>
                                        <Input type='number' className='text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' min={0} defaultValue={1} />
                                        {/* <div className='absolute inset-y-0 h-full'>test</div> */}
                                        <Button variant='ghost' className='px-3 absolute inset-y-0 left-0'>
                                            <Minus size={12} strokeWidth={1} />
                                        </Button>
                                        <Button variant='ghost' className='px-3 absolute inset-y-0 right-0'>
                                            <Plus size={12} strokeWidth={1} />
                                        </Button>
                                    </div>
                                </div>
                                {/* end of cart product details */}

                                {/* delete cart product button */}
                                <Button variant='ghost' size='icon' className='w-max h-max px-1 py-1'>
                                    <Trash2 size={16} strokeWidth={1} />
                                </Button>
                                {/* end of delete cart product button */}
                            </div>
                            {/* end of product 3 */}
                        </DrawerDescription>
                        <DrawerFooter className=''>
                            <Button variant='outline'>More results</Button>
                            <Button variant='default'>Checkout</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                {/* end of cart drawer */}
            </div>
        </nav>
    )
}