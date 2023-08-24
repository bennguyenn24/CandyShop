import { loadStripe } from "@stripe/stripe-js"

export async function checkout({lineItems}){
    let stripePromise = null;

    const getStripe = () => {
        if (!stripePromise) {
                    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
                }
                return stripePromise;
    }

    const stripe = await getStripe();

    await stripe.redirectToCheckout({
        mode: "payment",
        lineItems: lineItems,
                successUrl: `${process.env.NEXT_PUBLIC_URL}/success`,
                cancelUrl: `${process.env.NEXT_PUBLIC_URL}/cancel`
    })
}