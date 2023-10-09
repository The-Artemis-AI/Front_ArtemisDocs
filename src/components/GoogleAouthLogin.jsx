import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function GoogleAouthLogin() {
  return (
    <div>
        <GoogleLogin
    onSuccess={(credentialResponse) => {
        const credentialResponseDecoded = jwt_decode(credentialResponse.credential)
    //   console.log(credentialResponse);
      console.log(credentialResponseDecoded);
    }}
    onError={() => {
      console.log("Login Failed");
    }}
  /></div>
  )
}

export default GoogleAouthLogin