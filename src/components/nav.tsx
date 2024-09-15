'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';
import {
    Search,
    User,
    Heart,
    ShoppingCart,
    Menu,
    ChevronRight,
    X
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

    return (
        <nav className='flex justify-between items-center py-2 px-3'>
            <Drawer open={isOpen} onOpenChange={setIsOpen} direction='left'>
                <DrawerTrigger>
                    <Menu strokeWidth={1} />
                </DrawerTrigger>
                <DrawerContent className='h-screen md:w-1/4 border-none bg-secondary'>
                    <DrawerHeader className='flex justify-between items-center bg-primary text-secondary '>
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
                <Button variant='ghost' size='icon'>
                    <Search strokeWidth={1} />
                </Button>
                <Button variant='ghost' size='icon'>
                    <ShoppingCart strokeWidth={1} />
                </Button>
            </div>
        </nav>
    )
}