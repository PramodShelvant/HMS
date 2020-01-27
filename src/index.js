import React, { Component } from 'react';
import { render } from 'react-dom';
import Dashboard from './components/OPD/dashboard'
import {Receptionist,Patient} from './components/OPD/Data'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Header from './components/homepage/Header'
import AddVisitor from './components/Forms/FrontOffice/AddVisitor'
import CallLog from './components/Forms/FrontOffice/CallLog'
import AddReceive from './components/Forms/FrontOffice/AddReceive'
import AddDispatch from './components/Forms/FrontOffice/AddDispatch'
import AddComplain from './components/Forms/FrontOffice/AddComplain'
import AddPat from './components/Forms/OPDForms/AddPat'
import IPDAddpat from './components/Forms/IPDForms/IPDAddpat'
import GenerateBill from './components/Forms/Pharmacy/GenerateBill'
import AddMedicine from './components/Forms/Pharmacy/AddMedicine'
import PurchaseMedicine from './components/Forms/Pharmacy/PurchaseMedicine'
import ImportMedicine from './components/Forms/Pharmacy/ImportMedicine'
import Pathology from './components/Forms/Pathology/Pathology'
import Radiology from './components/Forms/Radiology/Radiology'


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
   return  (
     <BrowserRouter>
     <Switch>
       <Route path='/Radiology' render={()=><Radiology />}></Route> 
       <Route path='/Pathology' render={()=><Pathology />}></Route> 
       <Route path='/ImportMedicine' render={()=><ImportMedicine />}></Route>
       <Route path='/PurchaseMedicine' render={()=><PurchaseMedicine />}></Route>
       <Route path='/AddMedicine' render={()=><AddMedicine />}></Route>
       <Route path='/GenerateBill' render={()=><GenerateBill/>}></Route>
       <Route path='/IPDAddpat' render={()=><IPDAddpat/>}></Route>
       <Route path='/AddPat' render={()=><AddPat />}></Route>
       <Route path='/AddComplain' render={()=><AddComplain />}></Route>
       <Route path='/AddDispatch' render={()=><AddDispatch />}></Route>
       <Route path='/AddReceive' render={()=><AddReceive />}></Route>
       <Route path= '/CallLog' render={()=><CallLog />}></Route>
       <Route path ='/AddVisitor'  render={()=><AddVisitor />}></Route>
       <Route path='/receptionist' render={()=><Dashboard data={Receptionist}/>}></Route>
       <Route path='/patient' render={()=><Dashboard data={Patient}/>}></Route>
       <Route path='/dashboard' exact render={()=><Dashboard data={Patient}/>}></Route>
       <Route path='/'  render={()=><Header/>}>

        </Route>
        </Switch>
   </BrowserRouter>
   )
  }
}

render(<App />, document.getElementById('root'));
