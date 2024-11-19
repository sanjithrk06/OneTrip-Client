// // CancelPage.js
// import { useLocation } from 'react-router-dom';

// const CancelPage = () => {
//   const location = useLocation();
//   const { error } = location.state || {};

//   return (
//     <div className="cancel-page">
//       <h2>Payment Failed or Cancelled</h2>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <p>Your payment was cancelled.</p>
//       )}
//       <button onClick={() => window.location.href = '/'}>Go to Home</button>
//     </div>
//   );
// };

// export default CancelPage;
