import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import OurMenu from "../pages/OurMenu";
import Home from "../pages/Home";
import Order from "../pages/Order";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/Cart";
import Private from "./Private";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/dashboard/addItems/AddItems";
import MangeItems from "../pages/dashboard/manageItems/MangeItems";
import UpdateItem from "../pages/dashboard/updateItem/UpdateItem";
import Payment from "../pages/dashboard/payment/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <OurMenu />
            },
            {
                path: '/order/:category',
                element: <Order />
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Private><Dashboard /></Private>,
        children: [
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: 'additems',
                element: <AdminRoute><AddItems /></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <MangeItems />
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem /></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
]);

export default router;