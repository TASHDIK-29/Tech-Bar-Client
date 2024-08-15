import { useState, useEffect } from 'react';
import axios from 'axios';
import { allProduct } from '../../lib/products';

const ProductList = () => {
    const [products, setProducts] = useState(allProduct());
    const [search, setSearch] = useState(null);
    const [brand, setBrand] = useState(null);
    const [category, setCategory] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);




    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:5000/products', {
            params: {
                search,
                brand,
                category,
                minPrice,
                maxPrice
            }
        });
        setProducts(response.data);
    };

    useEffect(() => {

        fetchProducts();

    }, [search, brand, category, minPrice, maxPrice]);

    console.log(products);

    return (
        <div>
            <div className='flex justify-between'>
                <input
                    type="text"
                    placeholder="Search products"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='border-2 rounded-lg p-2'
                />

                <div>
                    <h4>Filter by Brand</h4>
                    <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                        <option value="">Select Brand</option>
                        <option value="Apple">Apple</option>
                        <option value="Google">Google</option>
                        <option value="Samsung">Samsung</option>
                        {/* Add more brands as needed */}
                    </select>
                </div>

                <div>
                    <h4>Filter by Category</h4>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        <option value="Computer">Computer</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Tab">Tab</option>
                        <option value="Mobile">Mobile</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>

                <div>
                    <h4>Filter by Price</h4>
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>


            </div>
            <div>
                {/* <h4>Products : {products.length}</h4> */}
                {/* <ul>
                    {products?.map((product) => (
                        <li key={product._id}>{product?.name}</li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
};

export default ProductList;
