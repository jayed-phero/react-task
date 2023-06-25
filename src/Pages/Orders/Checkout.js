import React, { useEffect, useState } from 'react';
import CheckoutRow from './CheckoutRow';


const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);


    return (
        <div className='max-w-6xl mx-auto py-16'>

            <div class="mb-16">
                <h2 class="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">Checkout</h2>
            </div>

            <div className='flex flex-col lg:flex-row'>
                <div className='flex-1'>
                    <div className='scroll-mt-24'>
                        <div className='p-7 border border-slate-200 dark:border-slate-700 rounded-xl '>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                                <div>
                                    <label class="text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">First name
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" type="text" value="Cole" />
                                </div>
                                <div>
                                    <label class="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">Last name
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" type="text" value="Enrico " />
                                </div>
                            </div>

                            <div class="sm:flex space-y-4 sm:space-y-0 sm:space-x-3 mt-4">
                                <div class="flex-1">
                                    <label class="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">Address
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" placeholder="" type="text" value="123, Dream Avenue, USA" />
                                </div>
                                <div class="sm:w-1/3">
                                    <label class="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">Apt, Suite *
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" type="text" value="55U - DD5 " />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 mt-4">
                                <div>
                                    <label class="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">City
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" type="text" value="Norris" />
                                </div>
                                <div>
                                    <label class="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">Postal Code
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label class=" text-base font-bold text-blue-500 dark:text-neutral-200 text-sm" data-nc-id="Label">Delivery type
                                </label>
                                <div class="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                    <div class="flex items-center text-sm sm:text-base ">
                                        <input id="Address-type-home" class="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6" type="radio" value="Address-type-home" />
                                        <label for="Address-type-home" class="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                                            <span class="text-sm font-medium">Regular delivery
                                                <span class="font-light">
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="flex items-center text-sm sm:text-base ">
                                        <input id="Address-type-office" class="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6" type="radio" value="Address-type-office" name="Address-type" />
                                        <label for="Address-type-office" class="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                                            <span class="text-sm font-medium">Express delivery
                                                <span class="font-light"> (Extra
                                                    <span class="font-medium"> $5.00
                                                    </span>)
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 my-10 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>
                <div className='w-full lg:w-[36%]'>
                    <h3 class="text-lg font-semibold">Order summary</h3>
                    <div className='mt-8 divide-y divide-slate-200/70 dark:divide-slate-700 '>
                        {
                            cartItems?.map((items, i) => (
                                <CheckoutRow
                                    key={items._id}
                                    items={items}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;