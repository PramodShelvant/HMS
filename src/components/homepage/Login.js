import React from 'react';
import {useFormik} from 'formik'
import {Postdata} from '../../Network/Server'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

export default (prop)=>{
const history=useHistory();
const formik=useFormik({
 initialValues:{ email:'',
  password:''},
  onSubmit:values=>{
    alert(JSON.stringify(values));
    Postdata('login','POST',values).then(data=>{
      console.log(data.msg)
      if(data.msg.status==1){
        if(data.details.role=='admin'){
          toast.success(data.msg.msg, {
          position: toast.POSITION.TOP_CENTER
        });
        window.localStorage.setItem('islogin',true)
        window.localStorage.setItem('user',data.msg.user);
        window.location.href='/dashboard'
      }
      else {
        toast.success(data.msg.msg, {
          position: toast.POSITION.TOP_CENTER
        });
        window.localStorage.setItem('islogin',true)
        window.localStorage.setItem('user',data.msg.user);
        window.location.href='/patient'

      }
      }
      else{
        toast.error(data.msg.msg, {
          position: toast.POSITION.TOP_CENTER
        }); 
      }
    })}
  
})
return(
<React.Fragment>
<div className="modal fade"   id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog border" role="document">
    <div className="modal-content ">
      <div className="card-header bg-success">Login
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button></div>
      <div className="modal-body " >
         
          <form class="text-center p-3" onSubmit={formik.handleSubmit}> 
        
          <div className="m-4 p-4 ">
          <div class="form-group d-flex align-items-baseline">
          <i class="fa fa-user " aria-hidden="true"></i>
         <input type="text" class="form-control  border-top-0 border-left-0  border-right-0 bg-transparent pl-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UserName" onChange={(e)=>formik.setFieldValue('email',e.target.value)}/>
        </div>
  <div class="form-group d-flex align-items-baseline">
    <i class="fa fa-key " aria-hidden="true"></i>
     <input type="password" class="form-control border-top-0 border-left-0 border-right-0 bg-transparent pl-2" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>formik.setFieldValue('password',e.target.value)}/>
  </div>
  </div>
  <button type="submit" class="btn btn-outline-success w-25 ">Login</button>
</form>
<div class="text-center p-0">
  <button type="button" class="btn btn-link  text-center ">Forgot Password ?</button>
  <span class="d-block mb-3 text-black">- - - - - OR - - - - -</span>
  <span class="bg-primary p-1 mr-3"><i class="fab fa-facebook"></i></span>
  
<span class="bg-danger p-1 mr-3"><i class="fab fa-google-plus"></i></span>

</div>

      </div>
      
    </div>
    
  </div>
  
</div>
</React.Fragment>)
}