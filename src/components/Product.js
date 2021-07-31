import {Link} from 'react-router-dom';
import { CartContext } from '../CartContext';
import React,{ useContext ,useState } from 'react'

const Product = (props) => {

    const [isAdding, setIsAdding] = useState(false);
    const {cart, setCart} = useContext(CartContext);
    const {product} = props;

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

        // let cart = {
        //     items: {
        //         '60c67b6af5ee510015f3dda3' : 2,
        //         '60c67b5af5ee510015f3dda2' : 1,
        //     },
        //     totalItems : 5
        // }
    }

    const mystyle = {
        border: "2px solid #dbdbdb",
        borderRadius: "5px",
        maxWidth: "250px",
        boxShadow: "0px 5px 10px 0px #e8e8e8"
    }
    return (
        <>
             <Link to={`/products/${product._id}`}>
             <div style={mystyle}>
                    <img src={product.image} alt={product.name} />
                    <div className="text-center">
                          <h2 className="text-lg font-bold py-2">{product.name}</h2>
                          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.size}</span>
                    </div>
                    <div className="p-2 flex justify-between items-center mt-4">
                        <span className="font-bold">₹{product.price}</span>
                        <button disabled={isAdding} onClick={(e)=>{addToCart(e,product)}} className={`${ isAdding ?'bg-green-500':'bg-yellow-500 hover:bg-yellow-400'}  transition duration-300 py-1 px-3 rounded-full font-bold`}>ADD{ isAdding?'ED':'' }</button>
                    </div>
            </div>
             </Link>
                
        </>
    )
}

export default Product
