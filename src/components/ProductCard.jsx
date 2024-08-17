import { useContext } from "react";
import { IoBookmarks } from "react-icons/io5";
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {

    const { user } = useContext(AuthContext)

    const { _id, Ratings, ProductName, ProductCreationDate, Price, Image, Description, Category, Brand } = product;

    const handleBookmark = async () => {
        console.log({ productId: _id, Ratings, ProductName, ProductCreationDate, Price, Image, Description, Category, Brand, email: user?.email });

        const bookMark = { productId: _id, Ratings, ProductName, ProductCreationDate, Price, Image, Description, Category, Brand, email: user?.email };

        const res = await axios.post('https://scic-tech-bar-server.vercel.app/bookmark', bookMark);
        console.log(res.data);

        if(res.data.insertedId){
            toast.success(`${ProductName} Bookmarked`)
        }else{
            toast.error(`${ProductName} Already Bookmarked`)
        }
    }

    return (
        <div key={_id} className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-lg ">
            <div className="w-full md:w-2/5 bg-cover">
                <img className='w-full h-full' src={Image} alt="" />
            </div>

            <div className="w-full md:w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 ">{ProductName}</h1>

                <p className="mt-2 text-sm text-gray-600 ">{Description}</p>

                <div className="flex gap-2 mt-2 item-center">
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={Ratings}
                        readOnly
                    />
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