import React, { useEffect } from 'react'
import {useLocation,Route,useHistory} from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/Navbar'
import PageContent from './PageContent/PageContent'
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
    const [id,setid]=React.useState();
    const [breadcrum,setBreadcrum]=React.useState('Appointments');
    const [url,seturl]=React.useState(u);
    const [sidebutton,setsidebutton]=React.useState([]);
    const [col,setcol]=React.useState(['Patient Name','Appointment No','Date','Phone','Gender','Doctor','Source','Status']);
const [myrole,setmyrole]=React.useState('receptionist');
    useEffect(()=>{
        let user=window.localStorage.getItem('user')
if(window.localStorage.getItem('islogin') && window.localStorage.getItem('user')){
  // let role=JSON.parse(user).role;
  let role='receptionist'
 setmyrole(role)
 let myd=data[role].find((item)=>item.url==u);
//alert(JSON.stringify(myd))
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
<Sidebar items={data[myrole]} setid={setid} setBreadcrum={setBreadcrum} seturl={seturl} setcol={setcol} setsidebutton={setsidebutton}/>
<PageContent breadcrum={breadcrum} setid={setid} setBreadcrum={setBreadcrum} url={url} col={col} sidebutton={sidebutton}  setcol={setcol} seturl={seturl} setsidebutton={setsidebutton}/>
</div>
    )
}
