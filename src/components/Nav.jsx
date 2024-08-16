import { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user, logOutUser } = useContext(AuthContext);

    const handelLogout = () => {

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
                    <a href="#">
                        <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
                    </a>

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
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <NavLink to='/' className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" href="#">Home</NavLink>
                        <NavLink to='/products' className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0" href="#">Products</NavLink>
                        
                    </div>

                    <div className="flex justify-center md:block">
                        {
                            user ? <button onClick={handelLogout}>Logout</button> : <Link to='/login'><button>Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
