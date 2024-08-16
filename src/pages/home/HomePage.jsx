import Lottie from "lottie-react";
import Mobile from "../../assets/mobile.json";
import Laptop from "../../assets/Laptop.json";

const HomePage = () => {
    return (
        <div className="">
            <div className=" h-[40vh] relative">
                <div className="max-w-md text-center space-y-2 absolute left-1/3 top-1/2">
                    <h1 className="text-5xl font-bold">Welcome To <br />
                        <span className="text-5xl font-bold bg-300% bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient">TechBar</span>
                    </h1>
                    <p className="font-medium text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis assumenda est vitae atque impedit voluptatum dolorem ipsam ipsum neque.</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <Lottie className="w-1/3" animationData={Mobile} />
                <Lottie className="w-1/3" animationData={Laptop} />
            </div>
        </div>
    );
};

export default HomePage;