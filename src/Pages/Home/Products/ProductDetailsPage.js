import React, { useState } from 'react';
import item_1 from '../../../assets/1.png';
import item_2 from '../../../assets/2.png';
import item_3 from '../../../assets/3.png';
import item_4 from '../../../assets/4.png';
import item_5 from '../../../assets/5.png';
import { useLoaderData } from 'react-router-dom';

const ProductDetailsPage = () => {
    const loaderData = useLoaderData()
    const { name, images, price, desc, review } = loaderData;
    const [quantity, setQuantity] = useState(1);
    const [isLove, setIsLove] = useState(false);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    console.log(loaderData)

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const img = [
        item_1,
        item_2,
        item_3,
        item_4,
        item_5
    ]
    return (
        <div className='max-w-6xl mx-auto px-5 xl:px-0'>
            <div className='lg:flex py-16'>
                <div className='w-full lg:w-[55%] '>
                    <div className='relative'>
                        <div className='aspect-w-16 aspect-h-16 relative'>
                            <img src={selectedImage} alt=""
                                className='w-full rounded-2xl object-cover'
                            />
                        </div>
                        <div class="absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 nc-shadow-lg rounded-full flex items-center justify-center text-slate-700 text-slate-900 dark:text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path></svg>
                            <span class="ml-1 leading-none">New in</span>
                        </div>
                        <button
                            className={`w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-neutral-700 dark:text-slate-200 nc-shadow-lg absolute right-3 top-3 ${isLove ? 'bg-red-500' : 'bg-white'
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
                    </div>
                </div>
                <div className='class="w-full lg:w-[45%] pt-10 lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10"'>
                    <div>
                        <h2 class="text-2xl sm:text-3xl font-semibold">{name} </h2>
                        <div class="flex items-center mt-5 space-x-4 sm:space-x-5">
                            <div class="">
                                <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold">
                                    <span class="text-green-500 !leading-none">${price}
                                    </span>
                                </div>
                            </div>
                            <div class="h-7 border-l border-slate-300 dark:border-slate-700">
                            </div>
                            <div class="flex items-center">
                                <a href="#reviews" class="flex items-center text-sm font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 pb-[1px] text-yellow-400">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <div class="ml-1.5 flex">
                                        <span>{review}.00  </span>
                                        <span class="block mx-2">·</span>
                                        <span class="text-slate-600 dark:text-slate-400 underline">142 reviews </span>
                                    </div>
                                </a>
                                <span class="hidden sm:block mx-2.5">·</span>
                                <div class="hidden sm:flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-3.5 h-3.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                        </path>
                                    </svg>
                                    <span class="ml-1 leading-none">New in</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="">
                        <div>
                            <label for="">
                                <span class="text-sm font-medium">Color:
                                    <span class="ml-1 font-semibold">Black</span>
                                </span>
                            </label>
                            {/* max-w-[75px] h-10 sm:h-11 */}
                            <div class="flex mt-3">
                                {
                                    img.map((item, ii) => (
                                        <div class={`relative w-16 h-8 rounded-full overflow-hidden z-10 cursor-pointer ${selectedImage === images[ii] ? 'border border-black' : 'border border-transparent'}`} title="Black" onClick={() => setSelectedImage(images[ii])}>
                                            <div class="absolute inset-0.5 rounded-full overflow-hidden z-0 bg-cover">
                                                <img src={item} className='h-full w-full' />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div class="flex space-x-3.5 mt-7">
                        <div class="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
                            <div class=" flex items-center justify-between space-x-5 w-full">
                                <div className="flex items-center justify-between w-[104px] sm:w-28">
                                    <button
                                        className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
                                        type="button"
                                        onClick={handleDecrease}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <span className="select-none block flex-1 text-center leading-none">{quantity}</span>
                                    <button
                                        className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
                                        type="button"
                                        onClick={handleIncrease}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl flex-1 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                            <svg class="hidden sm:inline-block w-5 h-5 mb-0.5" viewBox="0 0 9 9" fill="none"><path d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z" fill="currentColor"></path></svg>
                            <span class="ml-3">Add to cart</span>
                        </button>
                    </div>
                    <hr class=" 2xl:!my-10 border-slate-200 dark:border-slate-700"></hr>
                    <div className='w-full rounded-2xl space-y-2.5'>
                        <button class="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 " id="headlessui-disclosure-button-:R179bdcja:" type="button" aria-expanded="true" data-headlessui-state="open" aria-controls="headlessui-disclosure-panel-:R279bdcja:">
                            <span>Description</span>
                        </button>
                        <div class="p-4 pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6" id="headlessui-disclosure-panel-:R279bdcja:" data-headlessui-state="open">Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;