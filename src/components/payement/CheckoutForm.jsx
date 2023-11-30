import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";


const CheckoutForm = ({ price, testBooking }) => {
    const [err, setErr] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecuire = useAxiosSecure();
    const { testName, testId, status, slot } = testBooking;

    useEffect(() => {
        axiosSecuire.post(`/create-payment-intent`, { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            });

    }, [axiosSecuire, price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setErr(error.message);
        } else {
            setErr('');

            const { paymentIntent, error: confirmErr } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            });

            if (confirmErr) {
                console.error(confirmErr);
            } else if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user?.email,
                    testName,
                    testId,
                    date: new Date(),
                    status,
                    slot,
                    transactionId: paymentIntent.id
                }
                const res = await axiosSecuire.post('/payments', payment);
                console.log(res);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        }
                    },
                }}
            />
            {err ? <p className="my-2 text-red-600">{err}</p> : ''}
            {transactionId ? <p className="text-green-600 text-[10px] my-2">Payment successfull. Transaction ID:{transactionId}</p> : ''}
            <button type="submit" className="bg-blue-600 px-6 py-1 mt-4 rounded-sm text-white" disabled={!stripe || !clientSecret}>
                ${price} Pay
            </button>
        </form>

    );
};

export default CheckoutForm;
