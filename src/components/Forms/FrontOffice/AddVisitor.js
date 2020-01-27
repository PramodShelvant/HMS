import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default  () => {
return(
        
<div className="card w-50 mx-auto m-3 ">
   <div class="card-header bg-primary "> Add Visitor
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  <div className="card-body">     
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Purpose</label>
      <select id="input" class="form-control">
        <option selected>Choose</option>
        <option>Visit</option>
        <option>Enquiry</option>
        <option>Seminar</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Name</label>
      <input type="text" class="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputAddress">Phone</label>
      <input type="number" class="form-control" id="inputAddress" placeholder="Mobile Number"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputAddress2">ID Card</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Name of Id Card"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Number Of Person</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputState">Date</label>
      <div className="w-100 ">
          <DatePicker className="form-control "  style={{width:'100% !important'}} selected={new Date()}/>
      </div> 
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">In Time</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCity">Out Time</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
  </div>
  <div className="form-row">
  <div className="form-group mb-2 col-md-6">
  <label for="inputCity">Note</label>
    <textarea className="form-control bg-transparent" rows="2" placeholder="Note" value="Note">
    </textarea>
  </div>
  <div class="form-group col-md-6  ">
      <label for="inputCity">Attach Document</label>
      <input type="file" class="custom-file " id="inputCity"/>
    </div>
    </div>

    
   
 <button type="submit" class="btn btn-outline-primary form-control">Save</button>
 
</form>

</div>
</div>

    );
}