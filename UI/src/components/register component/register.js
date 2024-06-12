import './register.css';
import {useState} from 'react';
import axios from 'axios';
import {userapiurl} from '../UserAPIURL component/userapiurl.js';

function Register(){

    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const [mobile , setMobile] = useState();
    const [address , setAddress] = useState();
    const [city , setCity] = useState();
    const [gender , setGender] = useState();
    const [output , setOutput] = useState();

    const handleSubmit = ()=>{
        var userDetails = {"name": name,"email": email, "password":password, "mobile":mobile, "address":address, "city":city, "gender":gender}

        axios.post(userapiurl+"save",userDetails).then((response)=>{
            setOutput("User Registered Sucessfully");
            setName("");
            setEmail("");
            setPassword("");
            setAddress("");
            setCity("");
            setMobile("");
            setGender("");
            localStorage.setItem("role","company");
        }).catch((error)=>{
            console.log(error);
            setOutput("Registration Failed");
        });

    }
return (
    <>
    <div id="register">
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-6 py-5">
                    <h1>Register Here</h1>
                    {output}  
                    <form>
                        <div class="form-group ">
                            <label for="namr" class="form-label">Name</label>
                            <input type="text" class="form-control" value ={name} onChange = {e => setName(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" value={email} onChange ={e => setEmail(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" value={password} onChange ={e => setPassword(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="mobile" class="form-label">Mobile</label>
                            <input type="mobile" class="form-control" value={mobile} onChange ={e => setMobile(e.target.value)}/>
                        </div>
                        <div class="form-group">
                            <label for="address" class="form-label">Address</label>
                            <textarea  class="form-control" value={address} onChange ={e => setAddress(e.target.value)}></textarea>
                        </div>
                        <div class="form-group">
                            <label for="city" class="form-label">City</label>
                            <select type="city" class="form-control" value={city} onChange ={e => setCity(e.target.value)}>
                                <option>Select City</option>
                                <option>Indore</option>
                                <option>Ujjain</option>
                                <option>Bhopal</option>
                                <option>Satna</option>
                            </select>
                        </div>
                        {city}
                        <br/>
                        <div class="form-group">
                            <label for="gender">Gender:</label>
                            &nbsp;&nbsp;
                            <input type="radio" name="gender" value="male" onChange={ e => setGender(e.target.value) } /> Male
                            &nbsp; &nbsp;
                            <input type="radio" name="gender" value="female" onChange={ e => setGender(e.target.value) } /> Female
                        </div>
                        <br/>
                        <button type="button" class="btn btn-primary" onClick ={handleSubmit}>Submit</button>
                    </form> 
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
)
}

export default Register;