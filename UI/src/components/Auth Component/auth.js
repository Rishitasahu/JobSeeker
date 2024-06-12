import {useEffect} from 'react';
import {useNavigate } from 'react-router-dom';

function Auth(){

    const navigate = useNavigate();

    useEffect(()=>{
        
        var path = window.location.pathname;
        if(path == '/admin' || path == '/manageuser' || path == 'cpadmin' || path == 'epadmin' || path == 'addcategory' || path == 'addsubcategory')
        {
            if(!localStorage.getItem("token") || localStorage.getItem("role")!='/admin')
                {
                    navigate("/logout");
                }
        }
        else if(path == '/user' || path == "cpuser" || path == "epuser")
        {
            if(!localStorage.getItem("token") || localStorage.getItem("role")!='/user')
            {
                navigate("/logout");
            }
        }
        else if(path == '/company' || path == "addjob")
            {
                if(!localStorage.getItem("token") || localStorage.getItem("role")!='/company')
                {
                    navigate("/logout");
                }
            }
        else
        {
            if(localStorage.getItem("role")=="admin")
                navigate("/admin");
            else if(localStorage.getItem("role")=="user")
                navigate("/user");
            else if(localStorage.getItem("role")=="company")
                navigate("/company");
            else
                navigate("/");
        }

    },[]);
return(
    <></>
);
}

export default Auth;