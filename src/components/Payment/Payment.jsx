import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useSnapshot } from 'valtio';
import { cartStore } from '../../valtio/Cart';


function Payment() {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const snapshot = useSnapshot(cartStore);


    useEffect(() => {
        fetch("/config").then(async (r) => {
            const { publishableKey } = await r.json();
            setStripePromise(loadStripe(publishableKey));
        });
    }, []);

    useEffect(() => {
        fetch("/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                total: snapshot.totalprice
            }),
        }).then(async (result) => {
            var { clientSecret } = await result.json();
            setClientSecret(clientSecret);

        });
    }, []);



    return (
        <div className='d-flex justify-content-center align-items-center ' style={{ height: '70vh' }} >
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    )
}

export default Payment