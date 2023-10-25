import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function GoogleAouthLogin() {
  return (
    <div className="w-full  flex flex-col mb-3 items-center">
        <GoogleLogin
    onSuccess={(credentialResponse) => {
        const credentialResponseDecoded = jwt_decode(credentialResponse.credential)
    //   console.log(credentialResponse);
      console.log(credentialResponseDecoded);
    }}
    onError={() => {
      console.log("Login Failed");
    }}
    className="bg-red-600 w-full"
  /></div>
  )
}

export default GoogleAouthLogin