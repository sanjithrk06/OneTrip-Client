// States, router components & icons
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";

// Auth store
import { useAuthStore } from "../../store/authStore";

// Regex
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const ResetPassword = () => {
  const { token } = useParams();

  // Password State
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(true);

  // Confirm Password State
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isConfirmPasswordValid, setConfirmPasswordValid] = useState(true);

  // Auth state components
  const { resetPassword, error, isLoading } = useAuthStore();
  const navigate = useNavigate();

  // Validation
  const validatePass = (pwd) => {
    return PWD_REGEX.test(pwd);
  };

  // Handlers
  const handleSubmit = async (e) => {
    e.preventDefault();

    setPasswordValid(validatePass(password));
    setConfirmPasswordValid(password === confirmPassword);

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!validatePass(password)) {
      alert("Invalid Password");
      return;
    }

    try {
      await resetPassword(token, password);

      toast.success(
        "Password reset successfully, redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error resetting password");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="bg-whiteDim text-slate-900">
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-primary/10"
      >
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            <section className="w-full max-w-md py-2">
              <header className="mb-6 text-center">
                <h1 className="mb-1 inline-flex items-center gap-1 text-lg font-bold">
                  <svg
                    className="hi-mini hi-cube-transparent inline-block size-4 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>One Trip</span>
                </h1>
                <h2 className=" text-xs font-medium text-slate-600">
                  Reset Your Password to start exploring
                </h2>
              </header>

              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="grow p-4 md:px-8 md:py-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h1 className="mb-0 text-center text-2xl text-primary font-bold">
                      Reset Password
                    </h1>
                    {/* Password Input */}
                    <div className="w-full  space-y-1 relative">
                      <label
                        htmlFor="password"
                        className="text-sm text-slate-800 font-semibold"
                      >
                        New Password
                      </label>
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className={`block w-full rounded-lg outline-none border px-4 py-2 leading-6 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 ${
                          isPasswordValid
                            ? "border-gray-200 focus:border-primary"
                            : "border-red-500 focus:border-red-500"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-4 top-9 text-slate-500 hover:text-slate-700"
                      >
                        {isPasswordVisible ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            clipRule="evenodd"
                            fillRule="evenodd"
                            fill="currentColor"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"
                              fillRule="nonzero"
                            />
                          </svg>
                        ) : (
                          <svg
                            clipRule="evenodd"
                            fillRule="evenodd"
                            fill="currentColor"
                            className="w-5 h-5"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
                              fillRule="nonzero"
                            />
                          </svg>
                        )}
                      </button>
                      {!isPasswordValid && (
                        <p className="text-xs text-red-600">
                          Password must be at least 8 characters long.
                        </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className=" w-full space-y-1 relative">
                      <label
                        htmlFor="confirm-password"
                        className="text-sm text-slate-800 font-semibold"
                      >
                        Confirm Password
                      </label>
                      <input
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        id="confirm-password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        className={`block w-full rounded-lg outline-none border px-4 py-2 leading-6 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 ${
                          isConfirmPasswordValid
                            ? "border-gray-200 focus:border-primary"
                            : "border-red-500 focus:border-red-500"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute right-4 top-9 text-slate-500 hover:text-slate-700"
                      >
                        {isConfirmPasswordVisible ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            clipRule="evenodd"
                            fillRule="evenodd"
                            fill="currentColor"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"
                              fillRule="nonzero"
                            />
                          </svg>
                        ) : (
                          <svg
                            clipRule="evenodd"
                            fillRule="evenodd"
                            fill="currentColor"
                            className="w-5 h-5"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
                              fillRule="nonzero"
                            />
                          </svg>
                        )}
                      </button>

                      {!isConfirmPasswordValid && (
                        <p className="text-xs text-red-600">
                          Password do not match.
                        </p>
                      )}
                    </div>

                    <div>
                      {error && (
                        <p className="text-red-500 font-semibold text-sm mt-2 mb-1">
                          {error}
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={isLoading}
                        onClick={handleSubmit}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-primary/90 px-5 py-2 font-semibold leading-6 text-md text-white hover:border-primary hover:bg-primary hover:text-white focus:ring focus:ring-rose-400/50 active:border-primary active:bg-primary"
                      >
                        {isLoading ? "Resetting..." : "Set New Password"}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="grow bg-gray-50 p-5 pt-0 flex justify-center text-center text-sm md:px-16">
                  <Link
                    to={"/login"}
                    className="font-medium flex items-center text-primary hover:text-rose-400 hover:underline"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResetPassword;
