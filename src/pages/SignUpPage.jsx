import { useState, useEffect } from "react";
import axios from "axios";
import UploadPage from "./UploadPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import GoogleAouthLogin from "../components/GoogleAouthLogin";
import frame from "../assets/imgs/Frame.png"
import Footer from "../components/Footer";

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
    <div className="relative w-full align-center flex flex-col  h-full" style={{ backgroundImage:`url(${frame})`}}>

    <header className=" mx-6 flex flex-row items-center justify-between h-[10%] w-[90%] my-4">
    <div><Link to="/"><p>ARTEMIS LOGO.</p></Link></div>
    <div>
    <ul className="flex space-x-4">
    <Link to="/"> <li>Home</li></Link>
    <Link to="conversation"><li>Conversation</li></Link>
    <li>Contact</li>
    </ul>
    </div>
    </header>  
    
    <form
        onSubmit={handleSubmit}
        className="bg-white  w-[60%] lg:w-[40%] m-auto rounded-md p-4 my-6"
      >
        <div>
          <div className="login-page">
            <h1 className="text-center text-myOrange text-3xl text-semibold my-3">
              Create Account
            </h1>
            <p className="text-center text-m my-3 mb-5">
              Create your account to continue
            </p>

            <div className="sign-input w-full flex align-center justify-center">
             <div className="flex-col w-full">  
            <p>Email:</p>
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
          
            </div>
            <div className="sign-input w-full flex align-center justify-center">
            
            <div className="flex-col w-full"> 
             <p>Password:</p>
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
           
 
            </div>
            <div className="flex-col w-full"> 
            <p>Confirm Password:</p>
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

             {/* Google login */}
             <div className="flex flex-col gap-2 m-2  justify-center align-center">
             <p className="relative text-center my-1 

             "
             
             >Or sign in with google</p>
             <GoogleAouthLogin className="w-full bg-black" />
            </div>
        

            <div className="sign-input w-full flex justify-center">
              <button
                type="submit"
                className="p-2 bg-myOrange self-center text-myOrange text-semibold rounded text-center w-[70%]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
       
        
        <p className="text-center">
          Already have an account.
          <Link to="/login">
            <span className="text-sky-500"> Login</span>
          </Link>
        </p>
      </form>
      <Footer/>
      <ToastContainer />
    </div>
  );
}
