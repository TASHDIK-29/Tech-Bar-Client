import { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import auth from "../../auth/firebase.config";

const Register = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { createUser, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handelRegister = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const photo = form.photo.value;

        console.log(name, email, password);

        if (!/^(?=.*[A-Z]).*$/.test(password)) {
            toast.error('Password must contain at least one Uppercase Character');
            return;
        }

        if (!/^(?=.*[a-z]).*$/.test(password)) {
            toast.error('Password must contain at least one Lowercase Character');
            return;
        }

        if (!/^.{6,}$/.test(password)) {
            toast.error('Password must contain at least six Character');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                logOutUser();
                navigate('/login');
                toast.success('Registration Successful');

                updateProfile(auth.currentUser, {
                    displayName: name, 
                    // photoURL: photo
                })



            })
            .catch(err => {
                console.log(err);
                if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('This email already been used');
                }
            })
    }


    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm border border-gray-600 overflow-hidden bg-white rounded-lg shadow-md ">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> */}
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">Welcome Back</h3>

                    <p className="mt-1 text-center text-gray-500 ">Create Account</p>

                    <form onSubmit={handelRegister}>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  border-gray-600  focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Your name" name="name" aria-label="Email Address" />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border rounded-lg  border-gray-600 placeholder-gray-400 focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" name="email" aria-label="Email Address" />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border rounded-lg  border-gray-600 placeholder-gray-400 focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" name="password" aria-label="Password" />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-sm text-gray-600  hover:text-gray-500">Forget Password?</a>

                            <button type="submit" className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
                    <span className="text-sm text-gray-600 ">Already have an account? </span>

                    <Link to="/login" className="mx-2 text-sm font-bold text-blue-500  hover:underline">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;