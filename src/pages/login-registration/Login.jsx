import { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from "../../shared/SocialLogin";

const Login = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { loginUser, googleLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const page = location?.state || '/';


    const handelLogin = e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(page);

                toast.success('Login Successful')
            })
            .catch(err => {
                console.log(err);

                toast.error('auth/invalid-credential');
            })
    }




    return (
        <div className="md:min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm border-2 border-gray-600 overflow-hidden bg-white rounded-lg shadow-md mt-8">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">Welcome Back</h3>

                    <p className="mt-1 text-center text-gray-500 ">Please SignIn</p>

                    <form onSubmit={handelLogin}>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border rounded-lg  border-gray-600 placeholder-gray-400 focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" name="email" aria-label="Email Address" />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border rounded-lg  border-gray-600 placeholder-gray-400 focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" name="password" aria-label="Password" />
                        </div>

                        <div className=" mt-4">
                            {/* <button onClick={handelGoogle} className="flex items-center gap-2 border px-2 py-1 rounded-lg border-blue-500 text-sm font-medium text-blue-500">Sign In with<FcGoogle className="text-2xl" /></button> */}


                            <button type="submit" className="w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
                    <div className="flex justify-center">
                        <SocialLogin page={page} />
                    </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
                    <span className="text-sm text-gray-600 ">Do not have an account? </span>

                    <Link to='/register' className="mx-2 text-sm font-bold text-blue-500  hover:underline">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;