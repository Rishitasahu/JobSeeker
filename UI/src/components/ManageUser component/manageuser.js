import "./manageuser.css";
import {useState , useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {userapiurl} from '../UserAPIURL component/userapiurl.js';
import {Link} from 'react-router-dom'

function Manageuser(){

    const navigate = useNavigate();
    const [ userDetails , setUserDetails ] = useState([]);

    useEffect(()=>{
        axios.get(userapiurl+"fetch?role=user").then((response)=>{
            setUserDetails(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    });

    const manageUserStatus=(_id,s)=>{
        if(s=="block")
        {
            const updateDetails = {"condition_obj":{"_id":_id},"content_obj":{"status":0}}
            axios.patch(userapiurl+"update",updateDetails).then((response)=>{
                alert("blocked");
                navigate("/manageuser");
            }).catch((error)=>{
                console.log("error");
            })
        }
        else if(s=="verify")
        {
            const updateDetails = {"condition_obj":{"_id":_id},"content_obj":{"status":1}};
            axios.patch(userapiurl+"update",updateDetails).then((response)=>{
                alert("verifyied");
                navigate("/manageuser")
            }).catch((error)=>{
                console.log(error);
            })
        }
        else
        {
            const deleteDetails={"data":{"_id":_id}};
            axios.delete(userapiurl+"delete",deleteDetails).then((response)=>{
                alert("user deleted");
                navigate("/manageuser");
            }).catch((error)=>{
                console.log(error);
            });
        }
    }

    return(
        <>
        <div>
        <h1>Veiw And Manage User</h1>
        <br/>
        <table cellPadding={7} cellSpacing={7}>
            <tr>
                <th>UserID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>City</th>
                <th>Gender</th>
                <th>Info</th>
                <th>status</th>
                <th>Action</th>
            </tr>
            <tr><td colSpan={10}><hr/></td></tr>
                {
                    userDetails.map((row)=>(
                        <>
                            <tr>
                                <td>{row._id}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.mobile}</td>
                                <td>{row.address}</td>
                                <td>{row.city}</td>
                                <td>{row.gender}</td>
                                <td>{row.info}</td>
                                <td>
                                    {
                                        row.status==1 && <a onClick={()=> manageUserStatus(row._id,"block")}><Link style ={{"color":"orange"}}>Block User</Link></a>
                                    }
                                    {
                                        row.status==0 && <a onClick={()=> manageUserStatus(row._id,"verify")}><Link style ={{"color":"green"}}>Verify User</Link></a>
                                    }
                                </td>
                                <td>
                                    {
                                        <a onClick={()=> manageUserStatus(row._id)}><Link style ={{"color":"red"}}>Delete User</Link></a>
                                    }
                                </td>
                            </tr>
                            <tr><td colSpan={10}><hr/></td></tr>
                        </>
                    ))
                }
        </table>
        </div>
        </>

    );
}

export default Manageuser;