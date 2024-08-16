import { useContext } from "react";
import { IoBookmarks } from "react-icons/io5";
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";


const ProductCard = ({product}) => {

    const {user} = useContext(AuthContext)

    const { _id, Ratings, ProductName, ProductCreationDate, Price, Image, Description, Category, Brand }= product;

    const handleBookmark = async () =>{
        console.log({productId : _id, Ratings, ProductName, ProductCreationDate, Price, Image, Description, Category, Brand, email: user?.email});

        const bookMark = {productId : _id, Ratings, ProductName, ProductCreationDate, Price, Image, Description, Category, Brand, email: user?.email};

        const res = await axios.post('http://localhost:5000/bookmark', bookMark);
        console.log(res.data);
    }

    return (
        <div key={_id} className="flex overflow-hidden bg-white rounded-lg shadow-lg ">
            <div className="w-2/5 bg-cover">
                <img className='w-full h-full' src="https://img.freepik.com/premium-photo/white-iphone-with-back-turned-camera_1149286-223.jpg?w=740" alt="" />
            </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 ">{ProductName}</h1>

                <p className="mt-2 text-sm text-gray-600 ">{Description}</p>

                <div className="flex mt-2 item-center">
                    <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                </div>
                <h3 className='text-base font-semibold text-gray-700 mt-1'>Brand : <span className='text-lg font-bold'>{Brand}</span></h3>
                <h3 className='text-base font-semibold text-gray-700 mt-1'>Category : <span className='text-lg font-bold'>{Category}</span></h3>
                <h3 className='text-base font-semibold text-gray-700 mt-1'>Launched : <span className='text-lg font-bold'>{ProductCreationDate}</span></h3>

                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700  md:text-xl">${Price}</h1>
                    <button onClick={handleBookmark}><IoBookmarks /></button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;