import React from 'react'
import { useSelector } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selector'

import './cart-dropdown.styles.scss'

const CartDropDown = () => {
    const cartItems = useSelector(state => selectCartItems(state))
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}
            </div>
            <CustomButton>Go TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropDown;