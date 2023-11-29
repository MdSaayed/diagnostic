import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import Dashboard from "../layout/Dashboard";
import Private from "./Private";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import UpcomingAppointments from "../pages/dashboard/upcomingAppointments/UpcomingAppointments";
import AllAppointment from "../pages/dashboard/allAppointment/AllAppointment";
import Appointment from "../pages/dashboard/appointment/Appointment ";
import Profile from "../pages/dashboard/profile/Profile";
import UpdateProfile from "../pages/dashboard/updateProfile/UpdateProfile";
import TestResult from "../pages/dashboard/testResult/TestResult";
import AddTest from "../pages/dashboard/addTest/AddTest";
import AllTest from "../pages/AllTest";
import TestDetails from "../pages/dashboard/TestDetails";
import AllTestTable from "../pages/dashboard/allTextTable'/AllTestTable";
import UpdateTest from "../pages/dashboard/updateTest/UpdateTest";
import Payment from "../components/payement/Payment";
import PaymentHistory from "../pages/dashboard/pymentHistory/PaymentHistory";

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
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: 'allTest',
                element: <AllTest />
            },
            {
                path: '/tests/details/:id',
                element: <TestDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/tests/${params.id}`)
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
                path: 'upcomingAppointments',
                element: <UpcomingAppointments />
            },
            {
                path: 'allAppointment',
                element: <AllAppointment />
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'updateProfile',
                element: <UpdateProfile />
            },
            {
                path: 'testResult',
                element: <TestResult />
            },
            {
                path: 'allTestTable',
                element: <AllTestTable />
            },
            {
                path: 'test/update/:id',
                element: <UpdateTest />,
                loader: ({ params }) => fetch(`http://localhost:5000/tests/${params.id}`)
            },
            {
                path: 'addTest',
                element: <AddTest />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory />
            }
        ]
    }
]);

export default router;