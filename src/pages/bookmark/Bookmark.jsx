import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import ProductCard from "../../components/ProductCard";

const Bookmark = () => {

    const { user } = useContext(AuthContext)

    const [bookmarks, setBookmarks] = useState([])

    const fetchBookmarks = async () => {
        const res = await axios.get('http://localhost:5000/bookmark', {
            params: {
                email: user?.email
            }
        })

        setBookmarks(res.data);
    }

    useEffect(() => {
        fetchBookmarks()
    }, [])

    console.log(bookmarks);


    return (
        <div className='grid grid-cols-1 md:grid-cols-2  gap-6 py-4'>
            {bookmarks?.map((product, idx) => (
                <ProductCard key={idx} product={product} />
            ))}
        </div>
    );
};

export default Bookmark;