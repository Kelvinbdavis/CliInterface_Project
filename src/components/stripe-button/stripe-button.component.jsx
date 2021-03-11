import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ITXYkGcOWvtGQOXmisZA7R7Pc6uEUmxGskPxO8loaaQ27LS8rxha5cvGEHkK7PNopqzfgv5S4Rq8qxrH6dgteLb00CY35vOMG'
    const onToken = (token) => {
        console.log(token)
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name='Kush Konnection'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripCheckoutButton