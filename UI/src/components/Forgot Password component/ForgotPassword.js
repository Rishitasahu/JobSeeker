import './ForgotPassword.css';
import {useState , useEffect} from 'react';
import {useParams} from "react-router-dom";
import {userapiurl} from '../UserAPIURL component/userapiurl.js';
import axios from 'axios';
//import sendForgotMailAPI from './forgotEmail.js';
function FPassword() {

    const [userEmail , setEmail] = useState();
    const [output ,setOutput] = useState();

    const handlesubmit=()=>{
        axios.get(userapiurl+"fetch?email="+userEmail).then((response)=>{
            console.log(response.data[0].email);
            if(response.data[0]!=null || response.data[0].email==userEmail){
                setOutput("mailsend");
                //sendForgotMailAPI(response.data[0].email,response.data[0].password);
            } 
        }).catch((error)=>{
            console.log(error);
            setOutput("user not find");
        });
    }

    return(
        <>
            <div>
                <h1> Forgot Password  </h1>
                <font color="blue">{output}</font>
                <br/>
                <form>
                    <div class="form-group">
                        <label for="email" >Enter Your Email: </label>
                        &nbsp;&nbsp;
                        <input type="email" class = "from-control" value={userEmail} onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <br/>
                    <button type="button" class="btn btn-success" onClick={(handlesubmit)}>Submit</button>
                </form>
            </div>
        </>
    );
}
export default FPassword;