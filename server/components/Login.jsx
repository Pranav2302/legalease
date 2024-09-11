import React from "react";
import { Logo } from "./together.js";
//link will redirect to login page if already has account
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"
import {useState} from "react"
function Login(){
    const {register,handleSubmit} = useForm();
    const [error,setError] = useState("");

    const signup = async (data)=>{
        setError("");
        try {
            //check session
            //check if exist redirect to ('/') page 
        } catch (error) {
            setError(error.message);
        }
    }
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
        <div className="flex w-full h-full max-w-screen-xl">
          <div className="w-1/4 bg-blue-600 flex items-center justify-center">
            <div className="text-center">
              <span className="inline-block w-full max-w-[100px]">
                <Logo />
              </span>
              <h1 className="text-white text-3xl mt-4">LawLink</h1>
            </div>
          </div>

          
          <div className="w-3/4 bg-white flex items-center justify-center">
            <div
              className={`mx-auto w-full max-w-lg rounded-xl p-10 bg-gray-100 border-black/10 shadow-lg`}
            >
              <h2 className="text-center text-2xl font-bold leading-tight text-gray-900">
                Sign up to LawLink
              </h2>
              <p className="mt-2 text-center text-base text-gray-600">
                Welcome to LawLink! Join our community of legal professionals
                and clients to connect, collaborate, and achieve legal
                excellence together.
              </p>
              {error && (
                <p className="text-red-600 mt-8 text-center">{error}</p>
              )}
              <form onSubmit={handleSubmit(login)} className="mt-8">
                <div className="space-y-5">
                  <Input
                    label="Email: "
                    placeholder="Enter the Email"
                    type="email"
                    {...register("email", {
                      required: true,
                      validate: {
                        matchPattern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            value
                          ) || "Email address must be a valid address",
                      },
                    })}
                  />
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                    {...register("name", {
                      required: true,
                    })}
                  />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: true,
                      validate: {
                        matchPattern: (val) =>
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
                            val
                          ) ||
                          "at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, Can contain special characters",
                      },
                    })}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md"
                  >
                    Get Started
                  </Button>
                </div>
              </form>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center bg-red-600 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700 transition-all"
                >
                  <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 12v8.3c-4.7 0-8.5-3.9-8.5-8.5s3.9-8.5 8.5-8.5c2.3 0 4.4 1 6 2.5L15.7 8c-.8-.8-2.1-1.5-3.7-1.5C8.3 6.5 5.8 9 5.8 12s2.5 5.5 5.5 5.5c2.5 0 4.1-1.5 4.3-3.5h-4.3v-3h7.2c.1.5.2 1.2.2 2 0 4.8-3.3 8.3-7.5 8.3z"
                    />
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login