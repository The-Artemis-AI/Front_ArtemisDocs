import { useState, useEffect } from "react";
import axios from "axios";
import UploadPage from "./UploadPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import GoogleAouthLogin from "../components/GoogleAouthLogin";


export default function Login() {
  const [email, setEmail] = useState("");
 

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(name, email);
  };

  const validate = (values) => {
    let errors = {};
  
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(
    (e) => {
      console.log("formValues:", formValues);
      console.log("formErrors:", formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        if (formValues.password !== ConfirmPassword) {
          toast("password are not marching");
        } else {
          sendDataToBackend();
        }
      }
    },
    [formErrors]
  );

  const sendDataToBackend = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/register/",
        formValues
      );
      if (response.status === 200) {
        toast.success("Successful signup");
        navigate("/LoginPage");
      } else {
        toast.error("Problem with signup");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Error saving data");
    }
  };

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/LoginPage");
  };

  return (
    <div className="w-full h-[100vh] flex-align bg-sky-100">
        <form action="#" onSubmit={handleSubmit} className="bg-white  w-[70%] lg:w-[40%] m-auto rounded-md p-4 my-50">
          <div className="login-page-container">
            <div className="login-page" >
              <h1 className="text-center text-3xl text-semibold my-3">Create your Account</h1>
              <p className="text-center text-m my-3 mb-5">Fill the required info </p>

              <div className="sign-input w-full flex align-center justify-center">
                
                <input
                className="p-2 border-[1px] border-gray-300 rounded outline-none  w-[90%] my-2 py-3"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  name="email"
                  //   onChange={(e) => setEmail(e.target.value)}
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
                {formErrors.email && <p>{formErrors.email}</p>}
              </div>
              <div className="sign-input   w-full flex align-center justify-center">
             

                <input
                className="p-2 border-[1px] border-gray-300 rounded outline-none w-[90%] my-2 py-3"

                  type="password"
                  placeholder="Your Password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                />
                {formErrors.password && <p>{formErrors.password}</p>}
              </div>
              <div className="sign-input w-full flex align-center justify-center">
             

                <input
                className="p-2 border-[1px] border-gray-300 rounded outline-none w-[90%] my-2 py-3"

                  type="password"
                  placeholder="Confirm password"
                  required
                  name="confirmPassword"
                  id="confirmPassword"
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 m-2  justify-center align-center">
              <p className="relative text-center my-1   after:ml-0.5  after:border-b-[1px] after:pr-24 after:absolute after:bottom-[30%] after:right-0
              before:ml-0.5  before:border-b-[1px] before:pr-24 before:absolute before:bottom-[30%] before:left-0
              "
              
              >Or sign in with google</p>
              <GoogleAouthLogin className="w-full bg-black" />
             </div>

              <div className="sign-input w-full flex justify-center">
                <button type="submit" className="p-2 bg-sky-600 self-center text-white text-semibold rounded text-center w-[70%]" >Submit</button>
              </div>
            </div>
          </div>
      <p className="text-center">Already have an account. <Link to="/login"><span className="text-sky-500">Sign in</span></Link></p>

        </form>
   
      <ToastContainer />
    </div>
  );
}
