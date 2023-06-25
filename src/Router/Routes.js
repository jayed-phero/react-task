import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Products from "../Pages/Home/Products/Products";
import ProductDetailsPage from "../Pages/Home/Products/ProductDetailsPage";
import axios from "axios";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Ordered from "../Pages/Ordered/Ordered";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/details/:id',
                element: <ProductDetailsPage />,
                loader: async ({ params }) => {
                    try {
                        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/shop/data/${params.id}`);
                        return response.data.data;
                    } catch (error) {
                        console.error(error);
                        return null;
                    }
                }
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: '/orders',
                element: <Ordered />
            }
        ]
    }
])

export default routes;