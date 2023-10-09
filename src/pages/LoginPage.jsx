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
        // Handle successful login here
        // For example, set authentication token in state/local storage
        // and redirect to the desired page
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
    <div className="w-full h-[90vh] flex-align">
      <form
        onSubmit={handleSubmit}
        className=" shadow-grey-500/20 bg-sky-100 shadow-2xl  border-sky-600 border-solid w-[40%] m-auto rounded-md p-4"
      >
        <div>
          <div className="login-page">
            <h1 className="text-center text-2xl text-bold">
              Log in to continue
            </h1>
            <p className="text-center text-m mb-6">
              Sign in with your account to continue
            </p>

            <div className="sign-input">
              <label htmlFor="email" className=" after:content-['*']">
                Email:
              </label>
              <br />

              <input
                className="p-2 border-[1.5px] border-black rounded outline-none after:content-['*']"
                type="email"
                placeholder="Your Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sign-input">
              <label htmlFor="password" className=" after:content-['*']">
                Password:
              </label>
              <br />

              <input
                className="p-2 border-[1.5px] border-black rounded outline-none"
                type="password"
                placeholder="Your Password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                required
              />
            </div>
             {/* Google login */}
             <div className="flex flex-column gap-2 m-2">
              <p>Or sign in with google</p>
              <GoogleAouthLogin className="w-full bg-black" />
             </div>
        

            <div className="sign-input">
              <button
                type="submit"
                className="p-2 bg-sky-600 text-white text-semibold rounded"
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
