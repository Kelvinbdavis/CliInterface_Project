import React from 'react';

import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'

import './checkout.styles.scss';

const CheckoutPage = () => {
    const cartItems = useSelector(state => selectCartItems(state))
    const cartTotal = useSelector(state => selectCartTotal(state))
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-blocks">
                    <span>Product</span>
                </div>
                <div className="header-blocks">
                    <span>Description</span>
                </div>
                <div className="header-blocks">
                    <span>Quanity</span>
                </div>
                <div className="header-blocks">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => cartItem.name)}
            <div className="total">
                <span>TOTAL: ${cartTotal}</span>
            </div>
        </div>
    )
}

export default CheckoutPage;