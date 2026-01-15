'use client';

import Image from "next/image";

import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import Link from "next/link";

export const Header = () => {

  return (
    <header className="fixed left-0 top-0 w-full z-9999 bg-white dark:bg-primary-dark dark:border-b dark:border-gray-700 py-7 lg:py-0 transition-all ease-in-out duration-300">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 flex items-center justify-between relative">
        <div>
          <h2 className="text-2xl font-semibold"> 
            <Link href='/'>
              <span className="text-primary font-bold text-3xl">Enayet</span> Hossain
            </Link>  
          </h2>
        </div>

        <nav className="hidden md:block text-dark-4">
          <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
            <li className="group relative lg:py-6.5">
              <Link href='/' className="text-gray-700 dark:text-gray-300 flex items-center gap-3">Home</Link>
            </li>
            <li className="group relative lg:py-6.5">
              <Link href='/blogs' className="text-gray-700 dark:text-gray-300 flex items-center gap-3">Blogs</Link>
            </li>
            <li className="group relative lg:py-6.5">
              <Link href='/gallery' className="text-gray-700 dark:text-gray-300 flex items-center gap-3">Gallery</Link>
            </li>
            <li className="group relative lg:py-6.5">
              <Link href='/about' className="text-gray-700 dark:text-gray-300 flex items-center gap-3">About</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">

          <Menu className="md:hidden" />

          <ThemeToggle />

          <Link href='/contact' className="hidden rounded-md text-white font-medium md:flex py-2.5 px-5.5 bg-gray-700 hover:opacity-90">
            Get In Touch
          </Link>

        </div>
      </div>
    </header>
  );
};
