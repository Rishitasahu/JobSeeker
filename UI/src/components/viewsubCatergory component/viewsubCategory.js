import './viewsubCategory.css';
import { subcategoryapiurl } from '../UserAPIURL component/userapiurl';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'; 

function ViewSubCategory() {

    const params = useParams();
    const [SClist , setSClist] = useState([]);

    useEffect(()=>{
        axios.get(subcategoryapiurl+"fetch?catname= "+params.catname).then((response)=>{
            console.log(response.data);
            setSClist(response.data.ScategoryList);
            console.log(response.data);
            console.log(response.data.ScategoryList);
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    return(
        <>
            <div>
                <h1> {params.catname} SubCategories </h1>
                <br/>
                <div id="subcategory">
                    <div>
                    {
                    SClist.map((row)=>(
                        <Link to={`/viewjob/${row.subCatname}`} >
                        <div className="category_part">
                        <img src={`../asset/uploads/subCaticons/${row.subCaticonName}`} height="200" width="250" />
                        <br/>
                        <h3>{row.subCatname}</h3> 
                        </div>
                        </Link>
                    ))
                    }
                    </div>
                </div>
            </div>
        </>
    );
}
export default ViewSubCategory;