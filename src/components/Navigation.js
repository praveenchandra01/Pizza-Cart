import { Link } from 'react-router-dom';
import {useState, useEffect, useContext} from 'react'
import { CartContext } from '../CartContext';
import cartImg from '../images/cart.png'
import logo from '../images/logo.png'
import "./Nav.css";

function Navigation() {
    const cardstyle={
        background :'#F59E0D',
        display : 'flex',
        borderRadius : 50,
        padding : "5px 10px",
        marginRight: 10
        }

        const [show, setShow] = useState(false);
        useEffect(() => {
          window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
              setShow(true);
            } else {
              setShow(false);
            }
          });
        }, []);

    const {cart}  = useContext(CartContext);
    const _cart = {...cart} //

    return (
        <>
         <nav className= {`nav ${show && "nav_background"} w-full flex items-center justify-between md:p-4`}>
                <Link to='/'>
                <img style={{height:45, paddingLeft:10}} src={logo} alt="logo" />
                </Link>

                <ul className="flex items-center">
                   <li className="listItems highlight"> <Link to="/">Home</Link> </li>
                   <li className="ml-6 listItems highlight"> <Link to="/products">Products</Link> </li>
                   <li className="ml-6 ">  
                         <Link to="/cart">
                            <div style={cardstyle}>
                                <span>{_cart.totalItems ? _cart.totalItems : ''}</span>
                                <img className="ml-2" src={cartImg} alt="cart-icon" />
                           </div>
                         </Link> 
                    </li>
                </ul>
         </nav>
        </>
    )
}

export default Navigation