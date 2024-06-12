import {Navigate} from 'react-router-dom';

function Logout(){
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
return(
    <Navigate to ="/login" />
);
}

export default Logout;