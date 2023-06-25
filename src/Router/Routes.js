import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Orders from "../Pages/Orders/Orders";
import Products from "../Pages/Home/Products/Products";
import ProductDetailsPage from "../Pages/Home/Products/ProductDetailsPage";
import axios from "axios";

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
                path: '/orders',
                element: <Orders />
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
            }
        ]
    },
    // {
    //     path: '/asf-admin',
    //     element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    //     children: [
    //         {
    //             path: '/asf-admin',
    //             element: <PrivateRoutes> <DashboardHome /></PrivateRoutes>
    //         },
    //         {
    //             path: '/asf-admin/edit/:id',
    //             element: <EditApplicationForm />,
    //             loader: async ({ params }) => {
    //                 try {
    //                     const response = await axios.get(`${process.env.REACT_APP_PROGRAME_SERVER_API_URL}/api/v1/program/data/${params.id}`);
    //                     return response.data.data;
    //                 } catch (error) {
    //                     console.error(error);
    //                     return null;
    //                 }
    //             }
    //         }
    //     ]
    // }
])

export default routes;