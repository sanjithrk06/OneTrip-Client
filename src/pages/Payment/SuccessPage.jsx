// // SuccessPage.js
// import { useLocation } from 'react-router-dom';

// const SuccessPage = () => {
//   const location = useLocation();
//   const { paymentIntentId } = location.state || {};

//   return (
//     <div className="success-page">
//       <h2>Payment Successful!</h2>
//       <p>Your payment has been processed successfully.</p>
//       {paymentIntentId && (
//         <p>Payment ID: {paymentIntentId}</p>
//       )}
//       <button onClick={() => window.location.href = '/'}>Go to Home</button>
//     </div>
//   );
// };

// export default SuccessPage;
