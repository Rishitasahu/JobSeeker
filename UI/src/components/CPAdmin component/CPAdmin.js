//import './CPAdmin.css';
import {useState } from "react";
import {userapiurl} from '../UserAPIURL component/userapiurl.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CPAdmin() {

    const navigate = useNavigate();
    const [oldPassword , setOldPassword ] =useState();
    const [newpassword , setNewPassword ] = useState();
    const [confirmPassword , setConfirmPassword] = useState();
    const [output , setOutput] = useState();

    const handleSubmit=()=>{
        axios.get(userapiurl+"fetch?email="+localStorage.getItem("email")+" &password="+oldPassword).then((response)=>{
            if(newpassword == confirmPassword)
            {
                let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":confirmPassword}};      
                axios.patch(userapiurl+"update",updateDetails).then((response)=>{
                alert("Password changed ,please login again....");
                navigate("/logout");  
                console.log(response);
                }).catch((error)=>{
                console.log(error);    
                });
            }
            else
            {
                setOutput("New and Confirm New Password Mismatches");
                setNewPassword("");
                setConfirmPassword("");
            }
        }).catch((error)=>{
            setOutput("Invalid old Password");
            setOldPassword(" ");
        });
        
      };
    return(
        <>
            <div >
                <br/>
                <h1> Change Password </h1>  
                <font color="blue">{output}</font>
                <br/>
                <form>
                    <div class="form-group">
                        <label for="opwd" class="form-label">Old Password :</label>
                        <input type="text" class="form-control" value={oldPassword} onChange={e =>{setOldPassword(e.target.value)}} />
                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="npwd" class="form-label">New Password</label>
                        <input type="text" class="form-control" value={newpassword} onChange={e =>{setNewPassword(e.target.value)}} />
                    </div>
                    <br/>
                    <div class="form-group">
                        <label class="form-label">Confirm Password</label>
                        <input type="text" class="form-control" value={confirmPassword} onChange ={e =>{setConfirmPassword(e.target.value)}} />
                    </div>
                    <br/>
                    <button type="button" class="btn btn-success" onClick ={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    );
}
export default CPAdmin;