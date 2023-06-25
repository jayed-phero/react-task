import React, { useEffect, useState } from 'react';

const ExpressDelivery = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const pages = Math.ceil(count / size);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/shop/express?page=${page}&size=${size}`);
                console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    if (data?.status === "success") {
                        setData(data?.data);
                        setCount(data?.count);
                        setIsLoading(false)
                    }
                } else {
                    console.error('Failed to fetch products');
                    setIsLoading(false)
                }
            } catch (error) {
                console.error('Error while fetching products:', error);
                setIsLoading(false)
            }
        };

        fetchProducts();
    }, [page, count, size]);
    return (
        <section class="max-w-6xl px-5 mx-auto lg:px-0">
            <h2 class="text-lg font-medium text-gray-800 dark:text-white">Express Delivery</h2>

            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">This is all Express Delivery order from customers.</p>

            {
                isLoading ?
                    <div className='flex items-center justify-center h-96 w-full border rounded-lg mt-5'>
                        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
                    </div>
                    :
                    <div class="flex flex-col mt-6">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead class="bg-gray-50 dark:bg-gray-800">
                                            <tr>
                                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <button class="flex items-center gap-x-3 focus:outline-none">
                                                        <span>Customer</span>

                                                        <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                            <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                            <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                        </svg>
                                                    </button>
                                                </th>

                                                <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    OrderTotal
                                                </th>

                                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Postal Code
                                                </th>
                                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Address
                                                </th>

                                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Mobile</th>

                                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Product</th>

                                                <th scope="col" class="relative py-3.5 px-4">
                                                    <span class="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                            {
                                                data.map(order => (
                                                    <tr>
                                                        <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                            <div>
                                                                <h2 class="font-medium text-gray-800 dark:text-white ">{order?.name}</h2>
                                                                <p class="text-sm font-normal text-gray-600 dark:text-gray-400">{order?.email}</p>
                                                            </div>
                                                        </td>
                                                        <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                            <div class="inline px-3 py-1 text-sm font-semibold text-green-500 bg-green-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800">
                                                                {order?.orderTotal}
                                                            </div>
                                                        </td>
                                                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div>
                                                                <h4 class="text-gray-700 dark:text-gray-200">{order?.postalCode}</h4>
                                                            </div>
                                                        </td>
                                                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div>
                                                                <h4 class="text-gray-700 dark:text-gray-200">{order?.city}</h4>
                                                                <p class="text-gray-500 dark:text-gray-400">{order?.address}</p>
                                                            </div>
                                                        </td>
                                                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div>
                                                                <h4 class="text-gray-700 dark:text-gray-200">{order?.mobile}</h4>
                                                            </div>
                                                        </td>

                                                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div>
                                                                <h4 class="text-gray-700 dark:text-gray-200">Total <span className='font-semibold'>{order?.products?.length}</span> Products</h4>
                                                            </div>
                                                        </td>

                                                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                            <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default ExpressDelivery;