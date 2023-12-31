import React, { useEffect, useState } from 'react';
import { AiOutlineBgColors } from "react-icons/ai";
import { GiSwordBrandish } from "react-icons/gi";
import { Link } from 'react-router-dom';

const CartRow = ({ cart, setCartItems, cartItems }) => {
    // const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item._id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };


    const handleIncrease = () => {
        const updatedQuantity = quantity + 1;
        setQuantity(updatedQuantity);
        updateQuantityInStorage(updatedQuantity);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const updatedQuantity = quantity - 1;
            setQuantity(updatedQuantity);
            updateQuantityInStorage(updatedQuantity);
        }
    };

    const updateQuantityInStorage = (updatedQuantity) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item._id === cart._id) {
                return { ...item, quantity: updatedQuantity };
            }
            return item;
        });

        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };


    const { name, images, price, desc, review, _id } = cart;

    return (
        <div class="relative flex py-8 sm:py-10 xl:py-12 first:pt-0 last:pb-0">
            <div class="relative h-36 w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                <img src={images[0]}
                    class="h-full w-full object-cover"
                />
                <a class="absolute inset-0" href="/product-detail"></a>
            </div>
            <div class="ml-3 sm:ml-6 flex flex-1 flex-col">
                <div>
                    <div class="flex justify-between ">
                        <div class="flex-[1.5] ">
                            <Link
                                to={`/details/${_id}`}
                                class="text-base font-semibold">
                                {name}
                            </Link>
                            <div class="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600 dark:text-slate-300">
                                <div class="flex items-center space-x-1.5">
                                    <AiOutlineBgColors />
                                    <span>Black
                                    </span>
                                </div>
                                <span class="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                                <div class="flex items-center space-x-1.5">
                                    <GiSwordBrandish />
                                    <span>Gmieai
                                    </span>
                                </div>
                            </div>
                            <div class="mt-3 flex justify-between w-full sm:hidden relative">
                                <select name="qty" id="qty" class="form-select text-sm rounded-md py-1 border-slate-200 dark:border-slate-700 relative z-10 dark:bg-slate-800 ">
                                    {
                                        [1, 2, 3, 4, 5].map((item, i) => (
                                            <option
                                                key={i}
                                                value={i}
                                            >
                                                {i}
                                            </option>
                                        ))
                                    }
                                </select>
                                <div class="">
                                    <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full">
                                        <span class="text-green-500 !leading-none">${price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden sm:block text-center relative">
                            <div class="nc-NcInputNumber flex items-center justify-between space-x-5 relative z-10">
                                <div class="nc-NcInputNumber__content flex items-center justify-between w-[104px] sm:w-28">
                                    <button
                                        onClick={handleDecrease}
                                        class="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default" type="button" disabled="">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </button>
                                    <span class="select-none block flex-1 text-center leading-none">{cart.quantity}
                                    </span>
                                    <button
                                        onClick={handleIncrease}
                                        class="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="hidden flex-1 sm:flex justify-end">
                            <div class="mt-0.5">
                                <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                                    <span class="text-green-500 !leading-none">${price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex mt-auto pt-4 items-end justify-between text-sm">
                    <div class="rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5">
                            </path>
                        </svg>
                        <span class="ml-1 leading-none">In Stock
                        </span>
                    </div>
                    <button
                        onClick={() => removeFromCart(cart._id)}
                        class="relative z-10 flex items-center mt-3 font-bold text-blue-600 hover:text-primary-500 text-sm ">
                        <span>Remove
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartRow;