import React from 'react'
import './cart-icon.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'


const CartIcon = () => {
    const dispatch = useDispatch()
    const itemCount = useSelector(state => selectCartItemsCount(state))



    return (<div className="cart-icon" onClick={() => dispatch(toggleCartHidden())} >
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">{itemCount}</span>
    </div>)
}



export default CartIcon;