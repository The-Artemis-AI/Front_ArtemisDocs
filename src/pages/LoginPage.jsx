import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GoogleAouthLogin from "../components/GoogleAouthLogin";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login/",
        {},
        {
          auth: {
            username: formValues.email,
            password: formValues.password,
          },
        }
      );
      if (response.status === 200) {
    
        setIsLoggedIn(true);
        toast.success("Successful login");
        navigate("/upload");
      } else {
        toast.error("Problem with login");
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error("Error sending data, check email and password");
    }
  };

  return (
    <div className="w-full h-[100vh] flex-align bg-sky-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white  w-[70%] lg:w-[40%] m-auto rounded-md p-4 my-50"
      >
        <div>
          <div className="login-page">
            <h1 className="text-center text-3xl text-semibold my-3">
              Log in to continue
            </h1>
            <p className="text-center text-m my-3 mb-5">
              Sign in with your account to continue
            </p>

            <div className="sign-input w-full flex align-center justify-center">
             
              

              <input
                className="p-2 border-[1px] border-gray-300 rounded outline-none  w-[90%] my-2 py-3"
                type="email"
                placeholder="Your Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sign-input w-full flex align-center justify-center">
            

              <input
                className="p-2 border-[1px] border-gray-300 rounded outline-none w-[90%] my-2 py-3"
                type="password"
                placeholder="Your Password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                required
              />
            </div>
             {/* Google login */}
             <div className="flex flex-col gap-2 m-2  justify-center align-center">
             <p className="relative text-center my-1   after:ml-0.5  after:border-b-[1px] after:pr-24 after:absolute after:bottom-[30%] after:right-0
             before:ml-0.5  before:border-b-[1px] before:pr-24 before:absolute before:bottom-[30%] before:left-0
             "
             
             >Or sign in with google</p>
             <GoogleAouthLogin className="w-full bg-black" />
            </div>
        

            <div className="sign-input w-full flex justify-center">
              <button
                type="submit"
                className="p-2 bg-sky-600 self-center text-white text-semibold rounded text-center w-[70%]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
       
        
        <p className="text-center">
          Don't have an account.{" "}
          <Link to="/signup">
            <span className="text-sky-500">Create account</span>
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
}
