import { useEffect, useState } from 'react';
import './ManagaeCompany.css';
import { companyapiurl } from '../UserAPIURL component/userapiurl';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

function ManagaeCompany() {

    const navigate = useNavigate();
    const [clist , setcList] = useState([]);

    useEffect(()=>{
        axios.get(companyapiurl+"/fetch").then((response)=>{
            console.log(response.data);
            setcList(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    });

    const manageCompanyStatus=(_id,s)=>{
        if(s=="block")
            {
                const updateDetails = {"condition_obj":{"_id":_id},"content_obj":{"status":0}}
                axios.patch(companyapiurl+"update",updateDetails).then((response)=>{
                    alert("blocked");
                    navigate("/managecompany");
                }).catch((error)=>{
                    console.log("error");
                })
            }
            else if(s=="verify")
            {
                const updateDetails = {"condition_obj":{"_id":_id},"content_obj":{"status":1}};
                axios.patch(companyapiurl+"update",updateDetails).then((response)=>{
                    alert("verifyied");
                    navigate("/managecompany")
                }).catch((error)=>{
                    console.log(error);
                })
            }
            else
            {
                const deleteDetails={"data":{"_id":_id}};
                axios.delete(companyapiurl+"delete",deleteDetails).then((response)=>{
                    alert("user deleted");
                    navigate("/managecompany");
                }).catch((error)=>{
                    console.log(error);
                });
            }
    }
    return(
        <>
            <div>
                <h1> View and Manage Company </h1>
            </div>
            <br/>
            <table cellPadding={6} cellSpacing={6}>
                <tr>
                    <th>Comapny Name</th>
                    <th>Comapny Certify Number</th>
                    <th>Comapny Email</th>
                    <th>Comapny HeadQuater</th>
                    <th>Comapny Director Name</th>
                    <th>Comapny Mobile</th>
                    <th>Comapny Size</th>
                    <th>Comapny Founded year</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                <tr><td colSpan={10 }><hr/></td></tr>
                {
                    clist.map((row)=>(
                        <>
                            <tr>
                                <td>{row.company_name}</td>
                                <td>{row.company_certifiy_num}</td>
                                <td>{row.company_email}</td>
                                <td>{row.company_headquater}</td>
                                <td>{row.company_dir_name}</td>
                                <td>{row.company_mobile}</td>
                                <td>{row.company_size}</td>
                                <td>{row.company_founded}</td>
                                <td>
                                    {
                                        row.status==1 && <a onClick={()=> manageCompanyStatus(row._id,"block")}><Link style ={{"color":"orange"}}>Block User</Link></a>
                                    }
                                    {
                                        row.status==0 && <a onClick={()=> manageCompanyStatus(row._id,"verify")}><Link style ={{"color":"green"}}>Verify User</Link></a>
                                    }
                                </td>
                                <td>
                                    {
                                        <a onClick={()=> manageCompanyStatus(row._id)}><Link style ={{"color":"red"}}>Delete User</Link></a>
                                    }
                                </td>
                            </tr>
                            <tr><td colSpan={10}><hr/></td></tr>
                        </>
                    ))
                }
            </table>
        </>
    );
}
export default ManagaeCompany;