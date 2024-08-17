import Lottie from "lottie-react";
import Mobile from "../../assets/mobile.json";
import Laptop from "../../assets/Laptop.json";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/AuthProvider";

const HomePage = () => {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    
    return (
        <div className="">
            <div className=" md:h-[40vh] relative">
                <div className="max-w-md text-center space-y-2 md:absolute md:left-1/3 md:top-1/3 mt-4 md:mt-0">
                    {user && <h1 className="text-xl md:text-2xl font-semibold">Hey, <span className="text-2xl md:text-4xl font-bold bg-300% bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient">{user?.displayName}</span></h1>}
                    <h1 className="text-xl md:text-3xl font-semibold">Welcome To <br />
                        <span className="text-3xl md:text-5xl font-bold bg-300% bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient">TechBar</span>
                    </h1>
                    <h3 className="text-lg font-semibold text-slate-500">Choose Your Best Gadget</h3>
                    <p className="font-medium text-slate-400">Welcome to GadgetHub! Explore the latest tech gadgets with powerful search and filter tools to find your perfect match.</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <Lottie className="w-1/2 md:w-1/3" animationData={Mobile} />
                <Lottie className="w-1/2 md:w-1/3" animationData={Laptop} />
            </div>
        </div>
    );
};

export default HomePage;