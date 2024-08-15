import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;