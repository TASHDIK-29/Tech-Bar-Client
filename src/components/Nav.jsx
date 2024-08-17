import { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user, logOutUser } = useContext(AuthContext);

    const handelLogout = () => {

        setIsOpen(!isOpen)

        logOutUser()
            .then(() => {
                toast.success('Logged out');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <nav className="relative bg-white shadow ">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <h1>
                        <span className="text-3xl font-bold bg-300% bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient">TechBar</span>
                    </h1>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        }`}
                >
                    <div className="flex flex-col md:flex-row md:gap-6 md:mx-6">
                        <NavLink onClick={() => setIsOpen(!isOpen)} to='/' className={({ isActive }) => isActive ? 'text-lg font-bold my-3 bg-300% bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient' : 'text-lg dark:text-gray-600 font-semibold my-3'}>Home</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} to='/products' className={({ isActive }) => isActive ? 'text-lg font-bold my-3 bg-300% bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient' : 'text-lg dark:text-gray-600 font-semibold my-3'}>Products</NavLink>
                        <NavLink onClick={() => setIsOpen(!isOpen)} to='/bookmarks' className={({ isActive }) => isActive ? 'text-lg font-bold my-3 bg-300% bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient' : 'text-lg dark:text-gray-600 font-semibold my-3'}>Bookmarks</NavLink>

                    </div>

                    <div className="flex justify-center md:block">
                        {
                            user ? <button onClick={handelLogout} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Sign Out</span>
                            </button> :
                                <Link onClick={() => setIsOpen(!isOpen)} to='/login'>
                                    {/* <button>Login</button> */}
                                    <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Sign In</span>
                                    </button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
