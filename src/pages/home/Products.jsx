import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState(null);
    const [brand, setBrand] = useState(null);
    const [category, setCategory] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [sort, setSort] = useState('');


    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0);

    const [isLoading, setIsLoading] = useState(false);




    const fetchProducts = async () => {
        const response = await axios.get('https://scic-tech-bar-server.vercel.app/products', {
            params: {
                search,
                brand,
                category,
                minPrice,
                maxPrice,
                currentPage,
                sort
            }
        });
        setProducts(response.data.product);
        setCount(response.data.count);

        setIsLoading(false)
    };

    useEffect(() => {

        setIsLoading(true)

        fetchProducts();
        window.scroll(0, 0);

    }, [search, brand, category, minPrice, maxPrice, currentPage, sort]);

    console.log({ products, count });


    const numberOfPages = Math.ceil(count / 4);
    const pages = [...Array(numberOfPages).keys()];

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        } else {
            console.log('No more data');
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        } else {
            console.log('No more data');
        }
    }

    return (
        <div className={`relative ${products.length < 3 && 'h-[80vh]'} pb-10`}>
            <div className='grid grid-cols-2 md:grid-cols-7 gap-2 mt-8'>
                <div className='col-span-2'>
                    <h4 className='font-semibold'>Search By Name</h4>
                    <input
                        type="text"
                        placeholder="Search products"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='border-2 bg-slate-300 p-2 w-full shadow-md'
                    />
                </div>

                <div>
                    <h4 className='font-semibold'>Filter by Brand</h4>
                    <select className='border-2 w-full p-2 bg-slate-300 shadow-md' value={brand} onChange={(e) => { setBrand(e.target.value); setCurrentPage(0); }}>
                        <option value="">Select Brand</option>
                        <option value="Apple">Apple</option>
                        <option value="Google">Google</option>
                        <option value="Samsung">Samsung</option>
                        <option value="All">All</option>
                        {/* Add more brands as needed */}
                    </select>
                </div>

                <div>
                    <h4 className='font-semibold'>Filter by Category</h4>
                    <select className='border-2 p-2 bg-slate-300 w-full shadow-md' value={category} onChange={(e) => { setCategory(e.target.value); setCurrentPage(0); }}>
                        <option value="">Select Category</option>
                        <option value="Computer">Computer</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Tab">Tab</option>
                        <option value="Mobile">Mobile</option>
                        <option value="All">All</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>

                <div>
                    <h4 className='font-semibold'>Min Price</h4>
                    <input
                        className='border-2 w-full p-2 bg-slate-300 shadow-md'
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => { setMinPrice(e.target.value); setCurrentPage(0); }}
                    />
                </div>
                <div>
                    <h4 className='font-semibold'>Max Price</h4>
                    <input
                        className='border-2 w-full p-2 bg-slate-300 shadow-md'
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => { setMaxPrice(e.target.value); setCurrentPage(0); }}
                    />
                </div>

                <div>
                    <h4 className='font-semibold'>Sort By</h4>
                    <select className='border-2 w-full p-2 bg-slate-300 shadow-md' value={sort} onChange={(e) => {
                        setSort(e.target.value);
                        setCurrentPage(0);
                    }}>
                        <option value="">Select Sort Order</option>
                        <option value="low-to-high">Low to High</option>
                        <option value="high-to-low">High to Low</option>
                        <option value="newest-first">Newest</option>
                    </select>
                </div>


            </div>
            <div className='mt-12'>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
                    {isLoading ?
                        <section className="bg-white col-span-2">
                            <div className="container px-6 py-10 mx-auto animate-pulse">
                                <h1 className="w-48 h-2 mx-auto rounded-lg bg-gray-700"></h1>

                                <p className="w-64 h-2 mx-auto mt-4 rounded-lg bg-gray-700"></p>
                                <p className="w-64 h-2 mx-auto mt-4 rounded-lg sm:w-80 bg-gray-700"></p>

                                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="w-full ">
                                        <div className="w-full h-64 rounded-lg md:h-72 bg-gray-600"></div>

                                        <h1 className="w-56 h-2 mt-4 rounded-lg bg-gray-700"></h1>
                                        <p className="w-24 h-2 mt-4 rounded-lg bg-gray-700"></p>
                                    </div>

                                    <div className="w-full ">
                                        <div className="w-full h-64 rounded-lg md:h-72 bg-gray-600"></div>

                                        <h1 className="w-56 h-2 mt-4 rounded-lg bg-gray-700"></h1>
                                        <p className="w-24 h-2 mt-4 rounded-lg bg-gray-700"></p>
                                    </div>

                                    <div className="w-full ">
                                        <div className="w-full h-64 rounded-lg md:h-72 bg-gray-600"></div>

                                        <h1 className="w-56 h-2 mt-4 rounded-lg bg-gray-700"></h1>
                                        <p className="w-24 h-2 mt-4 rounded-lg bg-gray-700"></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        : products?.map((product, idx) => (
                            // <div key={_id} className="flex overflow-hidden bg-white rounded-lg shadow-lg ">
                            //     <div className="w-2/5 bg-cover">
                            //         <img className='w-full h-full' src="https://img.freepik.com/premium-photo/white-iphone-with-back-turned-camera_1149286-223.jpg?w=740" alt="" />
                            //     </div>

                            //     <div className="w-2/3 p-4 md:p-4">
                            //         <h1 className="text-xl font-bold text-gray-800 ">{ProductName}</h1>

                            //         <p className="mt-2 text-sm text-gray-600 ">{Description}</p>

                            //         <div className="flex mt-2 item-center">
                            //             <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                            //                 <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            //             </svg>

                            //             <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                            //                 <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            //             </svg>

                            //             <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                            //                 <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            //             </svg>

                            //             <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                            //                 <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            //             </svg>

                            //             <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                            //                 <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            //             </svg>
                            //         </div>
                            //         <h3 className='text-base font-semibold text-gray-700 mt-1'>Brand : <span className='text-lg font-bold'>{Brand}</span></h3>
                            //         <h3 className='text-base font-semibold text-gray-700 mt-1'>Category : <span className='text-lg font-bold'>{Category}</span></h3>
                            //         <h3 className='text-base font-semibold text-gray-700 mt-1'>Launched : <span className='text-lg font-bold'>{ProductCreationDate}</span></h3>

                            //         <div className="flex justify-between mt-3 item-center">
                            //             <h1 className="text-lg font-bold text-gray-700  md:text-xl">${Price}</h1>
                            //             {/* <button className="px-2 py-1 text-xs font-bold  uppercase transition-colors duration-300 transform  rounded bg-gray-700 hover:bg-gray-700  focus:outline-none focus:bg-gray-700">Add to Cart</button> */}
                            //         </div>
                            //     </div>
                            // </div>
                            <ProductCard key={idx} product={product} />
                        ))}
                </div>
            </div>
            <div className="absolute -bottom-16 w-full space-y-1">
                <div className='space-x-2 w-full flex justify-center items-center'>
                    {
                        pages.map(i => <button className={currentPage === i ? 'bg-slate-500 text-white font-semibold  px-1 md:px-3 py-1 rounded-full  ' : 'px-1 md:px-3 py-1 rounded-full border text-slate-400 font-medium border-slate-400'} onClick={() => setCurrentPage(i)} key={i}>{i}</button>)
                    }
                </div>
                <div className='flex justify-center gap-2'>
                    <button onClick={handlePrev} className='border-2 border-slate-400 p-1 rounded-l-lg text-slate-600 font-semibold flex items-center gap-2'><FaLessThan /> Prev</button>

                    <button onClick={handleNext} className='border-2 border-slate-400 p-1 rounded-r-lg text-slate-600 font-semibold flex items-center gap-2'>Next <FaGreaterThan /></button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
