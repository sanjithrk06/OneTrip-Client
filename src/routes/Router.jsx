import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { DashLayout, HomeLayout } from "../layouts";
import {
  Destination,
  HomePage,
  ADashboard,
  KindsOfDest,
  ListOfDest,
  Login,
  Signup,
  VerifyEmail,
  ForgotPassword,
  ResetPassword,
  ADestinations,
  AAddDestination,
  ARequestList,
  HiddenSpot,
  Packages,
  // PaymentPage,
  // SuccessPage,
  // CancelPage
} from "../pages";
import { useAuthStore } from "../store/authStore";

// Protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/auth/verify-email" replace />;
  }

  return children;
};

// Redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Create the router instance
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/auth">
        <Route
          path="login"
          element={
            <RedirectAuthenticatedUser>
              <Login />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="signup"
          element={
            <RedirectAuthenticatedUser>
              <Signup />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route
          path="forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPassword />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPassword />
            </RedirectAuthenticatedUser>
          }
        />
      </Route>

      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="hiddenSpot"
          element={
            <ProtectedRoute>
              <HiddenSpot />
            </ProtectedRoute>
          }
        />
        <Route path="packages" element={<Packages />} />
        {/* Destinations Path */}
        <Route path="destinations">
          <Route index element={<KindsOfDest />} />
          <Route path=":category" element={<ListOfDest />} />
          <Route path=":category/:destinationName" element={<Destination />} />
        </Route>
      </Route>

      <Route path="/dashboard/" element={<DashLayout />}>
        <Route path="" element={<ADashboard />} />
        <Route path="destinations" element={<ADestinations />} />
        <Route path="addDestination" element={<AAddDestination />} />
        <Route path="requests" element={<ARequestList />} />
      </Route>

      {/* Payment  route*/}
      {/* <Route path="/payment" element={<PaymentPage/>}>
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Route> */}
    
    </>
  ),
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

export default router;
