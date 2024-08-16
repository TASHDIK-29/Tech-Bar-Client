import Lottie from "lottie-react";
import Mobile from "../../assets/mobile.json";
import Laptop from "../../assets/Laptop.json";

const HomePage = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <Lottie className="w-1/3" animationData={Mobile} />
                <Lottie className="w-1/3" animationData={Laptop} />
            </div>
        </div>
    );
};

export default HomePage;