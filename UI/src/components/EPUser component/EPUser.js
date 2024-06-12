import './EPUser.css';
import { userapiurl } from '../UserAPIURL component/userapiurl';
import {useState , useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function EPUser() {

    const navigate = useNavigate();
    const [id,setid]=useState();
    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [mobile , setMobile] = useState();
    const [address , setAddress] = useState();
    const [city , setCity] = useState();
    const [gender , setGender] = useState();
    const [output , setOutput] = useState();

    useEffect(()=>{
        axios.get(userapiurl+"fetch?email="+localStorage.getItem("email")).then((response)=>{
            setid(response.data[0]._id);
            setName(response.data[0].name);
            setEmail(response.data[0].email);
            setMobile(response.data[0].mobile);
            setAddress(response.data[0].address);
            setCity(response.data[0].city);
            setGender(response.data[0].gender);
        }).catch((error)=>{
            console.log(error);
        });
    },[]);
    
    const handleSubmit=()=>{
        let updateDetails= {"condition_obj":{"_id":id},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
        axios.patch(userapiurl+"update",updateDetails).then((response)=>{
            navigate("/epuser");
            setOutput("Profile Edit Successfully");
        }).catch((error)=>{
            console.log(error);
        })
    }

    return(
        <>
            <div >
            <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row gx-5">
                            <div class="col-lg-6 py-5">
                            <h1> Edit Profile Here !</h1>
                            {output}
                            <form>
                                <div class="form-group">
                                    <label for="name" class="form-label">Name :</label>
                                    <input type="text" class="form-control" value={name} onChange ={e => setName(e.target.value)}/>
                                </div>
                                <div class="form-group">
                                    <label for="email" class="form-label">Email:</label>
                                    <input type="email" class="form-control" value={email} onChange ={e => setEmail(e.target.value)}/>
                                </div>
                                <div class="form-group">
                                    <label for="mobile" class="form-label">Mobile:</label>
                                    <input type="text" class="form-control" value={mobile} onChange ={e => setMobile(e.target.value)}/>
                                </div>
                                <div class="form-group">
                                    <label for="address" class="form-label">Address:</label>
                                    <textarea type="text" class="form-control" value={address} onChange ={e => setAddress(e.target.value)}></textarea>
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
                                <br/>
                                <div class="form-group">
                                    <label for="gender">Gender:</label>
                                    &nbsp;&nbsp;
                                    <input type="radio" name="gender" value="male" checked={gender==="male"} onChange={ e => setGender(e.target.value) } /> Male
                                    &nbsp; &nbsp;
                                    <input type="radio" name="gender" value="female" checked={gender==="female"} onChange={ e => setGender(e.target.value) } /> Female
                                </div>
                                <br/>
                                <button type="button" class="btn btn-success" onClick ={handleSubmit}>Submit</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default EPUser;