import React, { Component } from 'react';
import { render } from 'react-dom';
import Dashboard from './components/OPD/dashboard'

import AdminDashboard from './components/OPD/AdminDashboard'
import {BrowserRouter,Route,Switch } from 'react-router-dom'
import Header from './components/homepage/Header'
import Myd from './components/myd/Dashboard'
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
       <Route path='/myd' render={()=><Myd/>}/>
       <Route path='/registration' render={()=><Registration />}></Route>
       <Route path='/dashboard' render={()=><Dashboard />}></Route>
       <Route path='/admin' render={()=><AdminDashboard/>}/>
       <Route path='/' exact  render={()=><Header/>}>

        </Route>
        </Switch>
        <ToastContainer />
  
   </BrowserRouter>
   )
  }
}

render(<App />, document.getElementById('root'));
