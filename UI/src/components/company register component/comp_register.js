import './comp_register.css';
import { useState } from 'react';
import { companyapiurl } from '../UserAPIURL component/userapiurl';
import axios from 'axios';

function Comp_register() {

    const [cname , setCName] = useState();
    const [cdname , setCDName] = useState();
    const [cemail , setCEmail] = useState();
    const [cpassword , setPassword] = useState();
    const [cmobile , setCMobile] = useState();
    const [caddress , setCAddress] = useState();
    const [cdescip , setCdescrip] = useState();
    const [cfound , setCFound] = useState();
    const [csize , setCSize] = useState();
    const [ccertify , setCcertify] = useState();
    const [output , setOutput] = useState();

    const handleSubmit=()=>{

        const company_details = {"company_name":cname,"company_dir_name":cdname,"company_email":cemail,"company_password":cpassword,"company_mobile":cmobile,"company_headquater":caddress,"company_descrip":cdescip,"company_founded":cfound,"company_size":csize,"company_certifiy_num":ccertify}

        axios.post(companyapiurl+"save",company_details).then((response)=>{
            setOutput("Registration Successfull");
            setCName("");
            setCDName("");
            setCEmail("");
            setCAddress("");
            setPassword("");
            setCMobile("");
            setCdescrip("");
            setCFound("");
            setCSize("");
            setCcertify("");
            localStorage.setItem("role","company");
        }).catch((error)=>{
            console.log(error);
            setOutput("Registration Failed");
        });
    }

    return(
        <>
            <div class="container-xxl py-5">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-6 py-5">
                    <h1>Company Register Here</h1>
                    <br/>
                    <h1>{output}</h1>
                    <form>
                        <div class="form-group ">
                            <label for="namr" class="form-label">Company Name</label>
                            <input type="text" class="form-control" value ={cname} onChange = {e => setCName(e.target.value)} />
                        </div>
                        <br/>
                        <div class="form-group ">
                            <label for="namr" class="form-label">Company Director Name</label>
                            <input type="text" class="form-control" value ={cdname} onChange = {e => setCDName(e.target.value)} />
                        </div>
                        <br/>
                        <div class="form-group">
                            <label for="email" class="form-label">Company Email</label>
                            <input type="email" class="form-control" value={cemail} onChange ={e => setCEmail(e.target.value)}/>
                        </div>
                        <br/>
                        <div class="form-group">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" value={cpassword} onChange ={e => setPassword(e.target.value)}/>
                        </div>
                        <br/>
                        <div class="form-group">
                            <label for="mobile" class="form-label">Company Mobile</label>
                            <input type="mobile" class="form-control" value={cmobile} onChange ={e => setCMobile(e.target.value)}/>
                        </div>
                        <br/>
                        <div class="form-group">
                            <label for="address" class="form-label">Company HeadQuater</label>
                            <textarea  class="form-control" value={caddress} onChange ={e => setCAddress(e.target.value)}></textarea>
                        </div>
                        <br/>
                        <div class="form-group">
                            <label for="address" class="form-label">Company Description</label>
                            <textarea  class="form-control" value={cdescip} onChange ={e => setCdescrip(e.target.value)}></textarea>
                        </div>
                        <br/>
                        <div class="form-group ">
                            <label for="namr" class="form-label">Company Founded In </label>
                            <input type="date" class="form-control" value ={cfound} onChange = {e => setCFound(e.target.value)} />
                        </div>
                        <br/>
                        <div class="form-group">
                            <label for="size" class="form-label">Company Size</label>
                            <input type="text" class="form-control" value={csize} onChange ={e => setCSize(e.target.value)}/>
                        </div>
                        <br/>
                        <div class="form-group ">
                            <label for="certify" class="form-label">Company Certification Number</label>
                            <input type="text" class="form-control" value ={ccertify} onChange = {e => setCcertify(e.target.value)} />
                        </div>
                        <br/>
                        <button type="button" class="btn btn-primary" onClick ={handleSubmit}>Submit</button>
                    </form> 
                </div>
            </div>
        </div>
    </div>
    
        </>
    );
}
export default Comp_register;