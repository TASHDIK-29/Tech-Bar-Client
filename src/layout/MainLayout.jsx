import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mb-20 min-h-[50vh]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;