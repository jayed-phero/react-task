import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import CartSIdebar from './CartSIdebar';
import './Products.css';
import ProductsSceleton from '../../../components/ProductsSceleton';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [showCartSidebar, setShowCartSidebar] = useState(false);
    const [lastAddedItem, setLastAddedItem] = useState(null);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const pages = Math.ceil(count / size);
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/shop/products?page=${page}&size=${size}`);
                console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    if (data?.status === "success") {
                        setProducts(data?.data);
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
    }, []);


    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, [setCartItems]);

    console.log(cartItems)

    const addToCart = (product) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItemIndex = existingCartItems.findIndex((item) => item._id === product._id);

        if (existingItemIndex !== -1) {
            existingCartItems[existingItemIndex].quantity += 1;
        } else {
            const newItem = { ...product, quantity: 1 };
            existingCartItems.push(newItem);
        }

        setCartItems(existingCartItems);
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
        // toast.success("Product added in cart");
        setLastAddedItem(product);
        setShowCartSidebar(true);

        setTimeout(() => {
            setShowCartSidebar(false);
        }, 3000);
    };

    console.log(products)


    return (
        <div className='relative'>
            <div className='max-w-6xl mx-auto px-5 xl:px-0'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10'>
                    {
                        isLoading ?
                            <>
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8].map((card, i) => (
                                        <ProductsSceleton />
                                    ))
                                }
                            </>

                            :
                            <>
                                {
                                    products?.map((product, i) => (
                                        <ProductCard
                                            key={product._id}
                                            product={product}
                                            i={i}
                                            addToCart={addToCart}
                                        />
                                    ))
                                }
                            </>
                    }
                </div>
            </div>
            {
                <CartSIdebar
                    lastAddedItem={lastAddedItem}
                    showCartSidebar={showCartSidebar}
                />
            }
        </div>
    );
};

export default Products;