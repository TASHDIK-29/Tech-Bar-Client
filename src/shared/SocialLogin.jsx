import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../auth/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SocialLogin = ({page}) => {

    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelGoogle = () => {
        googleLogin()
            .then(result => {
                navigate(page);
                toast.success('Login Successful')
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <button onClick={handelGoogle} className="flex items-center gap-2 border px-2 py-1 rounded-lg border-blue-500 text-sm font-medium text-blue-500">Sign In with<FcGoogle className="text-2xl" /></button>
    );
};

export default SocialLogin;