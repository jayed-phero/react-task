import React, { useEffect, useState } from 'react';
import CartRow from './CartRow';
import { GiEmptyWoodBucketHandle } from "react-icons/gi";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [shippingEstimate, setShippingEstimate] = useState(0);
    const [taxEstimate, setTaxEstimate] = useState(0);
    const [orderTotal, setOrderTotal] = useState(0);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, [setCartItems]);



    useEffect(() => {
        calculateSubtotal();
        calculateShippingEstimate();
        calculateTaxEstimate();
        calculateOrderTotal();
    }, [cartItems]);

    const calculateSubtotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        setSubtotal(total.toFixed(2));
    };

    const calculateShippingEstimate = () => {
        setShippingEstimate(25.00);
    };

    const calculateTaxEstimate = () => {
        const taxPercentage = 0.15;
        const taxAmount = subtotal * taxPercentage;
        setTaxEstimate(taxAmount.toFixed(2));
    };

    const calculateOrderTotal = () => {
        const total = parseFloat(subtotal) + parseFloat(shippingEstimate) + parseFloat(taxEstimate);
        setOrderTotal(total.toFixed(2));
    };

    return (
        <div>
            <div className='max-w-6xl mx-auto px-5 xl:px-0'>
                <hr class="border-slate-200 dark:border-slate-700 my-10 xl:my-12" />
                <div className='flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-[60%] xl:w-[55%] divide-y divide-slate-200 dark:divide-slate-700 '>
                        {
                            cartItems?.length === 0 ?
                                <div className='h-full flex flex-col items-center justify-center'>
                                    <GiEmptyWoodBucketHandle className='text-5xl' />
                                    <h3 className='font-semibold text-xl text-center text-red-500'>Cart is Empty</h3>
                                </div>
                                :
                                cartItems.map((item, i) => (
                                    <CartRow
                                        key={item._id}
                                        cart={item}
                                        cartItems={cartItems}
                                        setCartItems={setCartItems}
                                    />
                                ))
                        }
                    </div>
                    <div class="border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 my-10 lg:my-0 lg:mx-10 xl:mx-16 2xl:mx-20 flex-shrink-0"></div>

                    {/* summary */}
                    <div className="flex-1">
                        <div className="sticky top-28">
                            <h3 className="text-lg font-semibold">Order Summary</h3>
                            <div className="mt-7 text-sm text-slate-500 dark:text-slate-400 divide-y divide-slate-200/70 dark:divide-slate-700/80">
                                <div className="flex justify-between pb-4">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-slate-900 dark:text-slate-200">${subtotal}</span>
                                </div>
                                <div className="flex justify-between py-4">
                                    <span>Shipping estimate</span>
                                    <span className="font-semibold text-slate-900 dark:text-slate-200">${shippingEstimate}.00</span>
                                </div>
                                <div className="flex justify-between py-4">
                                    <span>Tax estimate</span>
                                    <span className="font-semibold text-slate-900 dark:text-slate-200">${taxEstimate}</span>
                                </div>
                                <div className="flex justify-between font-semibold text-slate-900 dark:text-slate-200 text-base pt-4">
                                    <span>Order total</span>
                                    <span>${orderTotal}</span>
                                </div>
                            </div>
                            <a
                                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl mt-8 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                href="/checkout"
                            >
                                Checkout
                            </a>
                            <div className="mt-5 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center">
                                <p className="block relative pl-5">
                                    <svg
                                        className="w-4 h-4 absolute -left-1 top-0.5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M12 8V13"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M11.9945 16H12.0035"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    Learn more{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="##"
                                        className="text-slate-900 dark:text-slate-200 underline font-medium"
                                    >
                                        Taxes
                                    </a>{' '}
                                    and{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="##"
                                        className="text-slate-900 dark:text-slate-200 underline font-medium"
                                    >
                                        Shipping
                                    </a>{' '}
                                    information
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;