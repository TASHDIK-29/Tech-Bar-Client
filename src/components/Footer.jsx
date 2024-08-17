import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
                    <div className="col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-300 xl:text-2xl ">Subscribe our newsletter to get update.</h1>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md   border-gray-600 focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider  transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-200 text-black rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 hover:text-gray-200">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-white ">Links</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <NavLink to = '/' className="text-white transition-colors duration-300  hover:text-white hover:underline ">Home</NavLink>
                            <NavLink to = '/products' className="text-white transition-colors duration-300  hover:text-white hover:underline ">Products</NavLink>
                            <NavLink to = '/bookmarks' className="text-white transition-colors duration-300  hover:text-white hover:underline ">Bookmarks</NavLink>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-white ">Brands</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-white transition-colors duration-300  hover:text-white hover:underline ">Apple</a>
                            <a href="#" className="text-white transition-colors duration-300  hover:text-white hover:underline ">Samsung</a>
                            <a href="#" className="text-white transition-colors duration-300  hover:text-white hover:underline ">Google</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-white ">Categories</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-white transition-colors duration-300  hover:text-white hover:underline ">Laptop</a>
                            <a href="#" className="text-white transition-colors duration-300  hover:text-white hover:underline ">Mobile</a>
                            <a href="#" className="text-white transition-colors duration-300  hover:text-white hover:underline ">Tab</a>
                            <a href="#" className="text-white transition-colors duration-300  hover:text-white hover:underline ">Computer</a>
                        </div>
                    </div>
                </div>

                <hr className="my-6  md:my-8 border-gray-700" />

                <div className="flex items-center justify-between">
                    <h1>
                        <span className="text-4xl font-bold bg-300% bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient">TechBar</span>
                    </h1>

                    <div className="flex items-center gap-6">
                        <FaFacebook className="text-2xl font-bold " />
                        <FaInstagram className="text-2xl font-bold " />
                        <FaYoutube className="text-2xl font-bold " />
                        <FaTwitter className="text-2xl font-bold " />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;