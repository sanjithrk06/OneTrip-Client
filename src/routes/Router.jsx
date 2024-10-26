// Router.js
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { HomeLayout } from "../layouts";
import {
  Destination,
  HomePage,
  KindsOfDest,
  ListOfDest,
  Login,
  Signup,
  VerifyEmail,
  ForgotPassword,
  ResetPassword,
} from "../pages";
import { useAuthStore } from "../store/authStore";

// Protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />;
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
        {/* Destinations Path */}
        <Route path="destinations">
          <Route index element={<KindsOfDest />} />
          <Route path=":category" element={<ListOfDest />} />
          <Route path="taj" element={<Destination />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
