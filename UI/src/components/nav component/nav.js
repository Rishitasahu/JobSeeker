import './nav.css';
import { Link } from 'react-router-dom';
import {useState , useEffect} from 'react';
import Auth from '../Auth Component/auth.js';

function Nav() {

    const [navContent , setNavContent] = useState();

    useEffect(()=>{
        if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=='admin')
            {
                setNavContent(
                <>
                <div>
                <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                    <a class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                        <h2 class="m-0 text-primary">JobSeeker </h2>
                    </a>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto p-4 p-lg-0">
                            <a class="nav-item nav-link"><Link to="/admin">Admin Home</Link></a>
                            <a class="nav-item nav-link"><Link to="/manageuser">Manage User</Link></a>
                            <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><Link to="/service">Settings</Link></a>
                                <div class="dropdown-menu fade-up m-0">
                                    <a class="dropdown-item"><Link to="/cpadmin" >Change Password</Link></a>
                                    <a class="dropdown-item"><Link to="/epadmin" >Edit Profile</Link></a>
                                </div>
                            </div>
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><Link to="/service">Manage Category</Link></a>
                                <div class="dropdown-menu fade-up m-0">
                                    <a class="dropdown-item"><Link to="/addcategory" >Add Category</Link></a>
                                    <a class="dropdown-item"><Link to="/addsubcategory" >Add SubCategory</Link></a>
                                </div>
                            </div>
                            <a class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"><Link to="/logout" style={{"color":"white"}}>Logout</Link><i class="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </nav>
                </div>
                </>);
            }
        else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
            {
                setNavContent(<>
                <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                    <a class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                        <h2 class="m-0 text-primary">JobSeeker </h2>
                    </a>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto p-4 p-lg-0">
                            <a class="nav-item nav-link"><Link to="/user">User Home</Link></a>
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><Link to="/service">Settings</Link></a>
                                <div class="dropdown-menu fade-up m-0">
                                    <a class="dropdown-item"><Link to="/CPUser" >Change Password</Link></a>
                                    <a class="dropdown-item"><Link to="/EPUser" >Edit Profile</Link></a>
                                </div>
                            </div>
                            <a class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"><Link to="/logout" style={{"color":"white"}}>Logout</Link><i class="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </nav>

                </>);
            }
            else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="company")
                {
                    setNavContent(<>
                    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                        <a class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                            <h2 class="m-0 text-primary">JobSeeker </h2>
                        </a>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto p-4 p-lg-0">
                                <a class="nav-item nav-link"><Link to="/company">Company Home</Link></a>
                                {/*<div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><Link to="/service">Settings</Link></a>
                                    <div class="dropdown-menu fade-up m-0">
                                        <a class="dropdown-item"><Link to="/cpcompany" >Change Password</Link></a>
                                        <a class="dropdown-item"><Link to="/epcompany" >Edit Profile</Link></a>
                                    </div>
                                </div>*/}
                                <a class="nav-item nav-link"><Link to="/addjob">Add Jobs</Link></a>
                                <a class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"><Link to="/logout" style={{"color":"white"}}>Logout</Link><i class="fa fa-arrow-right ms-3"></i></a>
                            </div>
                        </div>
                    </nav>
    
                    </>);
                }
    
        else
            {
                setNavContent(<>
                <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                    <a class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                        <h2 class="m-0 text-primary">JobSeeker </h2>
                    </a>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto p-4 p-lg-0">
                            <a class="nav-item nav-link active"><Link to="/"> Home</Link></a>
                            <a class="nav-item nav-link"><Link to="/about">About</Link></a>
                            <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><Link to="/service">Registration</Link></a>
                                <div class="dropdown-menu fade-up m-0">
                                    <a class="dropdown-item"><Link to="/userregister">Candidate Register</Link></a>
                                    <a class="dropdown-item"><Link to="/companyregister" >Company Register</Link></a>
                                </div>
                            </div>
                            <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                        </div>
                        <a class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"><Link to="/login" style={{"color":"white"}}>Login</Link><i class="fa fa-arrow-right ms-3"></i></a>
                    </div>
                </nav>

                </>);
            }
    })

    return(
        <>
            <Auth/>

            {navContent}
        </>
    );
}
export default Nav;