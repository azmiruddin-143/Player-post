import { Outlet } from "react-router-dom";
import Header from "../Header Component/Header";
import Footer from "../Footer Component/Footer";
import { ToastContainer } from "react-toastify";

const MainRoot = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainRoot;