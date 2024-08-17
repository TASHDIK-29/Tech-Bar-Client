import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import ProductCard from "../../components/ProductCard";

const Bookmark = () => {

    const { user } = useContext(AuthContext)

    const [bookmarks, setBookmarks] = useState([])

    const fetchBookmarks = async () => {
        const res = await axios.get('https://scic-tech-bar-server.vercel.app/bookmark', {
            params: {
                email: user?.email
            }
        })

        setBookmarks(res.data);
    }

    useEffect(() => {
        window.scroll(0, 0);

        fetchBookmarks()
    }, [])

    console.log(bookmarks);


    return (
        <div>
            <div className="">
                <h1 className="text-center p-4 my-8">
                    <span className="text-4xl font-bold text-center border-y-2 border-slate-300 p-3 my-8 bg-300% bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient"> Bookmarks</span>
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-6 py-4 mt-12'>
                {bookmarks?.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Bookmark;