import React, {useState,useEffect,useContext} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { CartContext } from '../CartContext';


const SingleProduct = () => {

    const [isAdding, setIsAdding] = useState(false);
    const {cart, setCart} = useContext(CartContext);
   

    const addToCart = (e, product) =>{
        e.preventDefault(); 
        let _cart = {...cart};    //{items:{}}  //clone cart , in javaScript obj is passed by ref
        if(!_cart.items){
            _cart.items={}
        }
        if(_cart.items[product._id]){
            _cart.items[product._id] += 1;
        }
        else{
            _cart.items[product._id] = 1;
        }
        if(!_cart.totalItems){
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(()=>{
            setIsAdding(false);
        },1000);
    }

    const [product,setProduct] = useState({})
    const param = useParams();
    
    
    useEffect(() => {
        fetch(`https://star-spark-pasta.glitch.me/api/products/${param._id}`)
        .then(res=>res.json())
        .then(product=>{
            console.log(product);
            setProduct(product);
        })
    },[param._id])

    const history = useHistory();

    return (
        <div className="container mx-auto mt-12 px-6">
            <button className="mb-12 font-bold" onClick={()=>{ history.goBack()} } >Back</button>
            <div className="flex">
                <img src={product.image} alt="" />
                <div className="ml-6 md:ml-16">
                    <h1 className="text-xl font-bold">
                        {product.name}
                    </h1>
                    <div className="text-md">{product.size}</div>
                    <div className="font-bold mt-2">₹ {product.price}</div>
                    <button disabled={isAdding} onClick={(e)=>{addToCart(e,product)}} className={`${ isAdding ?'bg-green-500':'bg-yellow-500 hover:bg-yellow-400'} transition duration-300 py-1 px-3 rounded-full font-bold`} >{`${isAdding?'ADDED':'Add to cart'}`}</button>
                </div>
            </div>
           
        </div>
    )
}

export default SingleProduct
