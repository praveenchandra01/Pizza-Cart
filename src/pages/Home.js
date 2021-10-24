import React from 'react'
import Products from '../components/Products'
import homePizza from '../images/pizza.png'

const Home = () => {
    const btn = {
        transition: 'all .3s'
    }
    function scrollBottom(){
        window.scroll({
            top: 650,
            left: 0, 
            behavior: 'smooth',
          });
    }

    return (
        <>
        <div className="hero pb-10">
            <div className="container mx-auto flex items-center justify-between">
                <div className="p-6 md:pl-12 w-1/2">
                <h6 className="text-lg md:text-3xl"><em>Are you hungry?</em></h6>
                <h1 className="text-3xl md:text-7xl font-bold">Don't wait !</h1>
                <button style={btn} onClick={scrollBottom} className="px-3 py-1 sm:px-6 sm:py-2 text-sm sm:text-lg rounded-full text-white font-bold mt-2 sm:mt-4 bg-yellow-500 hover:bg-yellow-400">Order Now</button>
                </div>
                <div className="w-1/2">
                    <img className="w-5/6 m-auto py-10" src={homePizza} alt="Pizza" />
                </div>
            </div>
        </div>
        <div className="pb-12">
            <Products />
        </div>
        </>
    )
}

export default Home
