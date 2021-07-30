import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css"
import Home from "./pages/Home"
import ProductsPage from "./pages/ProductsPage"
import Cart from "./pages/Cart"
import Navigation from "./components/Navigation"
import SingleProduct from "./pages/SingleProduct"
import {CartContext} from './CartContext'
import {useEffect, useState} from 'react';
import {getCart, storeCart} from './helpers';


const App = () => {
    const [cart, setCart] = useState({});
    //fetch cart from local storage
    useEffect(() => {
       const cart = getCart();
       setCart(JSON.parse(cart));
    }, [])
    
    useEffect(() => {
        storeCart(cart)
    }, [cart]);

    return(
        <div>
         <Router >
            <CartContext.Provider value={{cart, setCart}}>
            <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/products" exact component={ProductsPage}></Route>
                    <Route path="/products/:_id" component={SingleProduct}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </CartContext.Provider>
           
         </Router>
        </div>
    )
}
export default App;