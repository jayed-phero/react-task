import React, { useEffect, useState } from 'react';
import CheckoutRow from './CheckoutRow';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [shippingEstimate, setShippingEstimate] = useState(0);
    const [taxEstimate, setTaxEstimate] = useState(0);
    const [orderTotal, setOrderTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();


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

    const submitOrder = (orderData) => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/shop/orderconfirm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data?.status === "success") {
                    toast.success(data?.message)
                    setIsLoading(false)
                    localStorage.removeItem('cartItems');
                    navigate("/")
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setIsLoading(false)
            });
    };


    const onSubmit = (data) => {
        console.log(data)
        setIsLoading(true)
        const {
            name,
            email,
            address,
            mobile,
            city,
            postalCode,
            deliveryType,
        } = data;

        const products = [];

        cartItems.forEach((item) => {
            const { name, quantity, price, _id } = item;
            const productTotal = quantity * price;

            products.push({
                productId: _id,
                name,
                quantity,
                price,
                total: productTotal,
            });
        });

        const orderData = {
            name,
            email,
            address,
            mobile,
            city,
            postalCode,
            deliveryType,
            products,
            orderTotal,
            orderNumber: 0
        };

        console.log(orderData);
        submitOrder(orderData);

    }


    return (
        <div className='max-w-6xl mx-auto py-16'>
            <div class="mb-11 lg:mb-16">
                <h2 class="block text-2xl sm:text-3xl lg:text-4xl font-semibold ml-5">Checkout</h2>
            </div>
            <h3 class="text-slate-700 dark:text-slate-300 flex mb-5 ml-5"><span class="uppercase">SHIPPING ADDRESS</span>
                <svg fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
            </h3>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col lg:flex-row px-5 pb-16'
            >
                <div className='flex-1 '>
                    <div className='scroll-mt-24'>
                        <div className='xl:p-7 p-3 border border-slate-200 dark:border-slate-700 rounded-xl '>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                                <div>
                                    <label class="text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">Name
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" type="text" placeholder='username'
                                        {...register('name', { required: true })}
                                    />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}
                                </div>
                                <div>
                                    <label class="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">Email
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" type="email" placeholder='jhondoe@gmail.com'
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && <span className='text-red-500'>Email is required</span>}
                                </div>
                            </div>

                            <div class="sm:flex space-y-4 sm:space-y-0 sm:space-x-3 mt-4">
                                <div class="w-full">
                                    <label class="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">Address
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" placeholder="Address" type="text"
                                        {...register('address', { required: true })}
                                    />
                                    {errors.address && <span className='text-red-500'>Address is required</span>}
                                </div>
                                <div class="w-full">
                                    <label class="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">Mobile
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" type="number" placeholder='Mobile'
                                        {...register('mobile', { required: true })}
                                    />
                                    {errors.mobile && <span className='text-red-500'>Mobile is required</span>}
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 mt-4">
                                <div>
                                    <label class="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">City
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5" type="text" placeholder='City'
                                        {...register('city', { required: true })}
                                    />
                                    {errors.city && <span className='text-red-500'>City is required</span>}
                                </div>
                                <div>
                                    <label class="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm" data-nc-id="Label">Postal Code
                                    </label>
                                    <input class="block w-full border border-natural-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring bg-white disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                                        {...register('postalCode', { required: true })}
                                        placeholder='Postal Code'
                                    />
                                    {errors.postalCode && <span className='text-red-500'>Postal Code is required</span>}
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label class=" text-base font-bold text-blue-500 dark:text-neutral-200 text-sm" data-nc-id="Label">Delivery type
                                </label>
                                <div class="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                    <div class="flex items-center text-sm sm:text-base ">
                                        <input class="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6" type="radio"
                                            {...register('deliveryType', { required: true })} value="Regular-delivery"
                                        />
                                        <label for="Address-type-home" class="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                                            <span class="text-sm font-medium">Regular delivery
                                                <span class="font-light">
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="flex items-center text-sm sm:text-base ">
                                        <input id="Address-type-office" class="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6" type="radio" value="Express-delivery" name="Address-type"
                                            {...register('deliveryType', { required: true })}
                                        />
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
                                {errors.deliveryType && <span className='text-red-500'>Delivery Type is required</span>}
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
                                    setCartItems={setCartItems}
                                    cartItems={cartItems}
                                />
                            ))
                        }
                    </div>

                    {/* summary */}
                    <div className="flex-1 ">
                        <div className="mt-9">
                            <h3 className="text-lg font-semibold">Order Info</h3>
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
                            <button
                                type='submit'
                                className=" relative h-[60px] inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl mt-8 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                            >
                                {
                                    isLoading ?
                                        <div className="w-7 h-7 border-2 border-dashed rounded-full animate-spin border-white"></div>
                                        :
                                        "Confirm Order"
                                }

                            </button>
                            <div className="mt-5 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center">
                                <p className="block relative pl-5 flex items-center gap-2">
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
                                    <h3
                                        className="text-slate-900 dark:text-slate-200 underline font-medium"
                                    >
                                        Taxes
                                    </h3>{' '}
                                    and{' '}
                                    <h3
                                        className="text-slate-900 dark:text-slate-200 underline font-medium"
                                    >
                                        Shipping
                                    </h3>{' '}
                                    information
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;