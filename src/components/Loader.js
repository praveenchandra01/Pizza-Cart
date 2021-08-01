import React from 'react'
import './Loader.css'

const Loader = () => {
    return (

        <div className="flex flex-col justify-center items-center">
            <h1>Fetching Products</h1>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader
