import './addsubcategory.css';
import {useState , useEffect} from 'react';
import axios from 'axios';
import { categoryapiurl , subcategoryapiurl} from '../UserAPIURL component/userapiurl';

function Addsubcategory() {

    const [catnm, setCatnm] = useState();
    const [subcatnm, setSubCatnm] = useState();
    const [file , setFile] = useState();
    const [clist, setClist] = useState([]);
    const [output , setOutput] =useState();

    useEffect(()=>{
        axios.get(categoryapiurl+"fetch").then((response)=>{
            setClist(response.data.categoryList);
        }).catch((error)=>{
          console.log(error);
        }); 
      },[]);

    const handlechange=(event)=>{
        setFile(event.target.files[0]);
    }

    const handlSubmit=()=>{
        var formData = new FormData();
        formData.append("catname",catnm);
        formData.append("subCatname",subcatnm);
        formData.append("subCaticonName",file);
        
        const config={
            "content-type": "multipart/form-data"
        }

        axios.post(subcategoryapiurl+"save", formData , config).then((response)=>{
            setOutput("Sub Category Added Successfully !!");
            setCatnm("");
            setSubCatnm("");
            console.log(response);
        }).catch((error)=>{
            console.log(error);
            setOutput("Sub Category Addition Failed !!");
        })
    }

    return(
        <>
            <div>
                <h1> Add SubCategory Here! </h1>
                <font color="blue">{output}</font>
                <br/>
               <form>
               <div class="form-group">
                        <label for="catnm" claas = "form label">Category Name : </label>
                        <select class="form-control" value={catnm} onChange={(e => setCatnm(e.target.value))} >
                            <option>Select Category</option>
                            {clist.map((row)=>(
                                <option>{row.catname}</option>
                            ))}
                        </select>
                </div>
                <br/>
                <div class="form-group">
                    <label for="subcatnm" claas = "form label">Sub Category Name : </label>
                    <input type="text" class="form-control" value={subcatnm} onChange={(e=>setSubCatnm(e.target.value))}/>
                </div>
                <br/>
                <div class="form-group">
                        <label for="subcaticon">Sub Category Icon : </label>
                        <input type="file" class="form-control" onChange={(handlechange)}/>
                </div>
                <br/>
                <button type="button" class ="btn btn-danger" onClick={(handlSubmit)}>Submit</button>
               </form>
            </div>
        </>
    );
}
export default Addsubcategory;