import './login.css';
import {useState} from "react";
import axios from 'axios';
import {userapiurl , companyapiurl} from '../UserAPIURL component/userapiurl.js';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Login() {

    const [email , setEmail]= useState();
    const [password , setPassword] = useState();
    const [position , setPosition] = useState();
    const [output , setOutput] = useState();
    const [Role, setRole] = useState();
    const navigate = useNavigate();

    const handleLogin=()=>{
        var Details={"email":email,"password":password};
        if(Role == "Candidate"){
            axios.post(userapiurl +"login",Details).then((response)=>{
                var user = response.data.userDetail;
                localStorage.setItem("role",user.role);
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("_id",user._id);
                localStorage.setItem("email",user.email);
                
                user.role=="admin"?navigate("/admin"):navigate("/user");
    
                setOutput("Login Sucessfully");
                setEmail("");
                setPassword("");
            }).catch((error)=>{
                console.log(error);
                setOutput("Login Failed");
            });

        }
        else if (Role == "Company"){
            axios.post(companyapiurl+"login",Details).then((response)=>{
                var user = response.data.userDetail;
                localStorage.setItem("role",user.role);
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("_id",user._id);
                localStorage.setItem("email",user.company_email);
                
                navigate("/company")
    
                setOutput("Login Sucessfully");
                setEmail("");
                setPassword("");
            }).catch((error)=>{
                console.log(error);
                setOutput("Login Failed");
            });
        }
        
        else {
            setOutput("Login Failed");
        }
        

    }
    return(
        <>
            <div id = "login">
            <div class="container-xxl py-5">
                <div class="container">
                     <div class="row gx-5">
                        <div class="col-lg-6 py-5">
                            <h1> Login here </h1>
                                {output}
                                <br/>
                                <form>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div class="form-group">
                                        <label for="password" >Password</label>
                                        <input type="password" class ="form-control"value={password} onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                    <br/>
                                    <div class="form-group">
                                        <label for="city" class="form-label">Login as :</label>
                                        <select type="city" class="form-control" value={Role} onChange ={e => setRole(e.target.value)}>
                                            <option>Select Role</option>
                                            <option>Candidate</option>
                                            <option>Company</option>
                                        </select>
                                    </div>
                                    <br/>
                                    <button type="button" class="btn btn-success" onClick={handleLogin}>Login</button>
                                    <br/><br/>
                                    <font><Link to="/forgot">Forgot Password ?</Link></font>
                                </form>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;