import './App.css';
import {Routes, Route} from 'react-router-dom';


import Nav from './components/nav component/nav.js';
import Banner from './components/banner component/banner.js';
import Content from './components/content component/content.js';
import About from './components/about component/about.js';
import Contact from './components/contact component/contact.js';
import Service from './components/service component/service.js';
import URegister from './components/register component/register.js';
import CRegister from './components/company register component/comp_register.js';
import Login from './components/login component/login.js';
import VerifyUser from './components/verifyuser component/verifyuser.js';
import AdminHome from './components/adminHome component/adminHome.js';
import CPAdmin from './components/CPAdmin component/CPAdmin.js';
import EPAdmin from './components/EPAdmin component/EPAdmin.js';
import UserHome from './components/userHome component/userHome.js';
import CPUser from './components/CPUser component/CPUser.js';
import EPUser from './components/EPUser component/EPUser.js';
import CompanyHome from './components/CompanyHome component/companyHome.js';
import CPCompany from './components/CPCompany component/CPCompany.js';
import Addjob from './components/Addjobs component/addjob.js';
import Footer from './components/footer component/footer.js';
import Logout from './components/logout component/logout.js';
import FPassword from './components/Forgot Password component/ForgotPassword.js';
import Manageuser from './components/ManageUser component/manageuser.js';
import Addcategory from './components/addcategory component/addcategory.js';
import Addsubcategory from './components/addSubcategory component/addsubcategory.js';
import Viewjob from './components/viewjob component/viewjob.js';
import ViewSubCategory from './components/viewsubCatergory component/viewsubCategory.js';
import Apply from './components/Apply component/Apply.js';

function App() {
  return (
    <>
    <div id="container" >
      <Nav/>
      <Banner/>
      <Routes>
        <Route path ='/' element={ <Content/> }></Route>
        <Route path ='/about' element={ <About /> }></Route>s
        <Route path ='/contact' element = { <Contact/> }></Route>
        <Route path = '/service' element = { <Service/> }></Route>
        <Route path= '/companyregister' element = {<CRegister/>}></Route>
        <Route path = '/userregister' element = {<URegister/>}></Route>
        <Route path = '/login' element = {<Login/>}></Route>
        <Route path = '/VerifyUser/:email' element = {<VerifyUser/>}></Route>
        <Route path = '/admin' element = {<AdminHome/>}></Route>
        <Route path = '/cpadmin' element = {<CPAdmin/>}></Route>
        <Route path = '/epadmin' element = {<EPAdmin/>}></Route>
        <Route path = '/user' element = {<UserHome/>}></Route>
        <Route path = '/cpuser' element = {<CPUser/>}></Route>
        <Route path = '/epuser' element = {<EPUser/>}></Route>
        <Route path = '/company' element = {<CompanyHome/>}></Route>
        <Route path ='/cpcompany' element = {<CPCompany/>}></Route>
        <Route path = '/addjob' element = {<Addjob/>}></Route>
        <Route path = '/logout' element = {<Logout/>}></Route>
        <Route path = '/forgot' element = {<FPassword/>}></Route>
        <Route path = '/manageuser' element = {<Manageuser/>}></Route>
        <Route path = '/addcategory' element = {<Addcategory/>}></Route>
        <Route path = "/addsubcategory" element = {<Addsubcategory/>}></Route>
        <Route path = "/viewjob/:subCatname" element = {<Viewjob/>}></Route>
        <Route path = "/viewsubcategory/:catname" element = {<ViewSubCategory/>}></Route>
        <Route path = "/apply" element = {<Apply/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;