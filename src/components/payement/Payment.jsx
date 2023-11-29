// Payment.js
import React from 'react';
import CheckoutForm from './CheckoutForm';
import StripeProviderWrapper from './StripeProviderWrapper';

const Payment = ({price,testBooking}) => {
    console.log({price});
    return (
        <div>
            <StripeProviderWrapper>
                <CheckoutForm price={price} testBooking={testBooking} />
            </StripeProviderWrapper>
        </div>
    );
};

export default Payment;



