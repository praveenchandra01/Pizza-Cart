import React,{useState,useEffect} from 'react'
import Product from './Product';
import Loader from './Loader'

const Products = () => {

    const [products,setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(true)
    useEffect(()=>{
        fetch('https://ecom-rest-apis.herokuapp.com/api/products/') //
        .then(response=>response.json())
        .then(products=>{
            setProducts(products);
            setIsloading(false)
        })
        .catch(err=>{
            console.log(err)
            fetch('https://star-spark-pasta.glitch.me/api/products') // Backup API
            .then(response=>response.json())
            .then(products=>{
                setProducts(products);
             setIsloading(false)
             })
        })
    },[])
    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg pl-3 font-bold my-8">Products</h1>
            <div className={`${isLoading ? 'flex justify-center items-center' : 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 my-8 px-2.5 gap-6 md:gap-12'} `} >
           {
              isLoading ? <Loader /> : products.map(product=> <Product key={product._id} product={product}/>)
           }
            </div>
        </div>
    )
}

export default Products
