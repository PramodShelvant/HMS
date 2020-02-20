import React, { useEffect } from 'react'
import {useLocation,Route,useHistory} from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/Navbar'
import AdminPageContent from './PageContent/AdminPageContent'
import {Accountant} from '../Data/Accountant'
import {Patient} from '../Data/Patient'
import {Pharmacy} from '../Data/Pharmacy'
import {Admin} from '../Data/Admin'
import {Doctor} from '../Data/Doctor'
import {Receptionist} from '../Data/Receptionist'
export default (prop) =>{
    const history=useHistory();
    const location=useLocation();
    const u=location.pathname.toString().split('/')[2];
    // let name1=window.localStorage.getItem('name')
    // let col1=window.localStorage.getItem('col')
    // let url1=window.localStorage.getItem('url')
    // let sidebtn1=window.localStorage.getItem('sidebtn')
    
    const [breadcrum,setBreadcrum]=React.useState('Appointments');
    const [url,seturl]=React.useState(u);
    const [sidebutton,setsidebutton]=React.useState([]);
    const [col,setcol]=React.useState(['asdf','cvbnm']);
const [myrole,setmyrole]=React.useState('receptionist');
    useEffect(()=>{
        let user=window.localStorage.getItem('user')
if(window.localStorage.getItem('islogin') && window.localStorage.getItem('user')){
   let role='admin';
 setmyrole(role)
 let myd=data[role].find((item)=>item.url==u);
// alert(JSON.stringify(myd))
 setBreadcrum(myd['name']||'')
 seturl(u)
 setsidebutton(myd.sidebtn||[])
 setcol(myd.col)
 }
 else{
  history.push('/')
 }

    },[myrole])

    const data={
          receptionist:Receptionist,
          accountant:Accountant ,
          patient:Patient,
          pharmacy:Pharmacy,
          doctor:Doctor,
          admin:Admin
        }
    return(
       
        
        <div className="wrapper">
<Navbar />
<Sidebar items={data[myrole]} setBreadcrum={setBreadcrum} seturl={seturl} setcol={setcol} setsidebutton={setsidebutton}/>
<AdminPageContent breadcrum={breadcrum} setBreadcrum={setBreadcrum} url={url} col={col} sidebutton={sidebutton}  setcol={setcol} seturl={seturl} setsidebutton={setsidebutton}/>
</div>
    )
}
