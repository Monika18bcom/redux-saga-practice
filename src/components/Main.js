import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, emptyCart, removeFromCart, userDataAction} from "../redux/action";

function Main(props) {
    const dispatch = useDispatch()
    const productD = useSelector((state) => state.productData)

    useEffect(() => {
        // dispatch(getProductList())
        dispatch(userDataAction())

    }, []);

    return (
        <div>
            <button onClick={() => dispatch(emptyCart())}>EMPTY CART</button>

            <div className='product-container'>
                {
                    productD?.map((item) => (<div className='product-item' key={item.id}>
                        <img src={item.thumbnail} alt=""/>
                        <div>Name : {item.title} </div>
                        <div>Price : {item.price} </div>
                        <div>Category : {item.category} </div>
                        <div>Brand : {item.brand} </div>
                        <div>
                            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove From Cart</button>

                        </div>
                    </div>))
                }
            </div>
        </div>
    );
}


export default Main;
