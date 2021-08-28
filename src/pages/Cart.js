import React,{useContext,useEffect, useState} from 'react';
import {CartContext} from '../CartContext';
import {Link} from 'react-router-dom';
import emptyCart from '../images/empty-cart.png'

function Cart() {

    let total = 0
    const [products,setProducts] = useState([]);
    const { cart, setCart } = useContext(CartContext);
    const [priceFetched, togglePriceFetched] = useState(false);
    useEffect(() => {
       const _cart = {...cart} //
       if(!_cart.items){  //
           return
       }
       if(priceFetched){
           return
       }
       fetch('https://ecom-rest-apis.herokuapp.com/api/products/cart-items',{  //
           method: 'POST',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify({ ids : Object.keys(cart.items)})
       }).then(res=>res.json()
       .then(products=>{
            setProducts(products);
            togglePriceFetched(true);
       }))
       .catch(err=>{
           console.log(err);
           fetch('https://star-spark-pasta.glitch.me/api/products/cart-items',{  // Backup API
           method: 'POST',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify({ ids : Object.keys(cart.items)})
       }).then(res=>res.json()
         .then(products=>{
             setProducts(products);
             togglePriceFetched(true);
       }))
       })

    }, [cart,priceFetched])

    const getQty = (productId) => {
        return cart.items[productId]
    }

    const increament = (productId) => {
        const existingQty = cart.items[productId];
        const _cart = {...cart}
        _cart.items[productId] = existingQty + 1;
        _cart.totalItems += 1;
        setCart(_cart); 
    }
    const decreament = (productId) => {
        const existingQty = cart.items[productId];
        if(existingQty === 1){
            return;
        }
        const _cart = {...cart}
        _cart.items[productId] = existingQty - 1;
        _cart.totalItems -= 1;
        setCart(_cart); 
    }
    const getSum = (productId, price) => {
        const sum = price * getQty(productId)
        total += sum;
        return sum;
    }
    const handleDelete = (productId) =>{
        const _cart = {...cart};
        const qty = _cart.items[productId]
        delete _cart.items[productId]
        _cart.totalItems -= qty
        setCart(_cart);
        const updateProductList = products.filter((product)=>product._id !== productId)
        setProducts(updateProductList);
    }
    const handleOrderNow = () =>{
        window.alert("Order placed successfully!")
        setProducts([])
        setCart({})
    }
    return (
        products.length
        ? 
        <div className="container mx-auto lg:w-1/2 w-full pb-24 p-4">
            <h1 className="my-12 font-bold">Cart items</h1>
            <ul>
                {
                    products.map(product => {
                        return (
                            <li style={{background: '#ececec', padding: '10px', borderRadius: '10px'}} className="mb-6" key={product._id}>
                            <div className="flex items-center justify-between">
                                <Link to={`/products/${product._id}`}>
                                    <div className="flex items-center">
                                        <img className="h-16" src={product.image} alt="" />
                                        <span className="font-bold ml-4 w-20 md:w-48">{ product.name }</span>
                                    </div>
                                </Link>
                                <div>
                                   <button onClick={() => { decreament(product._id) }} className="bg-yellow-500 hover:bg-yellow-400 transition duration-300 px-3 py-1 rounded-full leading-none"><i className="text-xs fas fa-minus"></i></button>
                                   <b className="px-4">{ getQty(product._id) }</b>
                                   <button onClick={() => { increament(product._id) }} className="bg-yellow-500 hover:bg-yellow-400 transition duration-300 px-3 py-1 rounded-full leading-none"><i className="text-xs fas fa-plus"></i></button>
                                </div>
                                <span>₹ { getSum(product._id, product.price) }</span>
                                <button onClick={() => { handleDelete(product._id) }} className="bg-red-500 hover:bg-red-600 transition duration-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
            <hr className="my-6"/>
            <div className="text-right">
                <b>Grand Total:</b> ₹ { total }
            </div>
            <div className="text-right mt-6">
                <button onClick={ handleOrderNow }  className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Order Now</button>
            </div>
        </div>
        :
        <img className="mx-auto w-1/2 mt-6 mb-6" src={emptyCart} alt="empty-cart" />
    )
}
export default Cart
