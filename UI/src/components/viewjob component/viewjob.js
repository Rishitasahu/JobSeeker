import './viewjob.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams ,useNavigate, Navigate } from 'react-router-dom';
import { jobapiurl } from '../UserAPIURL component/userapiurl';

function Viewjob() {

    const Navigate = useNavigate();
    const params = useParams();
    const [JList , setJList ] = useState([]);
    const [apply , setApply] = useState();
    const [output , setOutput] = useState();

    useEffect(()=>{
        axios.get(jobapiurl+"fetch?subCatname="+params.subCatname).then((response)=>{
            console.log(response.data.JobList);
            setJList(response.data.JobList);
        }).catch((error)=>{
            console.log(error);
            setOutput("Recently No Jobs are available");
        });
        
    },[])

    const handleapply=()=>{
        if(localStorage.getItem("role")==undefined){
            Navigate("/login");
        }
        else if(localStorage.getItem("role")=="user")
        {
            Navigate("/apply");
        }
    }
   
    return(
        <>
            <div id="marq">
                <marquee scrollamount={15}> Jobs are shown according to your Interset</marquee>
            </div>
            <h1>{output}</h1>
            <div id="job">
                
                {/* The sidebar */}
                    {/*<div id='nav' class="sidebar navbar flex-column">
                    <h2>Filter</h2>
                    <a class="active" href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                    </div>*/}

                {/* Page content */}
                <div id="jobs">
                    {
                    JList.map((row)=>(
                        <div className="job_part">
                        <h4>company Name :- {row.comp_name}</h4>
                        <h4>JobType :- {row.job_type}</h4> 
                        <h4>Location :- {row.job_location}</h4>
                        <h4>Job Description :- {row.job_desc}</h4>
                        <h4>Technology Required :-{row. tech}</h4>
                        <h4>Responsibility :-{row.requirment}</h4>
                        <h4>Experenice :- {row.experenice}</h4>
                        <h4>Salary :-{row.package}</h4>
                        <h4>Deadline to fill form :- {row.deadline}</h4>
                        <br/>
                        <button type="button" class ="btn btn-success" onClick={handleapply}>Apply Now</button> 
                        </div>
                        
                    ))
                    }
                </div>
            </div>
        </>
    );
}
export default Viewjob;