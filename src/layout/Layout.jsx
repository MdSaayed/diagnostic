import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../components/header/Header";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login');
    return (
        <div>
            {isLogin || <Header />}
            <Outlet />
            {isLogin || <Footer />}
            <ToastContainer />
        </div>
    );
};

export default Layout;