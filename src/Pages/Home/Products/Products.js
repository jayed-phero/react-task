import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import CartSIdebar from './CartSIdebar';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [showCartSidebar, setShowCartSidebar] = useState(false);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const pages = Math.ceil(count / size);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/shop/products?page=${page}&size=${size}`);
                console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data?.data);
                    setCount(data?.count);
                } else {
                    console.error('Failed to fetch products');
                }
            } catch (error) {
                console.error('Error while fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

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
        setShowCartSidebar(true);

        setTimeout(() => {
            setShowCartSidebar(false);
        }, 1000);
    };

    console.log(products)
    return (
        <div className='max-w-6xl mx-auto px-5 xl:px-0'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10'>
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
            </div>
            {showCartSidebar && <CartSIdebar cartItems={cartItems} />}
        </div>
    );
};

export default Products;