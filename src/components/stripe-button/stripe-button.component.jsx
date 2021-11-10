import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_live_51JuH0OD2tkyBg5zh2Tmop1sO6Z44HJGFqKkB71RSkZx7cOJYFnzL8bsfOTap7ZHWwPo7q29abTxiMkgMmmdWRam70059WtQ780'

    const onToken = token => {
        console.log(token)
        alert('Payment Success')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Saviya Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token ={onToken}
            stripeKey ={publishableKey}

        />
    )
}

export default StripCheckoutButton;

