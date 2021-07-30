import React,{useState,useEffect} from 'react'
import Product from './Product';

const Products = () => {

    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://star-spark-pasta.glitch.me/api/products/') //
        .then(response=>response.json())
        .then(products=>{
            setProducts(products);
        })
    },[])
    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg pl-3 font-bold my-8">Products</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 my-8 px-2.5 gap-6 md:gap-12 ">
           {
               products.map(product=> <Product key={product._id} product={product}/>)
           }
            </div>
        </div>
    )
}

export default Products
