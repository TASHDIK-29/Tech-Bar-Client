import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-2 md:px-6 mb-20 min-h-[50vh]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;