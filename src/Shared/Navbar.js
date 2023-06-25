import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation()

    const pathname = location.pathname;

    const navItems = [
        {
            name: "Home",
            path: '/'
        },
        {
            name: "Products",
            path: "/products"
        },
        {
            name: "Orders",
            path: "/orders"
        }
    ]

    console.log(pathname)
    return (
        <div class=" sticky top-0 w-full z-40 ">
            <div class="relative z-10 bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-slate-700">
                <div class="max-w-6xl mx-auto px-5 xl:px-0">
                    <div class="h-20 flex justify-between">
                        <div class="flex items-center lg:hidden flex-1">
                            <button onClick={() => setIsOpen(!isOpen)} class="p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div class="lg:flex-1 flex items-center">
                            <a class="inline-block text-slate-600 flex-shrink-0" href="/">
                                <img alt="Logo" class="block h-20 w-auto" src={logo} />
                                {/* <img class="hidden h-8 sm:h-10 w-auto dark:block" src="" /> */}
                            </a>
                        </div>
                        <div class="flex-[2] hidden lg:flex justify-center mx-4">
                            <ul class="flex items-center">
                                {
                                    navItems.map((item, i) => (
                                        <li
                                            key={i}
                                            class="flex-shrink-0">
                                            <div class="h-20 flex-shrink-0 flex items-center">
                                                <Link to={item.path} class={`inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200 ${item.path === pathname && 'text-slate-900 bg-slate-100'}`}>{item.name}</Link>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div class={`absolute transition-all duration-300 ease-in lg:hidden mx-4 px-5 py-5 rounded-3xl bg-gray-100 ${isOpen ? 'w-80 top-24 left-0' : ' w-0 -left-40 top-24'}`}>
                            <ul class="flex flex-col">
                                {
                                    navItems.map((item, i) => (
                                        <li
                                            key={i}
                                            class="flex-shrink-0">
                                            <div class="flex-shrink-0 flex items-center">
                                                <Link to={item.path} class={`w-full items-center text-sm font-medium text-slate-900 py-2.5 px-4 rounded-full hover:text-slate-900 hover:bg-slate-100 ${item.path === pathname && 'text-slate-900 bg-slate-200'}`}>{item.name}</Link>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div class="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100">
                            <button class="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center">
                                <CiSearch
                                    className='text-2xl'
                                />
                            </button>
                            <div>
                                <div class="relative" >
                                    <button class="w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center" type="button">
                                        <svg class=" w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="relative">
                                <button class="text-opacity-90 group w-10 h-10 sm:w-12 sm:h-12 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative" type="button" >
                                    <div class="w-3.5 h-3.5 flex items-center justify-center bg-blue-500 absolute top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">
                                        <span class="mt-[1px]">3</span>
                                    </div>
                                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 8H21" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;