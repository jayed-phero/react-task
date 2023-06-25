import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

const CartSIdebar = ({ lastAddedItem, showCartSidebar }) => {
    // const lastAddedItem = cartItems[cartItems.length - 1];

    return (
        <div>
            <div className={`transition-all duration-300 ease-in overflow-hidden absolute ${showCartSidebar ? 'right-5 top-0 w-[400px]' : 'w-0 -right-64 top-0'}`}>
                {
                    lastAddedItem &&
                    <div class="p-4 max-w-md w-full bg-white dark:bg-slate-800 shadow-lg rounded-2xl pointer-events-auto ring-1 ring-black/5 dark:ring-white/10 text-slate-900 dark:text-slate-200 opacity-100 translate-x-0">
                        <p class="block text-base font-semibold leading-none">Added to cart!</p>
                        <div class="border-t border-slate-200 dark:border-slate-700 my-4"></div>
                        <div class="flex ">
                            <div class="h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                                <img
                                    src={lastAddedItem?.images[0]}
                                    class="h-full w-full object-cover"
                                />
                            </div>
                            <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div class="flex justify-between ">
                                        <div>
                                            <h3 class="text-base font-medium ">{lastAddedItem?.name}</h3>
                                            <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                                <span>Violet</span>
                                                <span class="mx-2 border-l border-slate-200 dark:border-slate-700 h-4"></span>
                                                <span>Gasio</span>
                                            </p>
                                        </div>
                                        <div class="mt-0.5">
                                            <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                                <span class="text-green-500 !leading-none">${lastAddedItem?.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                    <p class="text-gray-500 dark:text-slate-400">Qty {lastAddedItem?.quantity}
                                    </p>
                                    <Link
                                        to='/cart'
                                        class="flex">
                                        <button type="button" class="font-medium text-blue-600 dark:text-primary-500 ">View cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>
    );
};

export default CartSIdebar;