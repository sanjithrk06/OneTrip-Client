// States, router components & icons
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Loader, Mail } from "lucide-react";

// Auth store
import { useAuthStore } from "../../store/authStore";

const ForgotPassword = () => {
  // Email states
  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auth state components
  const { isLoading, forgotPassword, error } = useAuthStore();

  // Validation
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Handlers
  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailValid(validateEmail(email));

    if (validateEmail(email)) {
      try {
        await forgotPassword(email);
        setIsSubmitted(true);
      } catch (error) {
        console.log(error);
      }
    }
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
                  <h1 className="mb-6 text-center text-2xl text-primary font-bold">
                    Forgot Password
                  </h1>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Email Input */}
                      <div className="space-y-1">
                        <label
                          htmlFor="email"
                          className="text-sm text-gray-700 font-medium"
                        >
                          Enter your email address and we'll send you a link to
                          reset your password.
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className={`block w-full rounded-lg outline-none border px-4 py-2 leading-6 text-slate-700 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 ${
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
                            <Loader className="size-6 animate-spin mx-auto" />
                          ) : (
                            "Send Reset Link"
                          )}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-slate-600 font-medium mb-6">
                        If an account exists for {email}, you will receive a
                        password reset link shortly.
                      </p>
                    </div>
                  )}
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

export default ForgotPassword;
