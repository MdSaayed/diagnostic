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
import Error from "../pages/404";
import Repport from "../pages/dashboard/report/Repport";
import SeeReport from "../pages/dashboard/seeReport/SeeReport";
import Contact from "../pages/Contact";
import OurDoctors from "../pages/OurDoctors";
import AboutUs from "../pages/AboutUs";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";
import AddBanner from "../pages/dashboard/banner/AddBanner";
import ShowMyBanner from "../pages/dashboard/banner/ShowMyBanner";
import UpdateBanner from "../pages/dashboard/banner/UpdateBanner";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
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
                element: <Private><TestDetails /></Private>,
                loader: ({ params }) => fetch(`https://server-henna-phi.vercel.app/tests/${params.id}`)
            },
            {
                path: '/doctors',
                element: <OurDoctors />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/contact',
                element: <Contact />
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
                element: <Private><UpcomingAppointments /></Private>
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
                path: '/dashboard',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'profile',
                element: <Private><Profile /></Private>
            },
            {
                path: 'banners',
                element: <Private><AddBanner /></Private>
            },
            {
                path: 'updateBanner/:id',
                element: <Private><UpdateBanner/></Private>,
                loader: ({params})=> fetch(`https://server-henna-phi.vercel.app/banners/${params.id}`)
            },
            {
                path: 'showBanners',
                element: <Private><ShowMyBanner /></Private>
            },
            {
                path: 'updateProfile',
                element: <Private><UpdateProfile /></Private>
            },
            {
                path: 'testResult',
                element: <Private><TestResult /></Private>
            },
            {
                path: 'testReport',
                element: <AdminRoute><Repport /></AdminRoute>
            },
            {
                path: 'seeReport/:id',
                element: <Private><SeeReport /></Private>,
                loader: ({ params }) => fetch(`https://server-henna-phi.vercel.app/seeReport/${params.id}`)
            },
            {
                path: 'allTestTable',
                element: <AllTestTable />
            },
            {
                path: 'test/update/:id',
                element: <AdminRoute><UpdateTest /></AdminRoute>,
                loader: ({ params }) => fetch(`https://server-henna-phi.vercel.app/tests/${params.id}`)
            },
            {
                path: 'addTest',
                element: <AdminRoute><AddTest /></AdminRoute>
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'paymentHistory',
                element: <Private><PaymentHistory /></Private>
            }
        ]
    }
]);

export default router;