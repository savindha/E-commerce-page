import React from "react";
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JuH0OD2tkyBg5zhR1QILLhdUWRvhUmQlE0s0whfoXKEtaZ4bft1s72ciENBcZLpgE5vFltlke8hjLJ55q0qlQke00P5tRFGYF'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log("Payment Error ", JSON.parse(error))
            alert('Payment Error. Please try again!')
        })
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
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}

export default StripCheckoutButton;

