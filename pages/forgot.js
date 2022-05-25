import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgot = () => {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const handleChange = async (e) => {
    if (e.target.name == "password") {
      setpassword(e.target.value);
    }
    if (e.target.name == "cpassword") {
      setcpassword(e.target.value);
    }
    if (e.target.name == "email") {
      setemail(e.target.value);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const sendResetEmail = async () => {
    router.push(`?token=${email}`);
    // let data = { email, sendMail: true };
    // let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // let res = await a.json();
    // if (res.success) {
    //   toast.success("An email has been sent to your registered mail-id", {
    //     position: "top-left",
    //     autoClose: 5000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   setemail("");
    // } else {
    //   toast.error("Some error occurred!", {
    //     position: "top-left",
    //     autoClose: 5000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   setemail("");
    // }
  };

  const resetPassword = async () => {
    if (password == cpassword) {
      let data = { email, password };
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let res = await a.json();
      if (res.success) {
        toast.success("Password changed successfully!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setemail("");
        setpassword("");
        setcpassword("");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        toast.error("Some error occurred!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setemail("");
        setpassword("");
        setcpassword("");
      }
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Head>
        <title>Forgot Password</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/ARJUN.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Forgot Password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/login"}>
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {" "}
                  Login{" "}
                </a>
              </Link>
            </p>
          </div>
          {!router.query.token && (
            <div className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={handleChange}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={sendResetEmail}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Continue
                </button>
              </div>
            </div>
          )}
          {router.query.token && (
            <div>
              <div className="space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <input
                      value={email}
                      onChange={handleChange}
                      id="email-address"
                      name="email"
                      type="hidden"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="password" className="sr-only">
                      New Password
                    </label>
                    <input
                      value={password}
                      onChange={handleChange}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="New Password"
                    />
                  </div>
                  <div>
                    <label htmlFor="cpassword" className="sr-only">
                      Confirm New Password
                    </label>
                    <input
                      value={cpassword}
                      onChange={handleChange}
                      id="cpassword"
                      name="cpassword"
                      type="password"
                      autoComplete="password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Confirm New Password"
                    />
                  </div>
                </div>

                <div>
                  {password && password == cpassword && (
                    <button
                      onClick={resetPassword}
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Continue
                    </button>
                  )}
                </div>
                {password != cpassword && (
                  <span className="text-red-600">Passwords did not match</span>
                )}
                {password && password == cpassword && (
                  <span className="text-green-600">Passwords matched</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forgot;
