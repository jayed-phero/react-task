import React from 'react';

const ProductsSceleton = () => {
    return (
        <div class="flex flex-col animate-pulse">
            <div class="flex-shrink-0">
                <span class="w-full h-60 block bg-gray-200 rounded-3xl dark:bg-gray-700"></span>
            </div>

            <div class="mt-2 w-full">
                <div class="flex-shrink-0 flex gap-3 mt-5">
                    <span class="w-full h-4 block bg-gray-200 rounded-3xl dark:bg-gray-700"></span>
                    <span class="w-full h-4 block bg-gray-200 rounded-3xl dark:bg-gray-700"></span>
                </div>

                <ul class="mt-5 space-y-3">
                    <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                    <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                    <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                    <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                </ul>
            </div>
        </div>
    );
};

export default ProductsSceleton;