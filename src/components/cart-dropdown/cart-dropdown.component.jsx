import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { withRouter } from 'react-router-dom'

import './cart-dropdown.styles.scss'

const CartDropDown = ({ history }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => selectCartItems(state))
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ?
                    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className="empty-message">Your scart is empty</span>
                }
            </div>
            <CustomButton onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden()) }}>Go TO CHECKOUT</CustomButton>
        </div>
    )
}

export default withRouter(CartDropDown);