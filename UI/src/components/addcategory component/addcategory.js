 import { categoryapiurl } from '../UserAPIURL component/userapiurl';
import './addcategory.css';
import {useState} from 'react';
import axios from 'axios';

function Addcategory() {

    const [catnm , setCatnm] = useState();
    const [file, setFile] = useState();
    const [output, setOutput] = useState();

    const handlechange=(event)=>{
        setFile(event.target.files[0]);
    }

    const handleSubmit=()=>{
        var formData = new FormData();
        formData.append("catname",catnm);
        formData.append("caticonname",file);
        const config ={
            'content-type' : "multipart/form-data"
        };

        axios.post(categoryapiurl+"save",formData , config).then((response)=>{
            setOutput("Category Added");
        }).catch((error)=>{
            console.log(error);
            setOutput("Category Cannot be Added");
        });
    }

    return(
        <>
            <div>
                <h1> Add Category Here </h1>
                <h1>{output}</h1>
                <br/>
                <form>
                    <div class="form-group">
                        <label for="catnm">Category Name : </label>
                        <input type="text" class="form-control" value={catnm} onChange={(e=>setCatnm(e.target.value))}/>
                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="caticon">Category Icon : </label>
                        <input type="file" class="form-control" onChange={(handlechange)}/>
                    </div>
                    <br/>
                    <button type="button" class="btn btn-danger" onClick={(handleSubmit)}>Submit</button>
                </form>
            </div>
        </>
    );
}
export default Addcategory;