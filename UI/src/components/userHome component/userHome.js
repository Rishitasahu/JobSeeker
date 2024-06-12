import './userHome.css';
import {useEffect, useState} from 'react';
import {categoryapiurl} from '../UserAPIURL component/userapiurl.js';
import axios from 'axios';
import {Link} from 'react-router-dom';

function UserHome() {

    const [clist , setClist] = useState([]);

    useEffect(()=>{
        axios.get(categoryapiurl+"fetch").then((response)=>{
            setClist(response.data.categoryList);
            //console.log(response.data.categoryList);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);

    return(
        <>
            <div id="Cat_body">
            <h1>Job Categories </h1>
            <br/>
            <div id="addcategory" >
               {
                clist.map((row)=>(
                    <Link to= {`/viewsubcategory/${row.catname}`}>
                        <div className = "categoryPart">
                            <img src={`./asset/uploads/caticons/${row.caticonname}`} height="200px" width="250px"/>
                            <br/>
                            {row.catname}
                        </div>
                    </Link>
                ))
               }
            </div>            
       </div>
        </>
    );
}
export default UserHome;