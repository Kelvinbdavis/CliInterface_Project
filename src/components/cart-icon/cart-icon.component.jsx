import React from 'react'
import './cart-icon.styles.scss'
import { useDispatch } from 'react-redux'

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'


const CartIcon = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(toggleCartHidden())
    }

    return (<div className="cart-icon" onClick={handleClick} >
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">0</span>
    </div>)
}



export default CartIcon;