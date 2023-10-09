import { useState, useEffect } from "react";
import axios from "axios";
import UploadPage from "./UploadPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import GoogleAouthLogin from "../components/GoogleAouthLogin";


export default function Login() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  //   const initialValues = {  email: '', password: '' };
  //   const [formValues, setFormValues] = useState(initialValues);
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
    // if (!values.userName) {
    //   errors.userName = 'UserName is required';
    // }
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
    <div className="w-full h-[90vh] flex-align">
        <form action="#" onSubmit={handleSubmit} className="border-2 border-sky-600 border-solid w-[40%] m-auto rounded-md p-4">
          <div className="login-page-container">
            <div className="login-page" >
              <h1 className="text-center text-2xl text-bold">Sign Up</h1>
              <p className="text-center text-m ">Fill the required info </p>

              <div className="sign-input ">
                <label htmlFor="email">Email:</label><br/>
                <input
                className="p-2 border-[1.5px] border-black rounded outline-none"
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
              <div className="sign-input  ">
              <label htmlFor="password">Password:</label><br/>

                <input
                className="p-2 border-[1.5px] border-black rounded outline-none"

                  type="password"
                  placeholder="Your Password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                />
                {formErrors.password && <p>{formErrors.password}</p>}
              </div>
              <div className="sign-input">
              <label htmlFor="confirmPassword">Confirm Password:</label><br/>

                <input
                className="p-2 border-[1.5px] border-black rounded outline-none"

                  type="password"
                  placeholder="Confirm password"
                  required
                  name="confirmPassword"
                  id="confirmPassword"
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-column gap-2 m-2">
              <p>Or sign in with google</p>
              <GoogleAouthLogin className="w-full bg-black" />
             </div>

              <div className="sign-input">
                <button type="submit" className="p-2 bg-sky-600 self-center text-white text-semibold rounded" >Submit</button>
              </div>
            </div>
          </div>
      <p className="text-center">Already have an account. <Link to="/login"><span className="text-sky-500">Sign in</span></Link></p>

        </form>
   
      <ToastContainer />
    </div>
  );
}
