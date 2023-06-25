import React, { useState } from 'react';
import AllOrders from './AllOrders';
import RegularDelivery from './RegularDelivery';
import ExpressDelivery from './ExpressDelivery';

const Ordered = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        { name: 'All Orders', index: 0 },
        { name: 'Regular Delivery', index: 1 },
        { name: 'Express Delivery', index: 2 },
    ];

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    return (
        <div>
            <div className='max-w-6xl mx-auto px-5 xl:px-0 py-11'>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 itmes-center max-w-2xl gap-5">
                    {tabs.map((tab) => (
                        <div
                            key={tab.index}
                            className={`px-2 py-1 rounded-full border-2 border-gray-500 font-semibold hover:text-white hover:bg-blue-500 tansition-all duration-300 ease-in-out text-center cursor-pointer text-sm md:text-auto  ${selectedTab === tab.index ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => handleTabClick(tab.index)}
                        >
                            {tab.name}
                        </div>
                    ))}
                </div>
                <div className="py-11">
                    {selectedTab === 0 && <AllOrders />}
                    {selectedTab === 1 && <RegularDelivery />}
                    {selectedTab === 2 && <ExpressDelivery />}
                </div>
            </div>
        </div>
    );
};

export default Ordered;