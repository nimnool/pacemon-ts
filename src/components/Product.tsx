import React, {useState} from 'react';
import {IProducts} from "../models";

interface ProductProps {
    product: IProducts
}

const Product = ({product}: ProductProps) => {
    const[details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
    const btnClasses = ['px-4 py-2 transition-all duration-300 hover:bg-blue-400', btnBgClassName]

    return (
        <div className="border py-2 px-4 grid grid-cols-3 gap-2 rounded mb-2">
            <div className="col-span-1">
                <img className="w-1/1" src={product.image} alt={product.title}/>
            </div>
            <div className="col-span-2 flex flex-col justify-between">
                <div>
                    <h3>{product.title}</h3>
                    <div>
                        <span className="block w-full">{product.category}</span>
                        <span>{product.rating.rate}</span>
                        <span>{product.rating.count}</span>
                    </div>
                    {details && <div>
                        <p>{product.description}</p>
                    </div>}
                    <p>{product.price}$</p>
                </div>
                <button
                    className={btnClasses.join(' ')}
                    onClick={() => setDetails(prev => !prev)}
                >
                    { details ? 'Hide description' : 'Show description' }
                </button>
            </div>
        </div>
    );
};

export default Product;
