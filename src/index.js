import React, { Component } from 'react';
import { render } from 'react-dom';
import Dashboard from './components/OPD/dashboard'
import {BrowserRouter,Route,Link,Switch } from 'react-router-dom'
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
import AddPatient from './components/Forms/OperatioTheatre/AddPatient'
import Registration from './components/Forms/Registration'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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
       <Route path='/registration' render={()=><Registration />}></Route>
       <Route path='/dashboard' render={()=><Dashboard />}></Route>
       <Route path='/' exact  render={()=><Header/>}>

        </Route>
        </Switch>
        <ToastContainer />
  
   </BrowserRouter>
   )
  }
}

render(<App />, document.getElementById('root'));
