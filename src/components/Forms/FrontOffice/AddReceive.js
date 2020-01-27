import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default  () => {
return(
        
<div className="card w-50 mx-auto m-3 ">
   <div class="card-header bg-primary "> Add Receive
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  <div className="card-body">     
  <form>
      <div class="form-row">
         <div class="form-group col-md-6">
           <label for="fromtitle">From Title</label>
           <input type="text" class="form-control" id="Fromtitle"/>
         </div>
         <div className="form-group col-md-6">
             <label for="referenceno">Reference No</label>
             <input type="number" className="form-control" id="referenceno"/>
         </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="address">Address</label>
          <textarea className="form-control bg-transparent" rows="2" placeholder="" value="">
          </textarea>
        </div>
        <div className="form-group col-md-6">
          <label for="address">Note</label>
          <textarea className="form-control bg-transparent" rows="2" placeholder="" value="">
          </textarea>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="totitle">To Title</label>
          <input type="text" className="form-control" id="totitle"/>
        </div>
        <div class="form-group col-md-6">
      <label for="inputState">Date</label>
      <div className="w-100 ">
          <DatePicker className="form-control "  style={{width:'100% !important'}} selected={new Date()}/>
      </div> 
    </div>
      </div>
      <div class="form-group ">
      <label for="inputCity">Attach Document</label>
      <input type="file" class="custom-file" id="inputCity" placeholder="Attach Document"/>
    </div>
    <button type="submit" class="btn bg-primary form-control">Save</button>
  </form>
</div>
</div>

    );
}