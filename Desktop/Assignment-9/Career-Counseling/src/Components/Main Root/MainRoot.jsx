import { Outlet } from "react-router-dom";
import Header from "../Header Component/Header";
import Footer from "../Footer Component/Footer";

const MainRoot = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainRoot;