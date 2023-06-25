"use client"


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bag from '../../../assets/bag.png';
import item_1 from '../../../assets/1.png';
import item_2 from '../../../assets/2.png';
import item_3 from '../../../assets/3.png';
import item_4 from '../../../assets/4.png';
import item_5 from '../../../assets/5.png';
import QuickModal from '../../../components/QuickModal';
import { toast } from 'react-hot-toast';

const ProductCard = ({ i, product, addToCart }) => {
    const { name, images, price, desc, review, _id } = product;
    const [isLove, setIsLove] = useState(false);

    // const images = [
    //     "https://i.ibb.co/Z1y62r3/nacer-eddine-bwo-Vf-WMcayg-unsplash.jpg",
    //     "https://i.ibb.co/0VgGFsh/glass-2.jpg",
    //     "https://i.ibb.co/T8JSVdN/nubelson-fernandes-1-Xa-HEwh-KPhc-unsplash.jpg",
    //     "https://i.ibb.co/m9jh9Zy/zuzanna-adamczyk-smbcp-Z0-Ov-Rs-unsplash.jpg",
    //     "https://i.ibb.co/C22v1Hy/glass-6.webp"
    // ]
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const img = [
        item_1,
        item_2,
        item_3,
        item_4,
        item_5
    ]


    const colors = [
        "bg-violet-400",
        "bg-yellow-400",
        "bg-orange-400",
        "bg-sky-400",
        "bg-green-400"
    ]

    return (
        <div className='relative flex flex-col bg-transparent '>
            <div className='relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-1 group'>
                <Link to={`/details/${product?._id}`}>
                    <div className='flex aspect-w-11 h-60 w-full object-cover border rounded-3xl'>
                        <img
                            className='object-cover h-full w-full drop-shadow-xl rounded-3xl'
                            src={selectedImage}
                        />
                    </div>
                </Link>
                <div class="absolute bottom-0 group-hover:bottom-4 inset-x-1 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-xs py-2 px-4  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                        onClick={() => addToCart(product)}
                    >
                        <svg class="w-3.5 h-3.5 mb-0.5" viewBox="0 0 9 9" fill="none"><path d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z" fill="currentColor"></path></svg>
                        <span class="ml-1">Add to Cart</span>
                    </button>
                    <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-xs py-2 px-4  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 ml-1.5 bg-white hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                        onClick={openModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path></svg>
                        <span class="ml-1">Quick view</span>
                    </button>
                </div>

            </div>
            <div class=" rounded-full flex items-center justify-center absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.9889 14.6604L2.46891 13.1404C1.84891 12.5204 1.84891 11.5004 2.46891 10.8804L3.9889 9.36039C4.2489 9.10039 4.4589 8.59038 4.4589 8.23038V6.08036C4.4589 5.20036 5.1789 4.48038 6.0589 4.48038H8.2089C8.5689 4.48038 9.0789 4.27041 9.3389 4.01041L10.8589 2.49039C11.4789 1.87039 12.4989 1.87039 13.1189 2.49039L14.6389 4.01041C14.8989 4.27041 15.4089 4.48038 15.7689 4.48038H17.9189C18.7989 4.48038 19.5189 5.20036 19.5189 6.08036V8.23038C19.5189 8.59038 19.7289 9.10039 19.9889 9.36039L21.5089 10.8804C22.1289 11.5004 22.1289 12.5204 21.5089 13.1404L19.9889 14.6604C19.7289 14.9204 19.5189 15.4304 19.5189 15.7904V17.9403C19.5189 18.8203 18.7989 19.5404 17.9189 19.5404H15.7689C15.4089 19.5404 14.8989 19.7504 14.6389 20.0104L13.1189 21.5304C12.4989 22.1504 11.4789 22.1504 10.8589 21.5304L9.3389 20.0104C9.0789 19.7504 8.5689 19.5404 8.2089 19.5404H6.0589C5.1789 19.5404 4.4589 18.8203 4.4589 17.9403V15.7904C4.4589 15.4204 4.2489 14.9104 3.9889 14.6604Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 15L15 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.4945 14.5H14.5035" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.49451 9.5H9.50349" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span class="ml-1 leading-none">50% Discount</span>
            </div>
            <button
                className={`w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-neutral-700 dark:text-slate-200 absolute right-3 top-3 ${isLove ? 'bg-red-500' : 'bg-white'
                    }`}
                onClick={() => setIsLove(!isLove)}
            >
                <svg className={`w-5 h-5 ${isLove ? 'text-white' : 'text-gray-900'}`} viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </button>

            <div class="space-y-4 px-2.5 pt-5 pb-2.5">
                {
                    i % 2 === 0 ?
                        <div class="flex">
                            {
                                img.map((item, ii) => (
                                    <div class={`relative w-11 h-6 rounded-full overflow-hidden z-10 cursor-pointer ${selectedImage === images[ii] ? 'border border-black' : 'border border-transparent'}`} title="Black" onClick={() => setSelectedImage(images[ii])}>
                                        <div class="absolute inset-0.5 rounded-full overflow-hidden z-0 bg-cover">
                                            <img src={item} className='h-full w-full' />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div class="flex space-x-1">
                            {
                                colors.map((color, im) => (
                                    <div class={`relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer ${selectedImage === images[im] ? 'border border-black' : 'border border-transparent'}`} title="Violet" onClick={() => setSelectedImage(images[im])}>
                                        <div class={`absolute inset-0.5 rounded-full z-0 ${color}`}></div>
                                    </div>
                                ))
                            }
                        </div>
                }


                <div>
                    <Link to={`/details/${product?._id}`}> <h2 class="text-base font-semibold transition-colors hover:text-green-500 transition-all duration-300 ease-in">{name}</h2>
                    </Link>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 ">{desc.slice(0, 25)}</p>
                </div>
                <div class="flex justify-between items-end "><div class="">
                    <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                        <span class="text-green-500 !leading-none">${price}</span>
                    </div>
                </div>
                    <div class="flex items-center mb-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 pb-[1px] text-amber-400"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg><span class="text-sm ml-1 text-slate-500 dark:text-slate-400">{review} (00 reviews)</span>
                    </div>
                </div>
            </div>
            <QuickModal
                closeModal={closeModal}
                openModal={openModal}
                isOpen={isOpen}
                id={product?._id}
            />
        </div>
    );
};

export default ProductCard;