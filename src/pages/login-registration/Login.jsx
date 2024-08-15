
const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm border border-gray-600 overflow-hidden bg-white rounded-lg shadow-md ">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">Welcome Back</h3>

                    <p className="mt-1 text-center text-gray-500 ">Please SignIn</p>

                    <form>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border rounded-lg  border-gray-600 placeholder-gray-400 focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border rounded-lg  border-gray-600 placeholder-gray-400 focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-sm text-gray-600  hover:text-gray-500">Forget Password?</a>

                            <button type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
                    <span className="text-sm text-gray-600 ">Do not have an account? </span>

                    <a href="#" className="mx-2 text-sm font-bold text-blue-500  hover:underline">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;