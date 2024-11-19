// // PaymentPage.js
// import { useEffect, useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// const PaymentForm = () => {
//   const [clientSecret, setClientSecret] = useState('');
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();

//   // Fetch the client secret from the backend to create a payment intent using axios
//   useEffect(() => {
//     axios.post('http://localhost:5000/api/payment/create-payment-intent', {
//       amount: 5000,  // Example: $50.00 = 5000 cents
//     })
//     .then((response) => {
//       setClientSecret(response.data.clientSecret);
//     })
//     .catch((error) => {
//       console.error("Error fetching client secret:", error);
//     });
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) return;

//     // Confirm the payment with the client secret
//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (error) {
//       // Redirect to cancel page on error
//       console.error(error);
//       navigate('/cancel', { state: { error: error.message } });
//     } else if (paymentIntent.status === 'succeeded') {
//       // Redirect to success page on success
//       navigate('/success', { state: { paymentIntentId: paymentIntent.id } });
//     }
//   };

//   return (
//     <div className="payment-form">
//       <h2>Pay Now</h2>
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" disabled={!stripe || !clientSecret}>Pay Now</button>
//       </form>
//     </div>
//   );
// };

// const PaymentPage = () => (
//   <Elements stripe={stripePromise}>
//     <PaymentForm />
//   </Elements>
// );

// export default PaymentPage;
