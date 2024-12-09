import { useState } from "react";

import { Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);

  const { login, error, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailValid(validateEmail(email));
    setPasswordValid(password.length >= 6);

    if (validateEmail(email) && password.length >= 6) {
      try {
        await login(email, password);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
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
                  Please sign in to start exploring
                </h2>
              </header>

              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="grow p-4 md:px-8 md:py-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h1 className="mb-0 text-center text-2xl text-primary font-bold">
                      Welcome back
                    </h1>
                    {/* Email Input */}
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-sm text-slate-800 font-semibold"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className={`block w-full bg-white rounded-lg outline-none border px-4 py-2 leading-6 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 ${
                          isEmailValid
                            ? "border-gray-200 focus:border-primary"
                            : "border-red-500 focus:border-red-500"
                        }`}
                      />
                      {!isEmailValid && (
                        <p className="text-xs text-red-600">
                          Please enter a valid email address.
                        </p>
                      )}
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1 relative">
                      <label
                        htmlFor="password"
                        className="text-sm text-slate-800 font-semibold"
                      >
                        Password
                      </label>
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className={`block w-full rounded-lg bg-white outline-none border px-4 py-2 leading-6 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 ${
                          isPasswordValid
                            ? "border-gray-200 focus:border-primary"
                            : "border-red-500 focus:border-red-500"
                        }`}
                      />
                      {!isPasswordValid && (
                        <p className="text-xs text-red-600">
                          Password must be at least 6 characters long.
                        </p>
                      )}

                      {/* Toggle Password Visibility */}
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

                      <div className="pt-1 flex items-center justify-between gap-0">
                        <Link
                          to={"/auth/forgot-password"}
                          className="inline-block text-xs font-medium text-primary hover:text-primary"
                        >
                          Forgot Password?
                        </Link>
                      </div>
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
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-primary/90 px-5 py-2 font-semibold leading-6 text-md text-white hover:border-primary hover:bg-primary hover:text-white focus:ring focus:ring-rose-400/50 active:border-primary active:bg-primary"
                      >
                        {isLoading ? (
                          <Loader className=" animate-spin mx-auto" size={12} />
                        ) : (
                          "Sign in"
                        )}
                      </button>

                      <div className="my-5 flex items-center">
                        <span
                          aria-hidden="true"
                          className="h-0.5 grow rounded bg-gray-100"
                        />
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                          or sign in with
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-0.5 grow rounded bg-gray-100"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-0">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-200 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none"
                        >
                          <svg
                            className=" inline-block size-4"
                            viewBox="-3 0 262 262"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                          >
                            <path
                              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                              fill="#4285F4"
                            />
                            <path
                              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                              fill="#34A853"
                            />
                            <path
                              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                              fill="#FBBC05"
                            />
                            <path
                              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                              fill="#EB4335"
                            />
                          </svg>
                          <span>Continue with Google</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="grow bg-gray-50 p-5 pt-0 text-center text-sm md:px-16">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/auth/signup"}
                    className="font-medium text-primary hover:text-rose-400"
                  >
                    Create account
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

export default Login;
