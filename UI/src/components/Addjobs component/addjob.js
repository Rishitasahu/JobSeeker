import './addjob.css';
import { useState } from 'react';
import axios from 'axios';
import { jobapiurl } from '../UserAPIURL component/userapiurl';

function Addjob() {

    const [compnm , setCompnm] = useState();
    const [subcatnm , setSubCatnm] = useState();
    const [jobloca, setJobloca] = useState();
    const [jobtype , setJobtype] = useState();
    const [jobdesc , setJobdesc] = useState();
    const [tech , setTech] = useState();
    const [requirement , setRequirement] = useState();
    const [exp , setExp] = useState();
    const [pack , setPack] = useState();
    const [deadline , setDeadline] = useState();
    const [output , setOutput]=useState();

    const handleSubmit=()=>{

        const jobDetails = {"comp_name":compnm,"subCatname":subcatnm,"job_location":jobloca,"job_type":jobtype,"job_desc":jobdesc,"tech":tech,"requirment":requirement,"experenice":exp,"package":pack,"deadline":deadline};

        axios.post(jobapiurl+"save",jobDetails).then((response)=>{
            console.log(response);
            setOutput("Job Added Successfully");
            setCompnm("");
            setJobloca("");
            setJobtype("");
            setJobdesc("");
            setTech("");
            setRequirement("");
            setExp("");
            setPack("");
            setDeadline("");
        }).catch((error)=>{
            console.log(error);
            setOutput("Jobs Cannot Added");
        })
    }

    return(
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-6 py-5">
                            <h1> Add Jobs Here </h1>
                            <h3>{output}</h3>
                            <br/>
                            <form>
                                <div class="form-group">
                                    <label for="compnm">Company Name : </label>
                                    <input type="text" class="form-control" value={compnm} onChange={(e=>setCompnm(e.target.value))}/>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="subcat">Subcategory Name : </label>
                                    <input type="text" class="form-control" value={subcatnm} onChange={(e=>setSubCatnm(e.target.value))}/>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="comploc">Job Location : </label>
                                    <input type="text" class="form-control" value={jobloca} onChange={(e=>setJobloca(e.target.value))}/>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="jobtype">Job Type : </label>
                                    <input type="text" class="form-control" value={jobtype} onChange={(e=>setJobtype(e.target.value))}/>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="jobdesc">Job Description : </label>
                                    <textarea type="text" class="form-control" value={jobdesc} onChange={(e=>setJobdesc(e.target.value))}></textarea>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="tech">Technology Used : </label>
                                    <input type="text" class="form-control" value={tech} onChange={(e=>setTech(e.target.value))}/>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="req">Required Skills : </label>
                                    <input type="text" class="form-control" value={requirement} onChange={(e=>setRequirement(e.target.value))}/>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="exp">Experience : </label>
                                    <input type="text" class="form-control" value={exp} onChange={(e=>setExp(e.target.value))}/>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="pack">Package :</label>
                                    <input type="text" class="form-control" value={pack} onChange={(e=>setPack(e.target.value))}/>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="deadline">Form Fill Before : </label>
                                    <input type="text" class="form-control" value={deadline} onChange={(e=>setDeadline(e.target.value))}/>
                                </div>
                                <br/>
                                <button type="button" class="btn btn-success" onClick={(handleSubmit)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Addjob;