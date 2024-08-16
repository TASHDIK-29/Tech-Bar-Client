import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;