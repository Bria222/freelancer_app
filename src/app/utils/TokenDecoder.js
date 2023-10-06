
import jwt_decode from "jwt-decode";
 

const TokenDecoder = (token) => {

  return jwt_decode(token);
   
  
}

export default TokenDecoder
 